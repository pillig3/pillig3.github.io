
var KeyEnum = Object.freeze({ "ENTER": 13, "(": 40, ")": 41, "BACKSPACE": 8, "LEFT": 37, "UP": 38, "RIGHT": 39, "DOWN": 40, "TAB": 9, });
var parenLevel = 0;
var tabSpaces = "  ";
var textBox = document.getElementById("schemeCode");

textBox.addEventListener("keypress", function(event) {
    switch (event.keyCode) {
        case KeyEnum["("]:
            parenLevel++;
            break;
        case KeyEnum[")"]:
            if (parenLevel > 0) parenLevel--;
            break;
        default:
    }
})

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case KeyEnum["TAB"]:
            event.preventDefault();
            var caretPosition = textBox.selectionStart;
            if (parenLevel === 0 || getLineOfPosition(caretPosition) != "") {
                var code = textBox.value;
                textBox.value = code.substring(0,caretPosition) + tabSpaces + code.substring(caretPosition);
                textBox.selectionStart = caretPosition + 2;
                textBox.selectionEnd = caretPosition + 2;
            } else { // indent all the way to the current block
                indentTextBox(caretPosition);
            }
            break;
        default:
            break;
    }
})

/*
 * Indents the current line by the appropriate number of tabs.
 */
var indentTextBox = function(pos) {
    var code = textBox.value;
    var result = code.substring(0,pos);
    result += (new Array(parenLevel)).fill(tabSpaces).join("");
    result += code.substring(pos);
    textBox.value = result;
    textBox.selectionStart = pos + 2 * parenLevel;
    textBox.selectionEnd = pos + 2 * parenLevel; // put cursor back where it belongs
}

textBox.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
        case KeyEnum["ENTER"]:
            indentTextBox(textBox.selectionStart);
            break;
        case KeyEnum["BACKSPACE"]:
        case KeyEnum["LEFT"]:
        case KeyEnum["UP"]:
        case KeyEnum["RIGHT"]:
        case KeyEnum["DOWN"]:
            updateParenLevel();
            break;
        default:
            break;
    }
})

textBox.addEventListener("mouseup", function(event) {
    updateParenLevel();
})

/*
 * Called when the user moves their cursor, updates the value of parenLevel.
 */
var updateParenLevel = function() {
    var caretPosition = textBox.selectionStart; // position of cursor
    var parens = (textBox.value.substring(0,caretPosition).match(/\(|\)/g) || []);
    parenLevel = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            parenLevel++;
        } else if (parenLevel > 0) {
            parenLevel--;
        }
    }
}

/*
 * Returns the line of str containing the specified position.
 * e.g. if the code is "a\nbc\nd" and pos=1, returns "a" ;
 *      if         ''                 pos=2, returns "bc" ;
 */
 var getLineOfPosition = function(pos) {
     var charArray = textBox.value.split("");
     var line = 0;
     for (var i = 0; i < pos; i++) {
         if (charArray[i] == "\n") line++;
     }
     return textBox.value.split("\n")[line];
 }
