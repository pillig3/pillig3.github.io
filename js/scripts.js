var losing_positions = [];
var board = [3,3,3,3];
var rows = 3;
var cols = 4;

async function playerMove(c,r) {
  makeLoadingImg();
  monch(c,r);
  if (gameIsOver()) {
    document.getElementById("loading_space").innerHTML = "<br />The computer won! Rats!<br />";
    return;
  }
  await sleep(1000);
  var move = getBestMove();
  monch(move[0],move[1]);
  document.getElementById("loading_space").innerHTML = "<br /><br /><br />";
  if(gameIsOver()) {
    document.getElementById("loading_space").innerHTML = "<br />Nice! You won!<br />";
  }
}

function makeLoadingImg() {
  document.getElementById("loading_space").innerHTML = "<img id = \"loadingGif\" src=\"photos/loading.gif\" />";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* returns true iff game is over */
function gameIsOver() {
  return ( board.indexOf(0) == 0 ); /* if board is all zeros */
}

/* monch off the top right of the board */
function monch(c,r) {
  board = takeABite(board, c, r);
  changeBoardOnscreen(board);
}

/* returns best next position possible */
function getBestMove() {
  /* we try to move to a losing position */
  for (var c = 1; c <= board.length; c++) {
    for (var r = 1; r <= board[c-1]; r++) {
      var nextPos = takeABite(board, c, r);
      if (isLosingPosition(nextPos)) {
        return [c, r];
      }
    }
  }
  /* otherwise, we play randomly */
  z = board.indexOf(0);
  if (z < 0) {
    numNonemptyCols = cols;
  } else {
    numNonemptyCols = z;
  }
  c = Math.floor(Math.random()*numNonemptyCols+1);
  r = Math.floor(Math.random()*board[c]+1);
  return [c, r];
}

/* monch off the top right of pos */
function takeABite(pos, c, r) {
  var pos1 = pos.slice();
  for (var col = c-1; col < pos1.length; col++) {
    pos1[col] = Math.min(r-1, pos1[col]);
  }
  return pos1;
}

/* returns true IFF pos is a position such that
 * if the computer has to move from pos it can
 * be forced into a loss. */
function isLosingPosition(pos) {
  if (pos.reduce((a,b)=>a+b) === 0) {
    return false; /* no squares left is a winning position, because you just won! */
  }
  /* give pos length 10 for comparison  */
  pos1 = pos.slice();
  if (pos.length < 10){
    pos1.push(...(new Array(10-pos.length).fill(0)));
  }
  /* search & recurse */
  if (hash["["+pos1.toString()+"]"]) {
    return true;
  }
  for (var c = 1; c <= pos.length; c++/* ha ha */) {
    for (var r = 1; r <= pos[c-1]; r++) {
      if (isLosingPosition(takeABite(pos, c, r))) {
        return false; /* if you can reach a losing position, you're not at one */
      }
    }
  }
  hash["["+pos1.toString()+"]"] = true;
  return true;
}

/* setup the board that the user selected */
function setupChomp() {
  rows = parseInt(document.getElementById("chompRowNumber").value);
  cols = parseInt(document.getElementById("chompColumnNumber").value);
  board = new Array(cols).fill(rows);
  if (!(rows>1 && cols>1)) {
    alert("invalid board size ("+rows+" by "+cols+")");
  } else {
    s = "<tbody>";
    for (var r = rows; r >= 1; r--) {
      s += "<tr>";
      for (var c = 1; c <= cols; c++) {
        if (c === 1 && r === 1) {
          s += "<td><button class=\"poison_butt\" onClick=playerMove(1,1)></button></td>";
        } else {
          s += "<td><button class=\"chomp_butt\" onClick=playerMove("+c+","+r+")></button></td>";
        }
      }
      s += "</tr>";
    }
    s += "</tbody>";
    document.getElementById("chomp_table").innerHTML = s;
  }
}

/* Change the displayed board to the one specified by list */
function changeBoardOnscreen(list) {
  var originNeedsPlacing = true;
  rowStringList = new Array(rows).fill("<tr>");
  var bottomCells = 0;
  for (var c = 0; c < list.length; c++) { /* go thru the list */
    h = list[c];
    for (var i = h-1; i >= 0; i--) { /* go down the column */
      var ind = i;
      if ( i === 0 && originNeedsPlacing ) {
        rowStringList[rows - ind - 1] = rowStringList[rows - ind - 1]+"<td><button class=\"poison_butt\" onClick=playerMove(1,1)></button></td>";
        originNeedsPlacing = false;
        bottomCells++;
      } else {
        if (i === 0 ){ bottomCells++; }
        rowStringList[rows - ind - 1] = rowStringList[rows - ind - 1]+"<td><button class=\"chomp_butt\" onClick=playerMove("+(c+1)+","+(i+1)+")></button></td>";
      }
    }
  }
  /* fill blank parts of board so that board doesn't shrink */
  for (var extra = bottomCells; extra < cols; extra++){
    rowStringList[rows-1] = rowStringList[rows-1]+"<td></td>";
  }
  for (var extra = 0; extra < rows -  list[0]; extra++){
    rowStringList[extra] = rowStringList[extra]+"<td></td>";
  }
  rowStringList = rowStringList.map(s => s + "</tr>");
  var tableString = "<tbody>";
  tableString += rowStringList.join("");
  tableString += "</tbody>";
  document.getElementById("chomp_table").innerHTML = tableString;
}


















/* lookup table of losing positions */
var hash={
  "[1,0,0,0,0]":true,
  "[1,0,0,0,0,0,0,0,0,0]":true,
  "[2,1,0,0,0,0,0,0,0,0]":true,
  "[2,2,1,0,0,0,0,0,0,0]":true,
  "[2,2,2,1,0,0,0,0,0,0]":true,
  "[2,2,2,2,1,0,0,0,0,0]":true,
  "[3,1,1,0,0,0,0,0,0,0]":true,
  "[3,2,0,0,0,0,0,0,0,0]":true,
  "[3,3,1,1,0,0,0,0,0,0]":true,
  "[3,3,2,1,1,0,0,0,0,0]":true,
  "[3,3,3,2,2,0,0,0,0,0]":true,
  "[4,1,1,1,0,0,0,0,0,0]":true,
  "[4,2,1,1,1,0,0,0,0,0]":true,
  "[4,2,2,0,0,0,0,0,0,0]":true,
  "[4,3,0,0,0,0,0,0,0,0]":true,
  "[4,4,2,2,2,0,0,0,0,0]":true,
  "[4,4,3,1,1,0,0,0,0,0]":true,
  "[5,1,1,1,1,0,0,0,0,0]":true,
  "[5,2,1,1,0,0,0,0,0,0]":true,
  "[5,3,2,0,0,0,0,0,0,0]":true,
  "[5,3,3,2,0,0,0,0,0,0]":true,
  "[5,4,0,0,0,0,0,0,0,0]":true,
  "[5,5,2,2,0,0,0,0,0,0]":true,
  "[5,5,3,0,0,0,0,0,0,0]":true,
  "[6,2,2,1,1,0,0,0,0,0]":true,
  "[6,2,2,2,0,0,0,0,0,0]":true,
  "[6,3,1,1,1,0,0,0,0,0]":true,
  "[6,3,3,0,0,0,0,0,0,0]":true,
  "[6,4,2,0,0,0,0,0,0,0]":true,
  "[6,4,3,3,2,0,0,0,0,0]":true,
  "[6,4,4,3,3,0,0,0,0,0]":true,
  "[6,5,0,0,0,0,0,0,0,0]":true,
  "[6,6,3,3,3,0,0,0,0,0]":true,
  "[6,6,4,3,2,0,0,0,0,0]":true,
  "[6,6,5,4,2,0,0,0,0,0]":true,
  "[6,6,6,5,2,0,0,0,0,0]":true,
  "[2,2,2,2,2,1,0,0,0,0]":true,
  "[3,3,2,2,1,1,0,0,0,0]":true,
  "[3,3,3,1,1,1,0,0,0,0]":true,
  "[4,4,1,1,1,1,0,0,0,0]":true,
  "[5,2,2,1,1,1,0,0,0,0]":true,
  "[5,3,1,1,1,1,0,0,0,0]":true,
  "[5,5,4,2,1,1,0,0,0,0]":true,
  "[5,5,5,3,1,1,0,0,0,0]":true,
  "[6,1,1,1,1,1,0,0,0,0]":true,
  "[3,3,2,2,2,1,1,0,0,0]":true,
  "[3,3,3,2,1,1,1,0,0,0]":true,
  "[4,4,2,1,1,1,1,0,0,0]":true,
  "[4,4,3,2,2,1,1,0,0,0]":true,
  "[4,4,3,3,1,1,1,0,0,0]":true,
  "[4,4,4,3,2,1,1,0,0,0]":true,
  "[4,4,4,4,3,1,1,0,0,0]":true,
  "[5,2,2,2,1,1,1,0,0,0]":true,
  "[5,3,3,1,1,1,1,0,0,0]":true,
  "[5,5,1,1,1,1,1,0,0,0]":true,
  "[6,2,1,1,1,1,1,0,0,0]":true,
  "[6,3,2,1,1,1,1,0,0,0]":true,
  "[6,4,3,1,1,1,1,0,0,0]":true,
  "[6,4,4,2,2,1,1,0,0,0]":true,
  "[6,4,4,3,1,1,1,0,0,0]":true,
  "[6,6,2,2,1,1,1,0,0,0]":true,
  "[6,6,3,3,2,1,1,0,0,0]":true,
  "[6,6,4,1,1,1,1,0,0,0]":true
};
