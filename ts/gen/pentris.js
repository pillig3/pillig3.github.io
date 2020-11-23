var NUM_COLUMNS = 14;
var NUM_ROWS = 20;
var TOP_MARGIN = 40;
var BACKGROUND_COLOR = "#D3EDED";
var cellHeight;
var boardWidth;
var boardLeft;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
window.onload = onInitialLoad;
window.onresize = setCellSizeValues;
var pieces = {
    /**
     * Tetrominos
     */
    smallI: {
        color: "cyan",
        shape: [
            [true], [true], [true], [true],
        ]
    },
    smallT: {
        color: "magenta",
        shape: [
            [true, true, true],
            [false, true, false],
        ]
    },
    smallO: {
        color: "yellow",
        shape: [
            [true, true],
            [true, true],
        ]
    },
    smallL: {
        color: "blue",
        shape: [
            [true, false],
            [true, false],
            [true, true],
        ]
    },
    smallS: {
        color: "green",
        shape: [
            [false, true, true],
            [true, true, false],
        ]
    },
    /**
     * Pentominos
     */
    F: {
        color: "red",
        shape: [
            [false, true, true],
            [true, true, false],
            [false, true, false],
        ]
    },
    I: {
        color: "orange",
        shape: [
            [true], [true], [true], [true], [true],
        ]
    },
    L: {
        color: "lightyellow",
        shape: [
            [true, false],
            [true, false],
            [true, false],
            [true, true],
        ]
    },
    N: {
        color: "lightgreen",
        shape: [
            [false, true],
            [false, true],
            [true, true],
            [true, false],
        ]
    },
    P: {
        color: "lightblue",
        shape: [
            [true, true],
            [true, true],
            [true, false],
        ]
    },
    T: {
        color: "pink",
        shape: [
            [true, true, true],
            [false, true, false],
            [false, true, false],
        ]
    },
    U: {
        color: "#9f1aff",
        shape: [
            [true, false, true],
            [true, true, true],
        ]
    },
    V: {
        color: "#b3003b",
        shape: [
            [true, false, false],
            [true, false, false],
            [true, true, true],
        ]
    },
    W: {
        color: "#cc6600",
        shape: [
            [true, false, false],
            [true, true, false],
            [false, true, true],
        ]
    },
    X: {
        color: "#30b5b5",
        shape: [
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ]
    },
    Y: {
        color: "#0059b3",
        shape: [
            [true, true, true, true],
            [false, true, false, false],
        ]
    },
    Z: {
        color: "#ff667d",
        shape: [
            [true, true, false],
            [false, true, false],
            [false, true, true],
        ]
    }
};
//#endregion
//#region Helper classes/interfaces/enums
/**
 * Just an (x,y) pair
 */
var Pair = /** @class */ (function () {
    function Pair(x, y) {
        this.x = x;
        this.y = y;
    }
    return Pair;
}());
var initialPiece = randomPiece();
/**
 * Initial state
 */
var state = {
    board: newMatrix(NUM_COLUMNS, NUM_ROWS, ""),
    fixedBoard: newMatrix(NUM_COLUMNS, NUM_ROWS, ""),
    currentPiece: initialPiece,
    currentPosition: new Pair(6, 0),
    currentShapeGrid: pieces[initialPiece].shape,
    nextPiece: randomPiece(),
    keysPressed: [],
    counter: 0,
    waitTime: 100,
    level: 0,
    linesCleared: 0,
    savedPiece: "",
    score: 0,
    cPressed: false
};
/**
 * Reset the state to its initial values for a new game
 */
function resetState() {
    var initialPiece = randomPiece();
    state.board = newMatrix(NUM_COLUMNS, NUM_ROWS, "");
    state.fixedBoard = newMatrix(NUM_COLUMNS, NUM_ROWS, "");
    state.currentPiece = initialPiece;
    state.currentPosition = new Pair(6, 0);
    state.currentShapeGrid = pieces[initialPiece].shape;
    state.nextPiece = randomPiece();
    state.keysPressed = [];
    state.counter = 0;
    state.waitTime = 100;
    state.level = 0;
    state.linesCleared = 0;
    state.savedPiece = "";
    state.score = 0;
    state.cPressed = false;
}
/**
 * Transition to the next state after a piece has fallen into place
 * and start the next piece
 * @param overrideNextPiece If entered, will use this piece next instead of state.nextPiece
 */
function transitionToNextState(overrideNextPiece) {
    if (overrideNextPiece === void 0) { overrideNextPiece = ""; }
    // Clear full rows
    var fullLines = getFullLines();
    if (fullLines.length > 0) {
        state.linesCleared += fullLines.length;
        // Add points
        switch (fullLines.length) {
            case 1:
                state.score += 40 * (state.level + 1);
                break;
            case 2:
                state.score += 100 * (state.level + 1);
                break;
            case 3:
                state.score += 300 * (state.level + 1);
                break;
            case 4:
                state.score += 1200 * (state.level + 1);
                break;
            default:
                state.score += 6000 * (state.level + 1);
                break;
        }
        if (state.linesCleared % 10 === 0) {
            // Increase level
            state.level++;
            state.waitTime = Math.ceil(Math.max(100 - state.level * 8, 20));
        }
        removeLines(fullLines);
    }
    // Set current state to the fixed board
    state.fixedBoard = copyMatrix(state.board);
    // Get the next piece
    if (overrideNextPiece !== "") {
        state.currentPiece = overrideNextPiece;
    }
    else {
        state.currentPiece = state.nextPiece;
        state.nextPiece = randomPiece();
    }
    state.currentPosition = new Pair(6, 0);
    state.currentShapeGrid = copyMatrix(pieces[state.currentPiece].shape);
    state.cPressed = false;
}
/**
 * Handler for a key pressed on the canvas while the game is in progress
 * @param e The key press event
 */
function onCanvasKey(e) {
    switch (e.code) {
        case 'Tab':
            e.preventDefault();
            break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Space':
        case 'KeyX':
        case 'KeyZ':
        case 'KeyC':
            state.keysPressed.push(e.code);
            break;
        default:
            break;
    }
}
document.addEventListener('keydown', onCanvasKey);
/**
 * Handler for a key pressed when the game is over
 * @param e The key press event
 */
function onGameOverKey(e) {
    if (e.code === 'KeyR') {
        document.removeEventListener('keydown', onGameOverKey);
        document.addEventListener('keydown', onCanvasKey);
        resetState();
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        onInitialLoad();
    }
}
//#endregion
//#region On load / resize handlers
/**
 * Called when the page is initially loaded - sets size values and begins the main loop
 */
function onInitialLoad() {
    setCellSizeValues();
    drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    drawBoard();
    mainLoop();
}
/**
 * Set the sizes of cells and where we should position the board on the page
 */
function setCellSizeValues() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    cellHeight = (canvas.height - 2 * TOP_MARGIN) / NUM_ROWS;
    boardWidth = cellHeight * NUM_COLUMNS;
    boardLeft = (canvas.width - boardWidth) / 2;
}
;
//#endregion
//#region Drawing functions
/**
 * Draws the current board
 */
function drawBoard() {
    var edgeColor = "#737373";
    var blankColor = 'black'; //"#cccccc";
    // Draw the actual board
    for (var col = 0; col < state.board.length; col++) {
        var colArray = state.board[col];
        for (var row = 0; row < colArray.length; row++) {
            var color = void 0;
            if (colArray[row] === "") {
                color = blankColor;
            }
            else {
                color = colArray[row];
            }
            var start = new Pair(boardLeft + col * cellHeight, TOP_MARGIN + row * cellHeight);
            drawBorderedRectangle(start.x, start.y, cellHeight - 1, cellHeight - 1, edgeColor, color);
        }
    }
    // Draw the upcoming piece to the right
    var upcomingStartPos = new Pair(boardLeft + cellHeight * (NUM_COLUMNS + 1), TOP_MARGIN);
    var upcomingColor = pieces[state.nextPiece].color;
    drawSinglePieceToTheSide(upcomingStartPos, state.nextPiece, edgeColor, upcomingColor);
    // And the saved piece to the left
    if (state.savedPiece !== "") {
        var savedStartPos = new Pair(boardLeft - cellHeight * 7, TOP_MARGIN);
        var savedColor = pieces[state.savedPiece].color;
        drawSinglePieceToTheSide(savedStartPos, state.savedPiece, edgeColor, savedColor);
    }
    // Draw score and high score
    var scoreStartPos = new Pair(boardLeft + Math.floor(cellHeight * (NUM_COLUMNS + 1)), TOP_MARGIN + Math.floor(6 * cellHeight));
    drawBorderedRectangle(scoreStartPos.x, scoreStartPos.y, 1000, 128, BACKGROUND_COLOR, BACKGROUND_COLOR);
    ctx.font = '24px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.fillText('Level: ' + state.level, scoreStartPos.x, scoreStartPos.y);
    ctx.fillText('Score: ' + state.score, scoreStartPos.x, scoreStartPos.y + 24 + Math.floor(cellHeight / 2));
    ctx.fillText('High Score: ' + getHighScore(), scoreStartPos.x, scoreStartPos.y + 48 + Math.floor(cellHeight));
}
/**
 * Draws a piece off to the side of the board
 * @param startPosition The position to begin drawing the piece (top left, with one cell of padding)
 * @param piece The name of the piece to draw
 * @param edgeColor The color to draw the edges of the piece
 * @param pieceColor The color to draw the insides
 */
function drawSinglePieceToTheSide(startPosition, piece, edgeColor, pieceColor) {
    // Background
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 6; row++) {
            var start = new Pair(startPosition.x + col * cellHeight, startPosition.y + row * cellHeight);
            drawBorderedRectangle(start.x, start.y, cellHeight - 1, cellHeight - 1, BACKGROUND_COLOR, BACKGROUND_COLOR);
        }
    }
    // Piece
    forEachElementOfShapeGrid(pieces[piece].shape, function (col, row, element) {
        if (element) {
            var start = new Pair(startPosition.x + (col + 1) * cellHeight, startPosition.y + (row + 1) * cellHeight);
            drawBorderedRectangle(start.x, start.y, cellHeight - 1, cellHeight - 1, edgeColor, pieceColor);
        }
    });
}
/**
 * Draw a rectangle with a 1-pixel border
 * @param xStart X-coordinate of the top left of the rectangle
 * @param yStart Y-coordinate of the top left of the rectangle
 * @param width Width of the (border of the) rectangle
 * @param height Height of the (border of the) rectangle
 * @param borderColor Color to paint the border
 * @param fillColor Color to paint the inside
 */
function drawBorderedRectangle(xStart, yStart, width, height, borderColor, fillColor) {
    // Border
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderColor;
    ctx.beginPath();
    ctx.rect(xStart, yStart, width, height);
    ctx.stroke();
    // Inner rectangle
    ctx.fillStyle = fillColor;
    ctx.fillRect(xStart + 1, yStart + 1, width - 2, height - 2);
}
/**
 * Erases the given shape from the board, replacing colors with null
 * @param shape The shape as a boolean matrix
 * @param position The starting position from which to erase the shape
 */
function eraseShape(shape, position) {
    forEachElementOfShapeGrid(shape, function (col, row, element) {
        if (element) {
            var boardPos = new Pair(position.x + col, position.y + row);
            state.board[boardPos.x][boardPos.y] = "";
        }
    });
}
/**
 * Draws the given shape on the board
 * @param shape The shape as a boolean matrix
 * @param position The starting position from which to draw the shape
 * @param color The color for the inside of the shape
 */
function drawShape(shape, position, color) {
    forEachElementOfShapeGrid(shape, function (col, row, element) {
        if (element) {
            var boardPos = new Pair(position.x + col, position.y + row);
            state.board[boardPos.x][boardPos.y] = color;
        }
    });
}
/**
 * Draws the banner for the game over state
 * @param isHighScore True if this game set a new high score
 */
function drawGameOver(isHighScore) {
    if (isHighScore === void 0) { isHighScore = false; }
    // Background
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, TOP_MARGIN + 4.5 * cellHeight, canvas.width, (isHighScore ? 4 * cellHeight : 3 * cellHeight));
    // Text
    ctx.globalAlpha = 1;
    ctx.font = '48px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!', canvas.width / 2, TOP_MARGIN + 6 * cellHeight);
    ctx.font = '24px sans-serif';
    if (isHighScore) {
        ctx.fillText('Congratulations! You got a new high score!', canvas.width / 2, TOP_MARGIN + 7 * cellHeight);
        ctx.fillText('Press R to play again.', canvas.width / 2, TOP_MARGIN + 8 * cellHeight);
    }
    else {
        ctx.fillText('Press R to play again.', canvas.width / 2, TOP_MARGIN + 7 * cellHeight);
    }
    // Change listeners
    document.removeEventListener('keydown', onCanvasKey);
    document.addEventListener('keydown', onGameOverKey);
}
//#endregion
//#region Main loop and moving functions
/**
 * Main loop for the game - calls itself with a timeout over and over checking to see whether buttons
 * are pressed or if enough time has elapsed to move a piece down automatically
 */
function mainLoop() {
    state.counter++;
    var gameOver = false;
    var forceDown = false;
    var tryDown = true;
    if (state.keysPressed.length > 0) {
        if (state.keysPressed.indexOf("ArrowDown") >= 0) {
            moveCurrentPiece("D");
        }
        if (state.keysPressed.indexOf("ArrowLeft") >= 0) {
            moveCurrentPiece("L");
        }
        if (state.keysPressed.indexOf("ArrowRight") >= 0) {
            moveCurrentPiece("R");
        }
        if (state.keysPressed.indexOf("ArrowUp") >= 0) {
            transformCurrentPiece(1 /* R90 */);
        }
        if (state.keysPressed.indexOf("Space") >= 0) {
            while (moveCurrentPiece("D")) {
                // this line intentionally left blank
            }
            forceDown = true;
        }
        if (state.keysPressed.indexOf("KeyX") >= 0 || state.keysPressed.indexOf("KeyZ") >= 0) {
            transformCurrentPiece(4 /* H */);
        }
        if (state.keysPressed.indexOf("KeyC") >= 0 && !state.cPressed) {
            eraseShape(state.currentShapeGrid, state.currentPosition);
            var prevSavedPiece = state.savedPiece;
            state.savedPiece = state.currentPiece;
            if (prevSavedPiece !== "") {
                transitionToNextState(prevSavedPiece);
            }
            else {
                transitionToNextState();
            }
            state.cPressed = true;
            drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
            if (!moveCurrentPiece("none", false)) {
                gameOver = true;
            }
            tryDown = false;
        }
        state.keysPressed = [];
    }
    // Try to move down every waitTime steps, or if they pressed space
    if (tryDown && (forceDown || state.counter % state.waitTime === 0)) {
        var ret = moveCurrentPiece("D");
        if (!ret) {
            transitionToNextState();
            drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
            if (!moveCurrentPiece("none", false)) {
                gameOver = true;
            }
        }
        state.counter = 0;
    }
    drawBoard();
    if (gameOver) {
        if (state.score > getHighScore()) {
            setHighScore(state.score);
            drawGameOver(true);
        }
        else {
            drawGameOver();
        }
    }
    else {
        setTimeout(mainLoop);
    }
}
/**
 * Transforms the current piece, if possible
 * @param t The transformation to apply to the current piece
 * @returns True if the current piece could be moved, false if something was blocking it
 */
function transformCurrentPiece(t) {
    var newShapeGrid = applyTransformation(t, state.currentShapeGrid);
    var conflict = false;
    forEachElementOfShapeGrid(newShapeGrid, function (col, row, element) {
        if (element) {
            var boardPos = new Pair(state.currentPosition.x + col, state.currentPosition.y + row);
            if (boardPos.x >= state.board.length || boardPos.y >= state.board[0].length || boardPos.x < 0 || boardPos.y < 0) {
                // Would go off the board
                conflict = true;
            }
            else if (state.fixedBoard[boardPos.x][boardPos.y] !== "") {
                // Conflicts with an existing piece
                conflict = true;
            }
        }
    });
    // If no conflicts, move the piece
    if (!conflict) {
        eraseShape(state.currentShapeGrid, state.currentPosition);
        state.currentShapeGrid = newShapeGrid;
        drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    }
    return !conflict;
}
/**
 * Sees whether the current piece can be moved in the specified direction and (optionally) moves it if so
 * @param direction The direction to move the piece, or "none" to check whether the current position is blocked
 * @param tryMove Whether this function should actually try to move the piece or just check possibility
 * @returns True if the current piece could be moved, false if something was blocking it
 */
function moveCurrentPiece(direction, tryMove) {
    if (tryMove === void 0) { tryMove = true; }
    var newPos;
    switch (direction) {
        case "U":
            newPos = new Pair(state.currentPosition.x, state.currentPosition.y - 1);
            break;
        case "D":
            newPos = new Pair(state.currentPosition.x, state.currentPosition.y + 1);
            break;
        case "L":
            newPos = new Pair(state.currentPosition.x - 1, state.currentPosition.y);
            break;
        case "R":
            newPos = new Pair(state.currentPosition.x + 1, state.currentPosition.y);
            break;
        default:
            newPos = state.currentPosition;
            break;
    }
    var conflict = false;
    forEachElementOfShapeGrid(state.currentShapeGrid, function (col, row, element) {
        if (element) {
            var boardPos = new Pair(newPos.x + col, newPos.y + row);
            if (boardPos.x >= state.board.length || boardPos.y >= state.board[0].length || boardPos.x < 0 || boardPos.y < 0) {
                // Would go off the board
                conflict = true;
            }
            else if (state.fixedBoard[boardPos.x][boardPos.y] !== "") {
                // Conflicts with an existing piece
                conflict = true;
            }
        }
    });
    // If no conflicts, move the piece
    if (!conflict && tryMove) {
        eraseShape(state.currentShapeGrid, state.currentPosition);
        state.currentPosition = newPos;
        drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    }
    return !conflict;
}
//#endregion
//#region Shape helpers
/**
 * Apply the transformation given by t to the given shape
 * @param t The transformation to apply
 * @param shape The shape to apply t to
 * @returns The new shape
 */
function applyTransformation(t, shape) {
    var newShape;
    switch (t) {
        case 0 /* Id */:
            return shape;
        case 1 /* R90 */:
            newShape = newMatrix(shape[0].length, shape.length, false);
            for (var col = 0; col < shape.length; col++) {
                for (var row = 0; row < shape[0].length; row++) {
                    newShape[newShape.length - 1 - row][col] = shape[col][row];
                }
            }
            return newShape;
        case 2 /* R180 */:
            return applyTransformation(1 /* R90 */, applyTransformation(1 /* R90 */, shape));
        case 3 /* R270 */:
            return applyTransformation(1 /* R90 */, applyTransformation(2 /* R180 */, shape));
        case 4 /* H */:
            newShape = newMatrix(shape.length, shape[0].length, false);
            for (var col = 0; col < shape.length; col++) {
                for (var row = 0; row < shape[0].length; row++) {
                    newShape[shape.length - 1 - col][row] = shape[col][row];
                }
            }
            return newShape;
        case 5 /* HR90 */:
            return applyTransformation(4 /* H */, applyTransformation(1 /* R90 */, shape));
        case 6 /* HR180 */:
            return applyTransformation(4 /* H */, applyTransformation(2 /* R180 */, shape));
        case 7 /* HR270 */:
            return applyTransformation(4 /* H */, applyTransformation(3 /* R270 */, shape));
        default:
            throw "Non-Transformation entered to applyTransformation";
    }
}
/**
 * Get which rows are filled up
 * @returns An array of the row numbers for which all squares are occupied (in ascending order)
 */
function getFullLines() {
    var fullLines = [];
    for (var row = 0; row < state.board[0].length; row++) {
        var fullRow = true;
        for (var col = 0; col < state.board.length; col++) {
            if (state.board[col][row] === "") {
                fullRow = false;
            }
            if (!fullRow) {
                break;
            }
        }
        if (fullRow) {
            fullLines.push(row);
        }
    }
    return fullLines;
}
/**
 * Remove a series of lines
 * @param lines Lines to be removed from getFulLines - assumed to be consecutive numbers in ascending order
 */
function removeLines(lines) {
    // Copy from current row minus lines.length
    for (var row = lines[lines.length - 1]; row > lines.length - 1; row--) {
        for (var col = 0; col < state.board.length; col++) {
            state.board[col][row] = state.board[col][row - lines.length];
        }
    }
    // Clear first lines.length rows
    for (var row = 0; row < lines.length; row++) {
        for (var col = 0; col < state.board.length; col++) {
            state.board[col][row] = "";
        }
    }
}
//#endregion
//#region General helpers
/**
 * Calls a function for each element of a shape matrix
 * @param shape The shape matrix
 * @param callback The function to call for each cell of shape
 */
function forEachElementOfShapeGrid(shape, callback) {
    for (var col = 0; col < shape.length; col++) {
        for (var row = 0; row < shape[0].length; row++) {
            var element = shape[col][row];
            callback(col, row, element);
        }
    }
}
/**
 * Create a 2D array. We use (columns, rows) for consistency with the canvas drawing functions
 * @param columns The number of columns to make
 * @param rows The number of rows to make
 * @param initialValue The value to initially set to every cell
 * @returns The 2D array filled with initialValue
 */
function newMatrix(columns, rows, initialValue) {
    var ary = [];
    for (var c = 0; c < columns; c++) {
        var innerAry = [];
        for (var r = 0; r < rows; r++) {
            innerAry.push(initialValue);
        }
        ary.push(innerAry);
    }
    return ary;
}
/**
 * Copies one 2D matrix to create a new one
 * @param ary The input matrix
 * @returns A copy of the input matrix
 */
function copyMatrix(ary) {
    var newAry = [];
    for (var c = 0; c < ary.length; c++) {
        var innerAry = [];
        for (var r = 0; r < ary[0].length; r++) {
            innerAry.push(ary[c][r]);
        }
        newAry.push(innerAry);
    }
    return newAry;
}
/**
 * Get the name of a random piece // TODO - should this be adjustable for probability of tetromino vs. pentomino?
 */
function randomPiece() {
    var pieceNames = Object.keys(pieces);
    return pieceNames[Math.floor(Math.random() * pieceNames.length)];
}
/**
 * Get the standing high score
 * @returns The high score from cookies
 */
function getHighScore() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        // If this is the right cookie, return it
        if (c.indexOf('highScore') == 0) {
            return parseInt(c.substring('highScore'.length + 1, c.length));
        }
    }
    return 0;
}
/**
 * Set a new high score
 * @param highScore The score to save
 */
function setHighScore(highScore) {
    var d = new Date();
    d.setTime(d.getTime() + (3650 * 24 * 60 * 60 * 1000));
    document.cookie = "highScore=" + highScore + ";";
}
//#endregion
