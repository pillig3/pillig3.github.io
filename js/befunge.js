



var pointers;
var stacks;
var codeArray;
var width;
var height;

var showDisplay = true;
var pauseInterval = 333;
var keepGoing;
var stringmode;

// Begins the program, called when user
// clicks "Run"
async function runBefunge() {
  // Setup
  document.getElementById("befungeOutput").innerHTML = "";
  var code = document.getElementById("befungeCode").value;
  if (code === "") {
    alert("No code entered.");
    return;
  }
  var codeLines = code.split("\n");
  codeArray = codeLines.map(x => x.split(""));
  width = codeArray.reduce((x, y) => Math.max(x, y.length), -Infinity);
  height = codeLines.length;
  width = BigInt(width);
  height = BigInt(height);
  // List of Instruction Pointers (position) and their Deltas (velocity)
  pointers = [{ip: {x: BigInt(0), y: BigInt(0)}, delta: {x: BigInt(1), y: BigInt(0)}},];
  // Stack (of stacks)
  stacks = [[]];

  if (showDisplay) {
    var formattedCode = code.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
    document.getElementById("befungeDisplay").innerHTML = formattedCode;
  }

  // Get Settings
  pauseInterval = document.getElementById("pauseInterval").value;

  // Run
  keepGoing = true;
  stringmode = false;
  while (keepGoing) {
    setTimeout(step(), 1);
    if (showDisplay) {
      updateDisplay();
      await sleep(pauseInterval);
    }
  }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Shows or hides the formatted code and stack
// Called when user clicks Show/Hide state
function toggleDisplay() {
  if (showDisplay) {
    showDisplay = false;
    document.getElementById("display").innerHTML = "";
    document.getElementById("displayButton").innerHTML = "Show state";
  } else {
    showDisplay = true;
    document.getElementById("display").innerHTML = "<span class=\"befungeText\">State</span><div class=\"codeOutput\" id=\"befungeDisplay\"></div><div class=\"codeOutput\" id=\"befungeStack\"></div>";
    document.getElementById("displayButton").innerHTML = "Hide state";
  }
}


// Execute the instruction at the current location.
// Changes keepGoing to true if program execution should continue, false otherwise (i.e. false
// iff current instruction is q, or is @ and there is only one pointer left).
function step() {
  for (var i in pointers) {
    let pointer = pointers[i];
    let ip = pointer.ip;
    let delta = pointer.delta;
    let toss = stacks[stacks.length-1]; // Top Of Stack Stack
    if (stringmode) {
      if (codeArray[ip.y][ip.x] === "\"") {
        stringmode = false;
      } else if (typeof codeArray[ip.y][ip.x] === "string") {
        toss.push(BigInt(codeArray[ip.y][ip.x].charCodeAt(0)));
      } else if (typeof codeArray[ip.y][ip.x] === "undefined") {
        toss.push(BigInt(" ".charCodeAt(0)));
      } else { // Should be bigint
        toss.push(codeArray[ip.y][ip.x]);
      }
    } else if (typeof codeArray[ip.y][ip.x] === "bigint") {
      // Do nothing - character out of ASCII range
    } else {
      switch (codeArray[ip.y][ip.x]) {
        case "q":
          keepGoing = false;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          toss.push(BigInt(codeArray[ip.y][ip.x]));
          break;
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
          // Push 10 thru 15
          toss.push(BigInt(codeArray[ip.y][ip.x].charCodeAt(0) - 87));
          break;
        case "\"": // enter stringmode
          stringmode = true;
          break;
        case "$": // Pop
          toss.pop();
          break;
        case ":": // Duplicate
          if (toss.length > 0) {
            toss.push(toss[toss.length-1]);
          }
          break;
        case "\\": // Swap
          if (toss.length > 1) {
            let temp = toss[toss.length-1];
            toss[toss.length-1] = toss[toss.length-2];
            toss[toss.length-2] = temp;
          }
          break;
        case "n": // Clear toss
          stacks[stacks.length-1] = [];
          break;
        case "+":
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            toss.push(a + b);
          }
          break;
        case "*":
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            toss.push(a * b);
          }
          break;
        case "-":
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            toss.push(a - b);
          }
          break;
        case "/":
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            toss.push(a / b);
          }
          break;
        case "%":
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            if (b === 0n) {
              toss.push(0n);
            } else {
              // i guess i heard of it
              toss.push(a % b);
            }
          }
          break;
        case ".": // output number
          if (toss.length > 0) {
            print(toss.pop().toString()+" ");
          }
          break;
        case ",": // output character
          if (toss.length > 0) {
            print(String.fromCharCode(bigIntAsInt(toss.pop())));
          }
          break;
        case "&": // input integer
          var num = prompt("Enter an integer");
          num = num.match(/[0-9]+/); // first integer in entered string
          if (num === null) {
            // if no integer entered, act like 0 was entered
            num = ["0"];
          }
          toss.push(BigInt(num[0]));
          break;
        case "~": // input character
          var char = prompt("Enter a character");
          if (char === "" || char === null) {
            // empty string has code 0
            toss.push(0n);
          } else {
            char = char.charCodeAt(0); // code of first char of input
            toss.push(BigInt(char));
          }
          break;
        case "!": // not: changes 0 to 1 and nonzero to 0
          if (toss.length > 0) {
            toss[toss.length-1] = (toss[toss.length-1] === 0n ? 1n : 0n);
          }
          break;
        case "#":
          ip.x = (ip.x + delta.x) % width;
          ip.y = (ip.y + delta.y) % height;
          // who ever heard of n % k being less than zero smh
          if (ip.x < 0) { ip.x = width + ip.x; }
          if (ip.y < 0) { ip.y = height + ip.y }
          break;
        case "<":
          delta.x = -1n;
          delta.y = 0n;
          break;
        case "^":
          delta.x = 0n;
          delta.y = -1n;
          break;
        case ">":
          delta.x = 1n;
          delta.y = 0n;
          break;
        case "v":
          delta.x = 0n;
          delta.y = 1n;
          break;
        case "?":
          let rand = Math.floor(Math.random()*4);
          switch (rand) {
            case 0:
              delta.x = -1n; delta.y = 0n;
              break;
            case 1:
              delta.x = 0n; delta.y = -1n;
              break;
            case 2:
              delta.x = 1n; delta.y = 0n;
              break;
            default: // 3
              delta.x = 0n; delta.y = 1n;
              break;
          }
          break;
        case "\`": // Greater than
          if (toss.length > 1) {
            let b = toss.pop();
            let a = toss.pop();
            toss.push(a > b ? 1n : 0n);
          }
          break;
        case "|": // up if nonzero
          if (toss.length > 0 && toss.pop() !== 0n) {
            delta.x = 0n; delta.y = -1n;
          } else {
            delta.x = 0n; delta.y = 1n;
          }
          break;
        case "_": // left if nonzero
          if (toss.length > 0 && toss.pop() !== 0n) {
            delta.x = -1n; delta.y = 0n;
          } else {
            delta.x = 1n; delta.y = 0n;
          }
          break;
        case "g": // Get
          if (toss.length > 1) {
            let y = toss.pop();
            let x = toss.pop();
            if (typeof codeArray[y][x] === "undefined") {
              toss.push(32n); // push a space
            } else if (typeof codeArray[y][x] === "string") {
              toss.push(BigInt(codeArray[y][x].charCodeAt(0)));
            } else { // should have type BigInt
              toss.push(codeArray[y][x]);
            }
          }
          break;
        case "p": // Put
          if (toss.length > 2) {
            let y = toss.pop();
            let x = toss.pop();
            let item = toss.pop();
            if ( 31 < item && item < 127) {
              // If item is a number with a corresponding ASCII character, put that character
              put(String.fromCharCode(bigIntAsInt(item)), x, y);
            } else {
              // Otherwise, put the bigint
              put(item, x, y);
            }
          }
          break;

        // more cases...



        case " ":
          // should only happen at beginning
          break;
        case "r": // reflect
          delta.x *= -1n;
          delta.y *= -1n;
          break;
        default:
          // do nothing
          break;
      }
    }

    // Then update position
    do {
      ip.x = (ip.x + delta.x) % width;
      ip.y = (ip.y + delta.y) % height;
      // who ever heard of n % k being less than zero smh
      if (ip.x < 0) { ip.x = width + ip.x; }
      if (ip.y < 0) { ip.y = height + ip.y }
    } while ((codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined") && !stringmode);

  }
}

function print(str) {
  document.getElementById("befungeOutput").innerHTML += str.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
}


// Puts an item (a bigint or string) in the specified position on the board, will
// modiify codeArray and/or change height and width if necessary.
// Note if codeArray is undefined at given index, x and y are not necessarily
// outside bounding box since codeArray is jagged
function put(item, x, y) {
  if (x < 0 || y < 0) {
    // Do nothing
    return;
  }
  if (typeof codeArray[y] === "undefined") {
    // add more lines
    codeArray = codeArray.concat((new Array(bigIntAsInt(y - height + 1n))).fill([]));
    height = BigInt(codeArray.length);
  }
  if (typeof codeArray[y][x] === "undefined") {
    // add more columns
    codeArray[y] = codeArray[y].concat((new Array(bigIntAsInt(x - BigInt(codeArray[y].length) + 1n))).fill(" "));
    width = BigInt(Math.max(bigIntAsInt(width), codeArray[y].length));
  }
  codeArray[y][x] = item;
}

// Takes a BigInt and returns the corresponding integer, if bigint is in the
// range (-2^53, 2^53). Otherwise returns zero.
// Not to be confused with BigInt.asIntN, although BigInt.asIntN used to support this use (until I was halfway through this project)
function bigIntAsInt(bigint) {
  if (-Number.MAX_SAFE_INTEGER <= bigint && bigint <= Number.MAX_SAFE_INTEGER) {
    return parseInt(bigint.toString(10));
  }
  return 0;
}

// Display the current grid and location of pointer(s), as well as
// the current stack. Values on the stack are displayed as integers,
// Values on the grid are displayed as their corresponding ascii char, if
// not a printable ascii char it's displayed as an epsilon ( ɛ )
function updateDisplay() {
  //...
}
