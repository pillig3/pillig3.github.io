var pointers;
var stacks;
var codeArray;
var width;
var height;
var showDisplay = true;
var pauseInterval;
var keepRunning;
var pointersUpdated;
var stringmode;
var paused;
var steppingOnce;

// Stops program execution
function stop(calledFromButton) {
  keepRunning = false;
  if (showDisplay) {
    pointersUpdated = pointersUpdated.fill(true);
    paused = false;
    steppingOnce = false;
    document.getElementById("pauseButton").innerHTML = "Pause";
  }
  document.getElementById("runButton").innerHTML = "Run";
  document.getElementById("runButton").onclick = function onclick(event){ runBefunge(); };
  if (calledFromButton) {
    document.getElementById("befungeDisplay").innerHTML = "";
    document.getElementById("befungeStack").innerHTML = "";
  }
}

// Begins the program, called when user
// clicks "Run"
function runBefunge() {
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
  paused = false;

  /***********
   *   Run   *
   ***********/

  if (showDisplay) {
    // With display, we run slowly and user can break
    updateDisplay();

    pauseInterval = document.getElementById("pauseInterval").value;
    // Run
    keepRunning = true;
    stringmode = false;
    pointersUpdated = [true];
    document.getElementById("runButton").innerHTML = "Stop";
    document.getElementById("runButton").onclick = function onclick(event){ stop(true); };
    setTimeout(step);
  } else {
    // No display, run quickly
    stringmode = false;
    keepRunning = true;
    while (keepRunning) {
      stepQuickly();
    }
  }
}

// Shows or hides the formatted code and stack
// Called when user clicks Show/Hide state
function toggleDisplay() {
  if (keepRunning || steppingOnce || paused) {
    return; // can't toggle while it's running
  }
  if (showDisplay) {
    showDisplay = false;
    document.getElementById("stepButton").hidden = true;
    document.getElementById("pauseButton").hidden = true;
    document.getElementById("pauseOptions").hidden = true;
    document.getElementById("display").innerHTML = "";
    document.getElementById("displayButton").innerHTML = "Show state";
  } else {
    showDisplay = true;
    document.getElementById("stepButton").hidden = false;
    document.getElementById("pauseButton").hidden = false;
    document.getElementById("pauseOptions").hidden = false;
    document.getElementById("display").innerHTML = "<span class=\"befungeText\">State</span><div class=\"codeOutput\" id=\"befungeDisplay\"></div><div class=\"codeOutput\" id=\"befungeStack\"></div>";
    document.getElementById("displayButton").innerHTML = "Hide state";
  }
}

// Pauses program if it is running, resumes if it is paused, otherwise does nothing
// Called when user clicks Pause, assumes showDisplay = true
function pauseBefunge() {
  if (keepRunning && !paused) {
    keepRunning = false;
    paused = true;
    document.getElementById("pauseButton").innerHTML = "Resume";
  } else if (paused) {
    steppingOnce = false;
    keepRunning = true;
    pauseInterval = document.getElementById("pauseInterval").value;
    paused = false;
    document.getElementById("pauseButton").innerHTML = "Pause";
    setTimeout(step, 0);
  }
}

// Steps only once
function stepOnce() {
  if (!keepRunning && !paused) {
    // hasn't started yet
    steppingOnce = true;
    runBefunge();
  } else if (paused) {
    steppingOnce = true;
    keepRunning = true;
    step();
  }
}

// Runs one step of the program, called only when showDisplay = true.
// Changes keepRunning to true if program execution should continue, false otherwise (i.e. false
// iff current instruction is q, or is @ and there is only one pointer left).
function step() {
  // if some pointer has not finished updating, not all true
  if (!pointersUpdated.reduce((b1, b2) => b1 && b2)) {
    setTimeout(step, 0); // try again later
    return;
  }
  if (!keepRunning) {
    return;
  }

  pointersUpdated = pointersUpdated.fill(false);
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
      } else { // bigint
        toss.push(codeArray[ip.y][ip.x]);
      }
    } else if (typeof codeArray[ip.y][ip.x] === "bigint") {
      // Do nothing - character out of instruction range
      // (if you don't believe me check out case "p")
    } else {
      // Execute instruction at current character
      doInstruction(ip, delta, toss);
    }

     // Update position

    ip.x = (ip.x + delta.x) % width;
    ip.y = (ip.y + delta.y) % height;
    // who ever heard of n % k being less than zero smh
    if (ip.x < 0) { ip.x = width + ip.x; }
    if (ip.y < 0) { ip.y = height + ip.y; }
    if ( (codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined") && !stringmode) {
      setTimeout(updatePosition, 0, ip, delta, i);
    } else {
      pointersUpdated[i] = true;
    }
  }

  updateDisplay();
  if (steppingOnce) {
    paused = true;
    document.getElementById("pauseButton").innerHTML = "Resume";
  } else {
    setTimeout(step, pauseInterval);
  }
}

// Runs one step of the program, called only when showDisplay = false.
function stepQuickly() {
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
      } else { // bigint
        toss.push(codeArray[ip.y][ip.x]);
      }
    } else if (typeof codeArray[ip.y][ip.x] === "bigint") {
      // Do nothing - character out of instruction range
      // (if you don't believe me check out case "p")
    } else {
      doInstruction(ip, delta, toss);
    }

     // Update position

     do {
       ip.x = (ip.x + delta.x) % width;
       ip.y = (ip.y + delta.y) % height;
       // who ever heard of n % k being less than zero smh
       if (ip.x < 0) { ip.x = width + ip.x; }
       if (ip.y < 0) { ip.y = height + ip.y; }
     } while ((codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined") && !stringmode);
  }
}


// Prints a string to the output
function print(str) {
  document.getElementById("befungeOutput").innerHTML += str.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
  document.getElementById("befungeOutput").style.height = document.getElementById("befungeOutput").scrollHeight.toString()+"px"; // resize
}

// Updates position, when showDisplay=true.
// input: IP, Delta, and the pointer's index in the list of pointers
function updatePosition(ip, delta, i) {
  ip.x = (ip.x + delta.x) % width;
  ip.y = (ip.y + delta.y) % height;
  // who ever heard of n % k being less than zero smh
  if (ip.x < 0) { ip.x = width + ip.x; }
  if (ip.y < 0) { ip.y = height + ip.y; }

  // In stringmode we should not jump. Otherwise, jump over spaces and undefined
  if ( (codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined") && !stringmode) {
    setTimeout(updatePosition, 0, ip, delta, i);
  } else {
    pointersUpdated[i] = true;
  }
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












/*********************
 *    DANGER AHEAD   *
 *   TURN BACK NOW   *
 *********************/













// Does instruction at current character
// Literally just a huge switch statement
function doInstruction(ip, delta, toss) {
  switch (codeArray[ip.y][ip.x]) {
    case "q":
      stop();
      return;
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
      if (ip.y < 0) { ip.y = height + ip.y; }
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
