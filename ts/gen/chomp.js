var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var board = [3, 3, 3, 3];
/* represents the board:
 * [a_1, a_2, ..., a_c] represents the board with c columns
 * that has a_1 squares in the first column, etc. */
var rows = 3;
var cols = 4;
var playerCanMove = 1;
function gebi(x) { return document.getElementById(x); }
/* when player clicks tile (c, r) */
function playerMove(c, r) {
    if (playerCanMove) {
        playerCanMove = 0;
        monch(c, r);
        makeLoadingImg();
        if (gameIsOver()) {
            gebi("message_space").innerHTML = "The computer won! Rats!";
            clearLoadingImg();
            playerCanMove = 1;
            return;
        }
        setTimeout(cpuMove, 0); // so board and loading div update before cpu starts working
    }
}
/*
 * computer move, called after playerMove
 */
function cpuMove() {
    return __awaiter(this, void 0, void 0, function () {
        var time, move;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    time = Date.now();
                    move = getBestMove();
                    time = Date.now() - time;
                    if (!(time < 1000)) return [3 /*break*/, 2];
                    // Wait a second so it's not 2 fast
                    return [4 /*yield*/, sleep(1000 - time)];
                case 1:
                    // Wait a second so it's not 2 fast
                    _a.sent();
                    _a.label = 2;
                case 2:
                    monch(move[0], move[1]);
                    playerCanMove = 1;
                    clearLoadingImg();
                    if (gameIsOver()) {
                        gebi("message_space").innerHTML = "Nice! You won!";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function makeLoadingImg() {
    gebi("loading_space").innerHTML = "<div class=\"loader\"></div>";
}
function clearLoadingImg() {
    gebi("loading_space").innerHTML = "<div class=\"fakeloader\"></div>";
}
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
/* returns 1 if game is over */
function gameIsOver() {
    return (board.indexOf(0) == 0); /* if board is all zeros */
}
/* monch off the top right of the board */
function monch(c, r) {
    board = takeABite(board, c, r);
    changeBoardOnscreen(board);
}
/* returns best next position possible */
function getBestMove() {
    /* we try to move to a losing position */
    for (var c = 1; c <= board.length; c++) {
        for (var r = 1; r <= board[c - 1]; r++) {
            var nextPos = takeABite(board, c, r);
            if (isLosingPosition(nextPos)) {
                return [c, r];
            }
        }
    }
    /* otherwise, we play randomly */
    var numSquares = board.reduce(function (x, y) { return x + y; });
    var n = Math.floor(Math.random() * numSquares) + 1;
    if (numSquares > 3) {
        while (n === 1 || n === 2 || n === board[0] + 1) { // don't obviously lose
            n = Math.floor(Math.random() * numSquares) + 1;
        }
    }
    c = 0;
    while (n > board[c]) {
        n -= board[c];
        c += 1;
    }
    r = n;
    c += 1; // classic off-by-one error
    return [c, r];
}
/* monch off the top right of pos */
function takeABite(pos, c, r) {
    var pos1 = pos.slice();
    for (var col = c - 1; col < pos1.length; col++) {
        pos1[col] = Math.min(r - 1, pos1[col]);
    }
    return pos1;
}
/* returns 1 IFF pos is a position such that
 * if the computer has to move from pos it can
 * be forced into a loss. */
function isLosingPosition(pos) {
    if (pos.reduce(function (a, b) { return a + b; }) === 0) {
        return 0; /* no squares left is a winning position, because you just won! */
    }
    /* give pos length 10 for comparison  */
    var pos1 = pos.slice();
    if (pos1.length < 10) {
        pos1.push.apply(pos1, (new Array(10 - pos.length).fill(0)));
    }
    /* search in tables & recurse */
    if (lps["[" + pos1.toString() + "]"]) {
        return 1;
    }
    else if (wps["[" + pos1.toString() + "]"]) {
        return 0;
    }
    for (var c = 1; c <= pos.length; c++) {
        for (var r = 1; r <= pos[c - 1]; r++) {
            if (isLosingPosition(takeABite(pos1, c, r))) {
                wps["[" + pos1.toString() + "]"] = 1;
                return 0; /* if you can reach a losing position, you're not at one */
            }
        }
    }
    lps["[" + pos1.toString() + "]"] = 1;
    return 1;
}
/* setup the board that the user selected */
function setupChomp() {
    rows = parseInt(gebi("chompRowNumber").value);
    cols = parseInt(gebi("chompColumnNumber").value);
    board = new Array(cols).fill(rows);
    var s = "";
    if (!(rows > 1 && cols > 1)) {
        alert("invalid board size (" + rows + " by " + cols + ")");
    }
    else {
        s += "<tbody>";
        for (var r = rows; r >= 1; r--) {
            s += "<tr>";
            for (var c = 1; c <= cols; c++) {
                if (c === 1 && r === 1) {
                    s += "<td><button class=\"poison_button\" onClick=playerMove(1,1) aria-label=\"position 1 1 (poison!)\"></button></td>";
                }
                else {
                    s += "<td><button class=\"chomp_button\" onClick=playerMove(" + c + "," + r + ") aria-label=\"position " + c + " " + r + "\"></button></td>";
                }
            }
            s += "</tr>";
        }
        s += "</tbody>";
        gebi("chomp_table").innerHTML = s;
        gebi("message_space").innerHTML = "&nbsp;";
    }
}
/* Change the displayed board to the one specified by list */
function changeBoardOnscreen(list) {
    var originNeedsPlacing = 1;
    var rowStringList = new Array(rows).fill("<tr>");
    var bottomCells = 0;
    for (var c = 0; c < list.length; c++) { /* go thru the column list */
        var h = list[c];
        for (var ind = h - 1; ind >= 0; ind--) { /* go down the column */
            if (ind === 0 && originNeedsPlacing) {
                rowStringList[rows - ind - 1] = rowStringList[rows - ind - 1] + "<td><button class=\"poison_button\" onClick=playerMove(1,1)></button></td>";
                originNeedsPlacing = 0;
                bottomCells++;
            }
            else {
                if (ind === 0) {
                    bottomCells++;
                }
                rowStringList[rows - ind - 1] = rowStringList[rows - ind - 1] + "<td><button class=\"chomp_button\" onClick=playerMove(" + (c + 1) + "," + (ind + 1) + ")></button></td>";
            }
        }
    }
    /* fill blank parts of board so that board doesn't shrink */
    for (var extra = bottomCells; extra < cols; extra++) {
        rowStringList[rows - 1] = rowStringList[rows - 1] + "<td></td>";
    }
    for (var extra = 0; extra < rows - list[0]; extra++) {
        rowStringList[extra] = rowStringList[extra] + "<td></td>";
    }
    rowStringList = rowStringList.map(function (s) { return s + "</tr>"; });
    var tableString = "<tbody>";
    tableString += rowStringList.join("");
    tableString += "</tbody>";
    gebi("chomp_table").innerHTML = tableString;
}
/* table of winning positions */
var wps = { "[0,0,0,0,0,0,0,0,0,0]": 1 };
/* table of losing positions */
var lps = {
    "[1,0,0,0,0,0,0,0,0,0]": 1,
    "[2,1,0,0,0,0,0,0,0,0]": 1,
    "[2,2,1,0,0,0,0,0,0,0]": 1,
    "[2,2,2,1,0,0,0,0,0,0]": 1,
    "[2,2,2,2,1,0,0,0,0,0]": 1,
    "[3,1,1,0,0,0,0,0,0,0]": 1,
    "[3,2,0,0,0,0,0,0,0,0]": 1,
    "[3,3,1,1,0,0,0,0,0,0]": 1,
    "[3,3,2,1,1,0,0,0,0,0]": 1,
    "[3,3,3,2,2,0,0,0,0,0]": 1,
    "[4,1,1,1,0,0,0,0,0,0]": 1,
    "[4,2,1,1,1,0,0,0,0,0]": 1,
    "[4,2,2,0,0,0,0,0,0,0]": 1,
    "[4,3,0,0,0,0,0,0,0,0]": 1,
    "[4,4,2,2,2,0,0,0,0,0]": 1,
    "[4,4,3,1,1,0,0,0,0,0]": 1,
    "[5,1,1,1,1,0,0,0,0,0]": 1,
    "[5,2,1,1,0,0,0,0,0,0]": 1,
    "[5,3,2,0,0,0,0,0,0,0]": 1,
    "[5,3,3,2,0,0,0,0,0,0]": 1,
    "[5,4,0,0,0,0,0,0,0,0]": 1,
    "[5,5,2,2,0,0,0,0,0,0]": 1,
    "[5,5,3,0,0,0,0,0,0,0]": 1,
    "[6,2,2,1,1,0,0,0,0,0]": 1,
    "[6,2,2,2,0,0,0,0,0,0]": 1,
    "[6,3,1,1,1,0,0,0,0,0]": 1,
    "[6,3,3,0,0,0,0,0,0,0]": 1,
    "[6,4,2,0,0,0,0,0,0,0]": 1,
    "[6,4,3,3,2,0,0,0,0,0]": 1,
    "[6,4,4,3,3,0,0,0,0,0]": 1,
    "[6,5,0,0,0,0,0,0,0,0]": 1,
    "[6,6,3,3,3,0,0,0,0,0]": 1,
    "[6,6,4,3,2,0,0,0,0,0]": 1,
    "[6,6,5,4,2,0,0,0,0,0]": 1,
    "[6,6,6,5,2,0,0,0,0,0]": 1,
    "[2,2,2,2,2,1,0,0,0,0]": 1,
    "[3,3,2,2,1,1,0,0,0,0]": 1,
    "[3,3,3,1,1,1,0,0,0,0]": 1,
    "[4,4,1,1,1,1,0,0,0,0]": 1,
    "[5,2,2,1,1,1,0,0,0,0]": 1,
    "[5,3,1,1,1,1,0,0,0,0]": 1,
    "[5,5,4,2,1,1,0,0,0,0]": 1,
    "[5,5,5,3,1,1,0,0,0,0]": 1,
    "[6,1,1,1,1,1,0,0,0,0]": 1,
    "[3,3,2,2,2,1,1,0,0,0]": 1,
    "[3,3,3,2,1,1,1,0,0,0]": 1,
    "[4,4,2,1,1,1,1,0,0,0]": 1,
    "[4,4,3,2,2,1,1,0,0,0]": 1,
    "[4,4,3,3,1,1,1,0,0,0]": 1,
    "[4,4,4,3,2,1,1,0,0,0]": 1,
    "[4,4,4,4,3,1,1,0,0,0]": 1,
    "[5,2,2,2,1,1,1,0,0,0]": 1,
    "[5,3,3,1,1,1,1,0,0,0]": 1,
    "[5,5,1,1,1,1,1,0,0,0]": 1,
    "[6,2,1,1,1,1,1,0,0,0]": 1,
    "[6,3,2,1,1,1,1,0,0,0]": 1,
    "[6,4,3,1,1,1,1,0,0,0]": 1,
    "[6,4,4,2,2,1,1,0,0,0]": 1,
    "[6,4,4,3,1,1,1,0,0,0]": 1,
    "[6,6,2,2,1,1,1,0,0,0]": 1,
    "[6,6,3,3,2,1,1,0,0,0]": 1,
    "[6,6,4,1,1,1,1,0,0,0]": 1
};
// export necessary functions
window['playerMove'] = playerMove;
window['setupChomp'] = setupChomp;
