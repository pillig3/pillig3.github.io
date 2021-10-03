import * as React from "react";
import { createRef } from "react";
import { render } from "react-dom";
import "./index.scss";

const canvasRef = createRef<HTMLCanvasElement>();

render(
	<canvas id="canvas" className="full_canvas" tabIndex={0} ref={canvasRef}></canvas>,
	document.querySelector("#root") as HTMLElement,
);

const NUM_COLUMNS = 14;
const NUM_ROWS = 20;
const TOP_MARGIN = 40;
const BACKGROUND_COLOR = "#D3EDED";

var cellHeight: number;
var boardWidth: number;
var boardLeft: number;
var gameOver = false;

const canvas = canvasRef.current!;
const ctx = canvas.getContext("2d")!;

window.onresize = setCellSizeValues;

//#region Definition of pieces
interface Piece {
	color: string;
	shape: boolean[][];
}

const enum PieceNames {
	SmallI,
	SmallL,
	SmallO,
	SmallS,
	SmallT,
	F,
	L,
	I,
	P,
	N,
	U,
	T,
	V,
	W,
	X,
	Y,
	Z,
}

type PieceName = keyof typeof PieceNames;

const pieces: { [pieceName in PieceName]: Piece } = {
	/**
	 * Tetrominos
	 */
	SmallI: {
		color: "cyan",
		shape: [[true], [true], [true], [true]],
	},
	SmallT: {
		color: "magenta",
		shape: [
			[true, true, true],
			[false, true, false],
		],
	},
	SmallO: {
		color: "yellow",
		shape: [
			[true, true],
			[true, true],
		],
	},
	SmallL: {
		color: "blue",
		shape: [
			[true, false],
			[true, false],
			[true, true],
		],
	},
	SmallS: {
		color: "green",
		shape: [
			[false, true, true],
			[true, true, false],
		],
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
		],
	},
	I: {
		color: "orange",
		shape: [[true], [true], [true], [true], [true]],
	},
	L: {
		color: "lightyellow",
		shape: [
			[true, false],
			[true, false],
			[true, false],
			[true, true],
		],
	},
	N: {
		color: "lightgreen",
		shape: [
			[false, true],
			[false, true],
			[true, true],
			[true, false],
		],
	},
	P: {
		color: "lightblue",
		shape: [
			[true, true],
			[true, true],
			[true, false],
		],
	},
	T: {
		color: "pink",
		shape: [
			[true, true, true],
			[false, true, false],
			[false, true, false],
		],
	},
	U: {
		color: "#9f1aff", // Indigo
		shape: [
			[true, false, true],
			[true, true, true],
		],
	},
	V: {
		color: "#b3003b", // Maroon
		shape: [
			[true, false, false],
			[true, false, false],
			[true, true, true],
		],
	},
	W: {
		color: "#cc6600", // Ochre
		shape: [
			[true, false, false],
			[true, true, false],
			[false, true, true],
		],
	},
	X: {
		color: "#30b5b5", // Aquamarine
		shape: [
			[false, true, false],
			[true, true, true],
			[false, true, false],
		],
	},
	Y: {
		color: "#0059b3", // Dark blue
		shape: [
			[true, true, true, true],
			[false, true, false, false],
		],
	},
	Z: {
		color: "#ff667d", // Salmon
		shape: [
			[true, true, false],
			[false, true, false],
			[false, true, true],
		],
	},
};
//#endregion

//#region Helper classes/interfaces/enums

/**
 * Just an (x,y) pair
 */
class Pair {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

/**
 * Transformations that can be made to the pieces
 */
const enum Transformation {
	Id,
	R90,
	R180,
	R270,
	H,
	HR90,
	HR180,
	HR270,
}

//#endregion

//#region State definition and handlers

/**
 * Contains all the info on the state of the game
 */
interface IState {
	board: string[][]; // Visual board - each element is the color of that cell
	fixedBoard: string[][]; // Board of non-movable pieces
	currentPiece: PieceName; // Currently-dropping piece
	currentPosition: Pair;
	currentShapeGrid: boolean[][];
	nextPiece: PieceName; // Next up piece
	keysPressed: string[]; // Keys pressed since the last loop
	counter: number;
	waitTime: number;
	level: number;
	linesCleared: number;
	savedPiece: PieceName | ""; // Piece saved with 'c'
	score: number;
	cPressed: boolean;
}

const initialPiece = randomPiece();

/**
 * Initial state
 */
const state: IState = {
	board: newMatrix<string>(NUM_COLUMNS, NUM_ROWS, ""),
	fixedBoard: newMatrix<string>(NUM_COLUMNS, NUM_ROWS, ""),
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
	cPressed: false,
};

/**
 * Reset the state to its initial values for a new game
 */
function resetState(): void {
	const initialPiece = randomPiece();
	state.board = newMatrix<string>(NUM_COLUMNS, NUM_ROWS, "");
	state.fixedBoard = newMatrix<string>(NUM_COLUMNS, NUM_ROWS, "");
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
function transitionToNextState(overrideNextPiece: PieceName | "" = ""): void {
	// Clear full rows
	const fullLines = getFullLines();
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
	} else {
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
function onCanvasKey(e: KeyboardEvent): void {
	switch (e.code) {
		case "Tab":
			e.preventDefault();
			break;
		case "ArrowUp":
		case "ArrowDown":
		case "ArrowLeft":
		case "ArrowRight":
		case "Space":
		case "KeyX":
		case "KeyZ":
		case "KeyC":
			state.keysPressed.push(e.code);
			break;
		default:
			break;
	}
}
document.addEventListener("keydown", onCanvasKey);

/**
 * Handler for a key pressed when the game is over
 * @param e The key press event
 */
function onGameOverKey(e: KeyboardEvent): void {
	if (e.code === "KeyR") {
		gameOver = false;
		document.removeEventListener("keydown", onGameOverKey);
		document.addEventListener("keydown", onCanvasKey);
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
function onInitialLoad(): void {
	setCellSizeValues();
	drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
	drawBoard();
	mainLoop();
}

/**
 * Set the sizes of cells and where we should position the board on the page
 */
function setCellSizeValues(): void {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	if (canvas.width / canvas.height < 1.3) {
		canvas.height = canvas.width / 1.3;
	}
	ctx.fillStyle = BACKGROUND_COLOR;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	cellHeight = (canvas.height - 2 * TOP_MARGIN) / NUM_ROWS;
	boardWidth = cellHeight * NUM_COLUMNS;
	boardLeft = (canvas.width - boardWidth) / 2;
	if (gameOver) {
		drawBoard();
		drawGameOver();
	}
}

//#endregion

//#region Drawing functions

/**
 * Draws the current board
 */
function drawBoard(): void {
	const edgeColor = "#737373";
	const blankColor = "black"; //"#cccccc";
	// Draw the actual board
	for (let col = 0; col < state.board.length; col++) {
		const colArray = state.board[col];
		for (let row = 0; row < colArray.length; row++) {
			let color: string;
			if (colArray[row] === "") {
				color = blankColor;
			} else {
				color = colArray[row];
			}
			const start = new Pair(boardLeft + col * cellHeight, TOP_MARGIN + row * cellHeight);
			drawBorderedRectangle(start.x, start.y, cellHeight - 1, cellHeight - 1, edgeColor, color);
		}
	}

	// Draw the upcoming piece to the right
	const upcomingStartPos = new Pair(boardLeft + cellHeight * (NUM_COLUMNS + 1), TOP_MARGIN);
	const upcomingColor = pieces[state.nextPiece].color;
	drawSinglePieceToTheSide(upcomingStartPos, state.nextPiece, edgeColor, upcomingColor);

	// And the saved piece to the left
	if (state.savedPiece !== "") {
		const savedStartPos = new Pair(boardLeft - cellHeight * 7, TOP_MARGIN);
		const savedColor = pieces[state.savedPiece].color;
		drawSinglePieceToTheSide(savedStartPos, state.savedPiece, edgeColor, savedColor);
	}

	// Draw score and high score
	const scoreStartPos = new Pair(
		boardLeft + Math.floor(cellHeight * (NUM_COLUMNS + 1)),
		TOP_MARGIN + Math.floor(6 * cellHeight),
	);
	drawBorderedRectangle(scoreStartPos.x, scoreStartPos.y, 1000, 128, BACKGROUND_COLOR, BACKGROUND_COLOR);
	ctx.font = "24px sans-serif";
	ctx.fillStyle = "black";
	ctx.textAlign = "left";
	ctx.fillText("Level: " + state.level, scoreStartPos.x, scoreStartPos.y);
	ctx.fillText("Score: " + state.score, scoreStartPos.x, scoreStartPos.y + 24 + Math.floor(cellHeight / 2));
	ctx.fillText(
		"High Score: " + getHighScore(),
		scoreStartPos.x,
		scoreStartPos.y + 48 + Math.floor(cellHeight),
	);
}

/**
 * Draws a piece off to the side of the board
 * @param startPosition The position to begin drawing the piece (top left, with one cell of padding)
 * @param piece The name of the piece to draw
 * @param edgeColor The color to draw the edges of the piece
 * @param pieceColor The color to draw the insides
 */
function drawSinglePieceToTheSide(
	startPosition: Pair,
	piece: PieceName,
	edgeColor: string,
	pieceColor: string,
): void {
	// Background
	for (let col = 0; col < 7; col++) {
		for (let row = 0; row < 6; row++) {
			const start = new Pair(startPosition.x + col * cellHeight, startPosition.y + row * cellHeight);
			drawBorderedRectangle(
				start.x,
				start.y,
				cellHeight - 1,
				cellHeight - 1,
				BACKGROUND_COLOR,
				BACKGROUND_COLOR,
			);
		}
	}
	// Piece
	forEachElementOfShapeGrid(pieces[piece].shape, (col, row, element) => {
		if (element) {
			const start = new Pair(
				startPosition.x + (col + 1) * cellHeight,
				startPosition.y + (row + 1) * cellHeight,
			);
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
function drawBorderedRectangle(
	xStart: number,
	yStart: number,
	width: number,
	height: number,
	borderColor: string,
	fillColor: string,
): void {
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
function eraseShape(shape: boolean[][], position: Pair): void {
	forEachElementOfShapeGrid(shape, (col, row, element) => {
		if (element) {
			const boardPos = new Pair(position.x + col, position.y + row);
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
function drawShape(shape: boolean[][], position: Pair, color: string): void {
	forEachElementOfShapeGrid(shape, (col, row, element) => {
		if (element) {
			const boardPos = new Pair(position.x + col, position.y + row);
			state.board[boardPos.x][boardPos.y] = color;
		}
	});
}

/**
 * Draws the banner for the game over state
 * @param isHighScore True if this game set a new high score
 */
function drawGameOver(isHighScore: boolean = false): void {
	// Background
	ctx.globalAlpha = 0.85;
	ctx.fillStyle = "white";
	ctx.fillRect(
		0,
		TOP_MARGIN + 4.5 * cellHeight,
		canvas.width,
		isHighScore ? 4 * cellHeight : 3 * cellHeight,
	);
	// Text
	ctx.globalAlpha = 1;
	ctx.font = "48px sans-serif";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Game Over!", canvas.width / 2, TOP_MARGIN + 6 * cellHeight);
	ctx.font = "24px sans-serif";
	if (isHighScore) {
		ctx.fillText(
			"Congratulations! You got a new high score!",
			canvas.width / 2,
			TOP_MARGIN + 7 * cellHeight,
		);
		ctx.fillText("Press R to play again.", canvas.width / 2, TOP_MARGIN + 8 * cellHeight);
	} else {
		ctx.fillText("Press R to play again.", canvas.width / 2, TOP_MARGIN + 7 * cellHeight);
	}
	// Change listeners
	document.removeEventListener("keydown", onCanvasKey);
	document.addEventListener("keydown", onGameOverKey);
}

//#endregion

//#region Main loop and moving functions

/**
 * Main loop for the game - calls itself with a timeout over and over checking to see whether buttons
 * are pressed or if enough time has elapsed to move a piece down automatically
 */
function mainLoop(): void {
	state.counter++;
	gameOver = false;
	let forceDown = false;
	let tryDown = true;
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
			transformCurrentPiece(Transformation.R90);
		}
		if (state.keysPressed.indexOf("Space") >= 0) {
			while (moveCurrentPiece("D")) {
				// this line intentionally left blank
			}
			forceDown = true;
		}
		if (state.keysPressed.indexOf("KeyX") >= 0 || state.keysPressed.indexOf("KeyZ") >= 0) {
			transformCurrentPiece(Transformation.H);
		}
		if (state.keysPressed.indexOf("KeyC") >= 0 && !state.cPressed) {
			eraseShape(state.currentShapeGrid, state.currentPosition);
			const prevSavedPiece = state.savedPiece;
			state.savedPiece = state.currentPiece;
			if (prevSavedPiece !== "") {
				transitionToNextState(prevSavedPiece);
			} else {
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
		const ret = moveCurrentPiece("D");
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
		} else {
			drawGameOver();
		}
	} else {
		setTimeout(mainLoop);
	}
}

/**
 * Transforms the current piece, if possible
 * @param t The transformation to apply to the current piece
 * @returns True if the current piece could be moved, false if something was blocking it
 */
function transformCurrentPiece(t: Transformation): boolean {
	const newShapeGrid = applyTransformation(t, state.currentShapeGrid);
	const [offsetX, offsetY] = getOffsetForTransformation(
		state.currentShapeGrid,
		state.currentPiece,
		t === Transformation.H,
	);
	const x = state.currentPosition.x + offsetX;
	const y = state.currentPosition.y + offsetY;
	let conflict = false;
	forEachElementOfShapeGrid(newShapeGrid, (col, row, element) => {
		if (element) {
			const boardPos = new Pair(x + col, y + row);
			if (
				boardPos.x >= state.board.length ||
				boardPos.y >= state.board[0].length ||
				boardPos.x < 0 ||
				boardPos.y < 0
			) {
				// Would go off the board
				conflict = true;
			} else if (state.fixedBoard[boardPos.x][boardPos.y] !== "") {
				// Conflicts with an existing piece
				conflict = true;
			}
		}
	});
	// If no conflicts, move the piece
	if (!conflict) {
		eraseShape(state.currentShapeGrid, state.currentPosition);
		state.currentPosition.x = x;
		state.currentPosition.y = y;
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
function moveCurrentPiece(direction: "U" | "D" | "L" | "R" | "none", tryMove: boolean = true): boolean {
	let newPos: Pair;
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
	let conflict = false;
	forEachElementOfShapeGrid(state.currentShapeGrid, (col, row, element) => {
		if (element) {
			const boardPos = new Pair(newPos.x + col, newPos.y + row);
			if (
				boardPos.x >= state.board.length ||
				boardPos.y >= state.board[0].length ||
				boardPos.x < 0 ||
				boardPos.y < 0
			) {
				// Would go off the board
				conflict = true;
			} else if (state.fixedBoard[boardPos.x][boardPos.y] !== "") {
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
function applyTransformation(t: Transformation, shape: boolean[][]): boolean[][] {
	let newShape: boolean[][];
	switch (t) {
		case Transformation.Id:
			return shape;
		case Transformation.R90:
			newShape = newMatrix<boolean>(shape[0].length, shape.length, false);
			for (let col = 0; col < shape.length; col++) {
				for (let row = 0; row < shape[0].length; row++) {
					newShape[newShape.length - 1 - row][col] = shape[col][row];
				}
			}
			return newShape;
		case Transformation.R180:
			return applyTransformation(Transformation.R90, applyTransformation(Transformation.R90, shape));
		case Transformation.R270:
			return applyTransformation(Transformation.R90, applyTransformation(Transformation.R180, shape));
		case Transformation.H:
			newShape = newMatrix<boolean>(shape.length, shape[0].length, false);
			for (let col = 0; col < shape.length; col++) {
				for (let row = 0; row < shape[0].length; row++) {
					newShape[shape.length - 1 - col][row] = shape[col][row];
				}
			}
			return newShape;
		case Transformation.HR90:
			return applyTransformation(Transformation.H, applyTransformation(Transformation.R90, shape));
		case Transformation.HR180:
			return applyTransformation(Transformation.H, applyTransformation(Transformation.R180, shape));
		case Transformation.HR270:
			return applyTransformation(Transformation.H, applyTransformation(Transformation.R270, shape));
		default:
			throw "Non-Transformation entered to applyTransformation";
	}
}

/**
 * Given a shape, gets the offset to apply after rotation to the position
 * @param shape
 * @param piece
 * @returns The offset -
 * For example, if we have the shape
 *    xzx
 *     x
 * This would return (0,-1) indicating that we should rotate 90' counterclockwise like so:
 *     x
 *    xz
 *     x
 * Where the 'z's are in the same location before and after because we have shifted it -1 in the y direction
 */
function getOffsetForTransformation(
	shape: boolean[][],
	piece: PieceName,
	reflection: boolean,
): [number, number] {
	switch (piece) {
		case "SmallI":
			if (reflection) {
				return [0, 0];
			}
			if (shape.length === 4) {
				// xxxx
				return [1, -1];
			} else {
				// x
				// x
				// x
				// x
				return [-1, 1];
			}
		case "SmallL":
			if (reflection && shape.length === 2) {
				// x
				// x
				// xx
				if (shape[0][1]) {
					return [-1, 0];
				} else {
					return [1, 0];
				}
			} else {
				return [0, 0];
			}
		case "SmallO":
			// xx
			// xx
			return [0, 0];
		case "SmallS":
			if (shape.length === 3) {
				// xx
				//  xx
				return [0, 0];
			} else {
				// x
				// xx
				//  x
				return [0, 0];
			}
		case "SmallT":
			if (shape.length === 3) {
				// xxx
				//  x
				if (reflection) {
					return [0, 0];
				}
				if (shape[0][0]) {
					return [0, -1];
				} else {
					return [1, 0];
				}
			} else {
				// x
				// xx
				// x
				if (shape[0][0]) {
					if (reflection) {
						return [-1, 0];
					} else {
						return [-1, 1];
					}
				} else {
					if (reflection) {
						return [1, 0];
					} else {
						return [0, 0];
					}
				}
			}
		case "F":
			//  xx
			// xx
			//  x
			return [0, 0];
		case "L":
			if (shape.length === 4) {
				// xxxx
				// x
				if (reflection) {
					return [0, 0];
				}
				return [1, -1];
			} else {
				// x
				// x
				// x
				// xx
				if (reflection) {
					if (shape[0][0] && shape[1][0]) {
						if (shape[0][3]) {
							return [-1, 0];
						} else {
							return [1, 0];
						}
					} else {
						if (shape[0][0]) {
							return [-1, 0];
						} else {
							return [1, 0];
						}
					}
				}
				return [-1, 1];
			}
		case "I":
			if (reflection) {
				return [0, 0];
			}
			if (shape.length === 5) {
				// xxxxx
				return [2, -2];
			} else {
				// x
				// x
				// x
				// x
				// x
				return [-2, 2];
			}
		case "P":
			if (shape.length === 3) {
				// xxx
				//  xx
				if (reflection) {
					if (!shape[0][0] || !shape[0][1]) {
						return [1, 0];
					} else {
						return [-1, 0];
					}
				}
				if (!shape[0][0] || !shape[0][1]) {
					return [1, -1];
				} else {
					return [0, 0];
				}
			} else {
				// xx
				// xx
				// x
				if (reflection) {
					return [0, 0];
				}
				if (!shape[0][0] || !shape[1][0]) {
					return [0, 1];
				} else {
					return [-1, 0];
				}
			}
		case "N":
			if (reflection) {
				return [0, 0];
			}
			if (shape.length === 4) {
				// xxx
				//   xx
				return [1, -1];
			} else {
				// x
				// x
				// xx
				//  x
				return [-1, 1];
			}
		case "U":
			if (reflection && shape.length === 2) {
				if (!shape[0][1]) {
					return [1, 0];
				} else {
					return [-1, 0];
				}
			}
			// x x
			// xxx
			return [0, 0];
		case "T":
			// xxx
			//  x
			//  x
			return [0, 0];
		case "V":
			// xxx
			// x
			// x
			return [0, 0];
		case "W":
			//  xx
			// xx
			// x
			return [0, 0];
		case "X":
			//  x
			// xxx
			//  x
			return [0, 0];
		case "Y":
			if (shape.length === 4) {
				// xxxx
				//  x
				if (reflection) {
					return [0, 0];
				}
				return [1, -1];
			} else {
				// x
				// xx
				// x
				// x
				if (reflection) {
					if (!shape[0][0]) {
						return [1, 0];
					} else {
						return [-1, 0];
					}
				}
				return [-1, 1];
			}
		case "Z":
			// xx
			//  x
			//  xx
			return [0, 0];
		default:
			throw "Non-piece entered to getOffsetForRotation!";
	}
}

/**
 * Get which rows are filled up
 * @returns An array of the row numbers for which all squares are occupied (in ascending order)
 */
function getFullLines(): number[] {
	const fullLines: number[] = [];
	for (let row = 0; row < state.board[0].length; row++) {
		let fullRow = true;
		for (let col = 0; col < state.board.length; col++) {
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
function removeLines(lines: number[]) {
	// Copy from current row minus lines.length
	for (let row = lines[lines.length - 1]; row > lines.length - 1; row--) {
		for (let col = 0; col < state.board.length; col++) {
			state.board[col][row] = state.board[col][row - lines.length];
		}
	}
	// Clear first lines.length rows
	for (let row = 0; row < lines.length; row++) {
		for (let col = 0; col < state.board.length; col++) {
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
function forEachElementOfShapeGrid(
	shape: boolean[][],
	callback: (col: number, row: number, element: boolean) => void,
): void {
	for (let col = 0; col < shape.length; col++) {
		for (let row = 0; row < shape[0].length; row++) {
			const element = shape[col][row];
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
function newMatrix<T>(columns: number, rows: number, initialValue: T): T[][] {
	const ary: T[][] = [];
	for (let c = 0; c < columns; c++) {
		const innerAry: T[] = [];
		for (let r = 0; r < rows; r++) {
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
function copyMatrix<T>(ary: T[][]): T[][] {
	const newAry: T[][] = [];
	for (let c = 0; c < ary.length; c++) {
		const innerAry: T[] = [];
		for (let r = 0; r < ary[0].length; r++) {
			innerAry.push(ary[c][r]);
		}
		newAry.push(innerAry);
	}
	return newAry;
}

/**
 * Get the name of a random piece // TODO - should this be adjustable for probability of tetromino vs. pentomino?
 */
function randomPiece(): PieceName {
	const pieceNames = Object.keys(pieces);
	return pieceNames[Math.floor(Math.random() * pieceNames.length)] as PieceName;
}

/**
 * Get the standing high score
 * @returns The high score from cookies
 */
function getHighScore(): number {
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookieArray = decodedCookie.split(";");
	for (var i = 0; i < cookieArray.length; i++) {
		var c = cookieArray[i];
		// If this is the right cookie, return it
		if (c.indexOf("highScore") == 0) {
			return parseInt(c.substring("highScore".length + 1, c.length));
		}
	}
	return 0;
}

/**
 * Set a new high score
 * @param highScore The score to save
 */
function setHighScore(highScore: number) {
	var d = new Date();
	d.setTime(d.getTime() + 3650 * 24 * 60 * 60 * 1000);
	document.cookie = "highScore=" + highScore + ";";
}

//#endregion

onInitialLoad();
