var pointers;
var stacks;
var codeArray;
var width;
var height;
var showDisplay = true;
var pauseInterval;
var keepRunning;
var pointersUpdated;
var pointersStringmode;
var paused;
var steppingOnce;

const ZERO = BigInt(0);
const ONE = BigInt(1);

// Stops program execution
function stop(calledFromButton) {
  keepRunning = false;
  if (showDisplay) {
    updateDisplays();
    pointersUpdated = pointersUpdated.fill(true);
    paused = false;
    steppingOnce = false;
    document.getElementById("pauseButton").innerHTML = "Pause";
    if (calledFromButton) {
      document.getElementById("befungeDisplay").innerHTML = "";
      document.getElementById("befungeStack").innerHTML = "";
    }
  }
  document.getElementById("runButton").innerHTML = "Run";
  document.getElementById("runButton").onclick = function onclick(event){ runBefunge(); };
}

// Begins the program, called when user
// clicks "Run"
function runBefunge() {
  var code = document.getElementById("befungeCode").value;
  if (code === "") {
    alert("No code entered.");
    return;
  }
  document.getElementById("befungeOutput").innerHTML = "";
  document.getElementById("runButton").innerHTML = "Stop";
  document.getElementById("runButton").onclick = function onclick(event){ stop(true); };

  var codeLines = code.split("\n");
  codeArray = codeLines.map(x => x.split(""));
  width = codeArray.reduce((x, y) => Math.max(x, y.length), -Infinity);
  height = codeLines.length;
  width = BigInt(width);
  height = BigInt(height);
  // List of Instruction Pointers (position) and their Deltas (velocity)
  pointers = [{ip: {x: BigInt(0), y: BigInt(0)}, delta: {x: BigInt(1), y: BigInt(0)}},];
  // List of stacks of stacks - that of pointer i is in stacks[i]
  stacks = [[[]]];
  paused = false;

  pointersStringmode = [false];
  keepRunning = true;
  pointersUpdated = [true];
  /***********
   *   Run   *
   ***********/

  if (showDisplay) {
    // With display, we run slowly and user can break
    pauseInterval = document.getElementById("pauseInterval").value;
    // Run
    setTimeout(step, pauseInterval);
  } else {
    // No display, run quickly
    stepQuickly();
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
  if (!keepRunning) {
    return;
  }
  // if some pointer has not finished updating, not all true
  if (!pointersUpdated.reduce((b1, b2) => b1 && b2)) {
    setTimeout(step); // try again later
    return;
  }
  updateDisplays();
  pointersUpdated = pointersUpdated.fill(false);
  for (var i = 0; i < pointers.length; i++) {
    let ip = pointers[i].ip;
    let delta = pointers[i].delta;
    let toss = stacks[i][stacks[i].length-1]; // Top Of Stack Stack
    if (pointersStringmode[i]) {
      if (codeArray[ip.y][ip.x] === "\"") {
        pointersStringmode[i] = false;
      } else if (typeof codeArray[ip.y][ip.x] === "string") {
        toss.push(BigInt(codeArray[ip.y][ip.x].charCodeAt(0)));
      } else if (typeof codeArray[ip.y][ip.x] === "undefined") {
        toss.push(BigInt(32)); // space
      } else { // bigint
        toss.push(codeArray[ip.y][ip.x]);
      }
    } else if (typeof codeArray[ip.y][ip.x] === "bigint") {
      // Do nothing - character out of instruction range
      // (if you don't believe me check out case "p")
    } else {
      // Execute instruction at current character
      var flag = doInstruction(ip, delta, toss, i);
    }

    if (flag === "newPointer") {
      // update new pointer position (new pointer is pointers[i], old pointer is pointers[i+1])
      updatePositionQuickly(pointers[i].ip, pointers[i].delta, i);
      i++;
    }
    if (flag === "deletedPointer") {
      i--;
    } else if (flag !== "stopped") {
       // Update position
      updatePositionQuickly(ip, delta, i);
    }
  }

  if (steppingOnce) {
    paused = true;
    document.getElementById("pauseButton").innerHTML = "Resume";
  } else {
    setTimeout(step, pauseInterval);
  }
}

// <stepQuickly related vars>
// # of steps to take between callbacks: higher makes it run faster but 'choppier'
var maxctr = 700;
// # of loops trying to move a pointer over whitespace before turning to callbacks
var maxctr2 = 10000;
// </stepQuickly related vars>

// Runs one step of the program quickly, called only when showDisplay = false
function stepQuickly() {
  if (!keepRunning) {
    return;
  }
  // if some pointer has not finished updating, not all true
  if (!pointersUpdated.reduce((b1, b2) => b1 && b2)) {
    setTimeout(stepQuickly); // try again later
    return;
  }

  for (var ctr = 0; ctr < maxctr; ctr++) {
    pointersUpdated = pointersUpdated.fill(false);

    for (var i = 0; i < pointers.length; i++) {
      let ip = pointers[i].ip;
      let delta = pointers[i].delta;
      let toss = stacks[i][stacks[i].length-1]; // Top Of Stack Stack
      let curCell = codeArray[ip.y][ip.x];
      if (pointersStringmode[i]) {
        if (curCell === "\"") {
          pointersStringmode[i] = false;
        } else if (typeof curCell === "string") {
          toss.push(BigInt(curCell.charCodeAt(0)));
        } else if (typeof curCell === "undefined") {
          toss.push(BigInt(32)); // space
        } else { // bigint
          toss.push(curCell);
        }
      } else if (typeof curCell === "bigint") {
        // Do nothing - character out of instruction range
        // (if you don't believe me check out case "p")
      } else {
        var flag = doInstruction(ip, delta, toss, i);
      }
      if (!keepRunning) {
        return;
      }
      if (flag === "newPointer") {
        var num1 = updatePositionQuickly(pointers[i].ip, pointers[i].delta, i);
        i++;
      }
      if (flag === "deletedPointer") {
        i--;
      } else {
        // Update position
        var num2 = updatePositionQuickly(ip, delta, i);
        if (num1 === Infinity || num2 === Infinity) {
          ctr = Infinity;
        }
      }
    }
  }
  setTimeout(stepQuickly);
}

// tries to update pointer in a loop, calls back if it's taking too long and is likely an infinite loop
// maybe this should be the only version of this function
function updatePositionQuickly(ip, delta, i) {
  var ctr2 = 0;
  do {
    ip.x = (ip.x + delta.x) % width;
    ip.y = (ip.y + delta.y) % height;
    // who ever heard of n % k being less than zero smh
    if (ip.x < 0) { ip.x = width + ip.x; }
    if (ip.y < 0) { ip.y = height + ip.y; }
    ctr2++;
  } while ((codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined") && !pointersStringmode[i] && ctr2 < maxctr2);
  if (ctr2 == maxctr2 && (codeArray[ip.y][ip.x] === " " || typeof codeArray[ip.y][ip.x] === "undefined")) {
    // likely infinite loop, break from outer loop & call back so user can quit
    setTimeout(updatePositionQuickly, 0, ip, delta, i);
    return Infinity;
  } else if (pointersUpdated[i] === false) {
    pointersUpdated[i] = true;
  }
}

// Prints a string to the output
function print(str) {
  if (str === null) { // signal for ascii character 8 (backspace)
    var output = document.getElementById("befungeOutput").innerHTML;
    if (output.length >= 6 && output.substring(output.length-6) === "&nbsp;") {
      document.getElementById("befungeOutput").innerHTML = output.substring(0, output.length-6);
    } else {
      document.getElementById("befungeOutput").innerHTML = output.substring(0, output.length-1);
    }
  } else {
    document.getElementById("befungeOutput").innerHTML += str.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");
  }
  document.getElementById("befungeOutput").scrollTop = document.getElementById("befungeOutput").scrollHeight; // Scroll down
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
    codeArray = codeArray.concat((new Array(bigIntAsInt(y - height + ONE))).fill([]));
    height = BigInt(codeArray.length);
  }
  if (typeof codeArray[y][x] === "undefined") {
    // add more columns
    codeArray[y] = codeArray[y].concat((new Array(bigIntAsInt(x - BigInt(codeArray[y].length) + ONE))).fill(" "));
    width = BigInt(Math.max(bigIntAsInt(width), codeArray[y].length));
  }
  codeArray[y][x] = item;
}

// Takes a BigInt and returns the corresponding integer, if bigint is in the
// range (-2^53, 2^53). Otherwise returns zero.
// Not to be confused with BigInt.asIntN
function bigIntAsInt(bigint) {
  if (-Number.MAX_SAFE_INTEGER <= bigint && bigint <= Number.MAX_SAFE_INTEGER) {
    return parseInt(bigint.toString(10));
  }
  return 0;
}

// Display the current grid and location of pointer(s), as well as
// the current stack. Values on the stack are displayed as integers,
// Values on the grid are displayed as their corresponding ascii char, if
// not a printable ascii char it's displayed as Ø
function updateDisplays() {
  updateState()
  updateStack()
}

// Update dynamic code grid
function updateState() {
  var str = "";
  var ptrIndex = {};
  for (ptr of pointers) {
    ptrIndex[ptr.ip.x.toString() + "," + ptr.ip.y.toString()] = true;
  }
  for (var y in codeArray) {
    for (var x in codeArray[y]) {
      if (ptrIndex[x + "," + y]) {
        str += "<span class=\"borderedChar\" ";
      } else {
        str += "<span ";
      }
      var curItem = codeArray[y][x];
      if (typeof curItem === "string") {
        if (typeof instructionColorTable[curItem] === "undefined") {
          if (curItem === " ") {
            str += ">&nbsp;";
          } else {
            str += "style=\"color: lightgray\">" + curItem;
          }
        } else {
          str += "style=\"color: " + instructionColorTable[curItem] + "\">" + curItem;
        }
      } else if (typeof curItem === "undefined") {
        str += ">&nbsp;";
      } else { // bigint out of ascii range
        str += "style=\"color: lightgray\">Ø";
      }
      str += "</span>";
    }
    str += "<br/>";
  }
  document.getElementById("befungeDisplay").innerHTML = str;
}

// Update stack-of-stacks -- if there are multiple pointers,
// only the SOS of the top pointer is displayed
function updateStack() {
  var str = "";
  let firstSOS = stacks[stacks.length-1];
  for (var i = firstSOS.length-1; i >= 0; i--) {
    let stack = firstSOS[i];
    str += "[";
    for (let item of stack) {
      str += item.toString() + " ";
    }
    str += "<br/>";
  }
  document.getElementById("befungeStack").innerHTML = str;
}










/*********************
 *    DANGER AHEAD   *
 *   TURN BACK NOW   *
 *********************/













// Does instruction at current character
// Literally just a huge switch statement
// i = index of current pointer
function doInstruction(ip, delta, toss, i) {
  switch (codeArray[ip.y][ip.x]) {
    case "q":
      stop(false);
      return "stopped";
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
      pointersStringmode[i] = true;
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
        if (b === ZERO) {
          toss.push(ZERO);
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
        var num = bigIntAsInt(toss.pop());
        if (num == 8) {
          print(null);
        } else {
          print(String.fromCharCode(num));
        }
      }
      break;
    case "&": // input integer
      var num = prompt("Enter an integer");
      if (!num) {
        num = ["0"];
      } else {
        num = num.match(/-?[0-9]+/);
      }
      // first integer in entered string
      toss.push(BigInt(num[0]));
      break;
    case "~": // input character
      var char = prompt("Enter a character");
      if (char === "" || char === null) {
        // default to 10
        toss.push(BigInt(10));
      } else {
        char = char.charCodeAt(0); // code of first char of input
        toss.push(BigInt(char));
      }
      break;
    case "!": // not: changes 0 to 1 and nonzero to 0
      if (toss.length > 0) {
        toss[toss.length-1] = (toss[toss.length-1] === ZERO ? ONE : ZERO);
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
      delta.x = -ONE;
      delta.y = ZERO;
      break;
    case "^":
      delta.x = ZERO;
      delta.y = -ONE;
      break;
    case ">":
      delta.x = ONE;
      delta.y = ZERO;
      break;
    case "v":
      delta.x = ZERO;
      delta.y = ONE;
      break;
    case "?":
      let rand = Math.floor(Math.random()*4);
      switch (rand) {
        case 0:
          delta.x = -ONE; delta.y = ZERO;
          break;
        case 1:
          delta.x = ZERO; delta.y = -ONE;
          break;
        case 2:
          delta.x = ONE; delta.y = ZERO;
          break;
        default: // 3
          delta.x = ZERO; delta.y = ONE;
          break;
      }
      break;
    case "‽":
      let rand1 = 0;
      let rand2 = 0;
      while (rand1 === 0 && rand2 === 0) {
        rand1 = Math.floor(Math.random()*2*codeArray.length+1)-codeArray.length;
        rand2 = Math.floor(Math.random()*2*codeArray[0].length+1)-codeArray[0].length;
      }
      delta.x = BigInt(rand1);
      delta.y = BigInt(rand2);
      break;
    case "\`": // Greater than
      if (toss.length > 1) {
        let b = toss.pop();
        let a = toss.pop();
        toss.push(a > b ? ONE : ZERO);
      }
      break;
    case "|": // up if nonzero
      if (toss.length > 0 && toss.pop() !== ZERO) {
        delta.x = ZERO; delta.y = -ONE;
      } else {
        delta.x = ZERO; delta.y = ONE;
      }
      break;
    case "_": // left if nonzero
      if (toss.length > 0 && toss.pop() !== ZERO) {
        delta.x = -ONE; delta.y = ZERO;
      } else {
        delta.x = ONE; delta.y = ZERO;
      }
      break;
    case "g": // Get
      if (toss.length > 1) {
        let y = toss.pop();
        let x = toss.pop();
        if (typeof codeArray[y] === "undefined" || typeof codeArray[y][x] === "undefined") {
          toss.push(BigInt(32)); // push a space
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
    case "@": // remove current pointer
      if (pointers.length === 1) {
        stop(false);
        return "stopped";
      } else {
        pointers.splice(i, 1);
        pointersUpdated.splice(i, 1);
        stacks.splice(i, 1);
      }
      return "deletedPointer";
    case "n": // clear toss
      toss.splice(0);
      break;
    case "{": // begin block
      var newToss;
      if (toss.length > 0) {
        let n = bigIntAsInt(toss.pop());
        if (toss.length >= n) {
          newToss = toss.splice(toss.length-n);
        } else {
          newToss = (new Array(n-toss.length)).fill(0).concat(toss.splice(0));
        }
      } else {
        newToss = [];
      }
      stacks[i].push(newToss);
      break;
    case "}": // end block
      if (stacks[i].length > 1) {
        // transfer
        if (toss.length > 0) {
          let soss = stacks[i][stacks[i].length-2];
          let n = bigIntAsInt(toss.pop());
          if (toss.length >= n) {
            soss.splice.apply(soss, [soss.length, 0].concat(toss.splice(toss.length-n)));
          } else {
            soss.splice.apply(soss, [soss.length, 0].concat( (new Array(n-toss.length)).fill(0).concat(toss) ));
          }
        }
        stacks[i].pop();
      }
      break;
    case "u": // stack under stack
      if (toss.length > 0) {
        let n = bigIntAsInt(toss.pop());
        for (let j = 0; j < n; j++) {
          let item = stacks[i][stacks[i].length-2].pop();
          toss.push(typeof item === "undefined" ? 0 : item);
        }
      }
      break;
    case "x":
      if (toss.length > 1) {
        let y = toss.pop();
        let x = toss.pop();
        delta.y = y;
        delta.x = x;
      }
      break;
    case "[": // turn left
      if (true) { // I'm so sorry
        // if you have another way to prevent the declarations in this case
        // and the next one from throwing a syntax error pls let me know
        let x = delta.x;
        let y = delta.y;
        delta.x = -y;
        delta.y = x;
      }
      break;
    case "]":
      if (true) {
        let x = delta.x;
        let y = delta.y;
        delta.x = y;
        delta.y = -x;
      }
      break;
    case "w":
      if (toss.length > 1) {
        let b = toss.pop();
        let a = toss.pop();
        if (a < b) {
          let x = delta.x;
          let y = delta.y;
          delta.x = -y;
          delta.y = x;
        } else if (a > b) {
          let x = delta.x;
          let y = delta.y;
          delta.x = y;
          delta.y = -x;
        }
      }
      break;
    case "t": // new pointer
      let newSOS = [];
      // copy current stack of stacks
      for (stack of stacks[i]) {
        newSOS.push(stack.slice());
      }
      pointers.splice(i, 0, {ip: {x: ip.x, y:ip.y}, delta: {x: -delta.x, y: -delta.y}});
      pointersUpdated.splice(i, 0, false);
      stacks.splice(i, 0, newSOS);
      // return signal to increment counter
      return "newPointer";
      break;
    case "'": // fetch character
      ip.x = (ip.x + delta.x) % width;
      ip.y = (ip.y + delta.y) % height;
      if (ip.x < 0) { ip.x = width + ip.x; }
      if (ip.y < 0) { ip.y = height + ip.y; }
      if (typeof codeArray[ip.y][ip.x] === "undefined") {
        toss.push(BigInt(32));
      } else if (typeof codeArray[ip.y][ip.x] === "string") {
        toss.push(BigInt(codeArray[ip.y][ip.x].charCodeAt(0)));
      } else {
        toss.push(codeArray[ip.y][ip.x]);
      }
      break;
    case "s": // store character
      ip.x = (ip.x + delta.x) % width;
      ip.y = (ip.y + delta.y) % height;
      if (ip.x < 0) { ip.x = width + ip.x; }
      if (ip.y < 0) { ip.y = height + ip.y; }
      if (toss.length > 0) {
        let item = toss.pop();
        if ( 31 < item && item < 127) {
          put(String.fromCharCode(bigIntAsInt(item)), ip.x, ip.y);
        } else {
          put(item, ip.x, ip.y);
        }
      }
      break;


    // more cases...



    case " ":
      // should only happen at beginning
      break;
    case "r": // reflect
      delta.x *= -ONE;
      delta.y *= -ONE;
      break;
    default:
      // do nothing
      break;
  }
}


// Colors to display instructions
var a = "black";
var b = "blue";
var c = "limegreen";
var d = "purple";
var e = "orange";
var f = "red";
var g = "cyan";
var instructionColorTable = {
  // Constants
  "0": a,
  "1": a,
  "2": a,
  "3": a,
  "4": a,
  "5": a,
  "6": a,
  "7": a,
  "8": a,
  "9": a,
  "a": a,
  "b": a,
  "c": a,
  "d": a,
  "e": a,
  "f": a,
  // pop -> operation -> push
  "+": b,
  "-": b,
  "*": b,
  "/": b,
  "%": b,
  "!": b,
  "`": b,
  // Movement
  "<": c,
  "^": c,
  ">": c,
  "v": c,
  "?": c,
  "‽": c,
  "_": c,
  "|": c,
  "#": c,
  "r": c,
  "x": c,
  "[": c,
  "]": c,
  "w": c,
  // Stack instructions
  ":": e,
  "\\": e,
  "$": e,
  "n": e,
  "{": e,
  "}": e,
  "u": e,
  // I/O(-ish)
  ".": d,
  ",": d,
  "&": d,
  "~": d,
  "\"": d,
  "'":d,
  "s":d,
  // Quit
  "q": f,
  "@": f,
  // Storage
  "g": g,
  "p": g,
  // Misc
  "t": "magenta",
};

var wordwrap = false;
function toggleWrap() {
  if (!wordwrap) {
    document.getElementById("befungeOutput").classList.add("wordwrap");
  } else {
    document.getElementById("befungeOutput").classList.remove("wordwrap");
  }
  wordwrap=!wordwrap;
}

/**********************
*  Code for examples  *
*    on main page     *
**********************/


var examplesCurrentlyVisible = false;
function toggleExamples() {
  if (!examplesCurrentlyVisible) {
    document.getElementById("examples").innerHTML = `<table id="exampleTable">
      <colgroup>
        <col style="width:calc(100%/5)">
        <col style="width:calc(100%/5)">
        <col style="width:calc(100%/5)">
        <col style="width:calc(100%/5)">
        <col style="width:calc(100%/5)">
      </colgroup>
      <tr>
        <td onclick="putExample(1)">Hello world!</td>
        <td onclick="putExample(3)">Factorial</td>
        <td onclick="putExample(4)">Factor</td>
        <td onclick="putExample(2)">Hello world! 2.0</td>
        <td onclick="putExample(5)">Binomial</td>
      </tr>
    </table>
    <p></p>`;
  } else {
    document.getElementById("examples").innerHTML = "";
  }
  examplesCurrentlyVisible = !examplesCurrentlyVisible;
}
function putExample(n) {
  document.getElementById("befungeCode").value = examples[n];
}

var examples = {
1:
"\"!dlrow olleH\"v,_@\n              >:^"
,2:
`#vt#vt#vt#vt#vt#vr
 v  v  v  v  v  "
 v  v  v  v  v  e
 v  v  v  v  "  H
 v  v  v  v  l  "
 v  v  v  "  l
 v  v  v     "
 v  v  "  o
 v  v  o  "
 v  "  w
 v  l  "
 "  r
 !  "
 d
 "
>>>>>>>>>>>>>>>>>>>>>,,@`
,3:
`&:>00pv
  *   1
  g   -
  0   :
.@^0 :_00g`
,4:
`&:." =",,:v ; Factors an integer
v  _v#\`0:<_0.@
 -10<    ^*-10\\

>00p>00g1-#v_>:#._@
^/\\g00:<   2
     >   1+v
     ^_^#%<:
          \\0
          g0
          ^<`
,5:
`>            a         4         v
 calculates n^ choose k^
v                                < makes k>n-k
>:1aa*p \\ :0aa*p \\ -: 1aa*g \\\`#v_ 1aa*g2av
 n-k!                    vp*aa2<vp*aa1p*a<
v:g*aa2     tv#     tv#  <      <
>3aa*p1-:v    v:g*aa0<        >16aa*p@
^ *g*aa3:_v   >4aa*p:1aa*g1+-v
   @p*aa51<   ^ * g*aa4 : -1 _^
<v -1  g*aa5 <
$>6aa*g 1-v
^      _v#<
^       _4aa*g3aa*g/.q`
};

// better minification - copy in
/*
var à="black",á="blue",â="limegreen",ã="purple",ä="orange",å="red",æ="cyan", N={0:à,1:à,2:à,3:à,4:à,5:à,6:à,7:à,8:à,9:à,a:à,b:à,c:à,d:à,e:à,f:à,"+":á,"-":á,"*":á,"/":á,"%":á,"!":á,"`":á,"<":â,"^":â,">":â,v:â,"?":â,_:â,"|":â,"#":â,r:â,x:â,"[":â,"]":â,w:â,":":ä,"\\":ä,$:ä,n:ä,"{":ä,
"}":ä,u:ä,".":ã,",":ã,"&":ã,"~":ã,'"':ã,"'":ã,s:ã,q:å,"@":å,g:æ,p:æ,t:"magenta"}
*/

// functions to be available after minification
window['stop'] = stop;
window['runBefunge'] = runBefunge;
window['toggleDisplay'] = toggleDisplay;
window['pauseBefunge'] = pauseBefunge;
window['stepOnce'] = stepOnce;
window['toggleExamples'] = toggleExamples;
window['putExample'] = putExample;
window['toggleWrap']=toggleWrap;
