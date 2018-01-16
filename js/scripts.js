var losing_positions = [];
var board = [3,3,3,3];
var rows = 3;
var cols = 4;

function playerMove(r,c){

}

/* setup the board that the user selected */
function setupChomp(){
  rows = parseInt(document.getElementById("chompRowNumber").value);
  cols = parseInt(document.getElementById("chompColumnNumber").value);
  board = new Array(cols).fill(rows);
  alert(board);
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
