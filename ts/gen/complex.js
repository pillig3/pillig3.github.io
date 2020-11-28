var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("complexNumbers", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /**********************
     *       Math         *
     *********************/
    //#region Math functions
    /**
     * Makes a normal js number into a complex number x+0i
     */
    function real(x) {
        return [x, 0];
    }
    exports.real = real;
    /**
     * Makes a normal js number into an imaginary number 0+xi
     */
    function imag(x) {
        return [0, x];
    }
    exports.imag = imag;
    /**
     * Gets the real part of a complex number
     */
    function Re(z) {
        return [z[0], 0];
    }
    exports.Re = Re;
    /**
     * Gets the imaginary part of a complex number
     */
    function Im(z) {
        return [z[1], 0];
    }
    exports.Im = Im;
    /**
     * Gets the modulus of a complex number (distance from zero)
     */
    function Mod(z) {
        return [Math.sqrt(Math.pow(z[0], 2) + Math.pow(z[1], 2)), 0];
    }
    exports.Mod = Mod;
    /**
     * Gets the argument of a complex number (angle from zero)
     */
    function Arg(z) {
        return [toPolar(z[0], z[1])[1], 0];
    }
    exports.Arg = Arg;
    /**
     * Adds two complex numbers
     */
    function add(z, w) {
        return [z[0] + w[0], z[1] + w[1]];
    }
    exports.add = add;
    /**
     * Subtracts one complex number from another
     */
    function subtract(z, w) {
        return [z[0] - w[0], z[1] - w[1]];
    }
    exports.subtract = subtract;
    /**
     * Multiplies two complex numbers
     */
    function mult(_a, _b) {
        var x1 = _a[0], y1 = _a[1];
        var x2 = _b[0], y2 = _b[1];
        return [x1 * x2 - y1 * y2, x1 * y2 + y1 * x2];
    }
    exports.mult = mult;
    /**
     * Divides one complex number by another
     */
    function divide(z, w) {
        var zz = toPolar(z[0], z[1]);
        var ww = toPolar(w[0], w[1]);
        return fromPolar(zz[0] * (1 / ww[0]), zz[1] - ww[1]);
    }
    exports.divide = divide;
    /**
     * Returns e to the power of a number - e^(x+iy)
     */
    function exp(_a) {
        var x = _a[0], y = _a[1];
        if (x === Infinity || y === Infinity) {
            return [Infinity, Infinity];
        }
        return [Math.pow(Math.E, x) * Math.cos(y), Math.pow(Math.E, x) * Math.sin(y)];
    }
    exports.exp = exp;
    /**
     * Returns the natural log of a complex number - ln(z)
     */
    function log(z) {
        var zz = toPolar(z[0], z[1]);
        return [Math.log(zz[0]), zz[1]];
    }
    exports.log = log;
    /**
     * Returns one complex number raised to the power of another - z^w = e^(w * ln(z))
     */
    function raise(z, w) {
        if (z[0] === 0 && z[1] === 0) {
            return z;
        }
        var zz = toPolar(z[0], z[1]);
        var logzz = toPolar(Math.log(zz[0]), zz[1]);
        var ww = toPolar(w[0], w[1]);
        return exp(fromPolar(ww[0] * logzz[0], ww[1] + logzz[1]));
    }
    exports.raise = raise;
    /**
     * Returns the square root of a complex number
     */
    function sqrt(z) {
        return raise(z, real(0.5));
    }
    exports.sqrt = sqrt;
    /**
     * Returns the sine of the complex number - sin z = ( e^(i z) - e^(-i z) ) / (2i)
     */
    function sine(z) {
        return divide(subtract(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [0, 2]);
    }
    exports.sine = sine;
    /**
     * Returns the cosine of the complex number - cos z = ( e^(i z) + e^(-i z) ) / 2
     */
    function cosine(z) {
        return divide(add(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [2, 0]);
    }
    exports.cosine = cosine;
    /**
     * Returns the tangent of the complex number - tan z = sin z / cos z
     */
    function tangent(z) {
        return divide(sine(z), cosine(z));
    }
    exports.tangent = tangent;
    /**
     * Returns the hyperbolic sine of the complex number - sinh z = sin(-i z)
     */
    function sinh(z) {
        return sine(mult([0, -1], z));
    }
    exports.sinh = sinh;
    /**
     * Returns the hyperbolic cosine of the complex number - cosh z = cos(-i z)
     */
    function cosh(z) {
        return cosine(mult([0, -1], z));
    }
    exports.cosh = cosh;
    /**
     * Returns a complex number tetrated a given number of times -
     * z^z^...^z  =  e^(e^(...e^(z ln(z))... ln(z)) ln(z))
     */
    function tetrate(_a, n) {
        var x = _a[0], y = _a[1];
        if (typeof n !== 'number') {
            if (n.length === 0) {
                return [0, 1]; //Just in case, return multiplicative identity
            }
            n = n[0];
        }
        n = Math.floor(n);
        if (n < 0) {
            return [NaN, NaN];
        }
        else if (n === 0) {
            return [1, 0];
        }
        else if (n === 1) {
            return [x, y];
        }
        var lnzX = Math.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
        var lnzY = toPolar(x, y)[1];
        var resX = x;
        var resY = y;
        var mX, mY, x1x2, y1y2, x1y2, y1x2;
        for (var i = 1; i < n; i++) {
            x1x2 = resX * lnzX;
            y1y2 = resY * lnzY;
            x1y2 = resX * lnzY;
            y1x2 = resY * lnzX;
            mX = resX * lnzX - resY * lnzY;
            mY = resX * lnzY + resY * lnzX; // mult
            resX = Math.pow(Math.E, mX) * Math.cos(mY);
            resY = Math.pow(Math.E, mX) * Math.sin(mY); // exp
        }
        if (isNaN(resX) || resX === Infinity || resX === -Infinity || isNaN(resY) || resY === Infinity || resY === -Infinity) {
            return [Infinity, Infinity];
        }
        return [resX, resY];
    }
    exports.tetrate = tetrate;
    //#endregion
    /**********************
     *      Helpers       *
     *********************/
    //#region Helper functions
    /**
     * Converts from cartesian coordinates to polar coordinates
     * @param x The x-coordinate of the complex number
     * @param y The y-coordinate of the complex number
     */
    function toPolar(x, y) {
        var θ;
        if (Math.abs(x) === Infinity || Math.abs(y) === Infinity) {
            θ = 0;
        }
        else if (x === 0 && y === 0) {
            θ = 0;
        }
        else if (x >= 0) {
            θ = Math.atan(y / x);
        }
        else if (y >= 0) {
            θ = Math.PI - Math.atan(y / (-x));
        }
        else {
            θ = -Math.PI - Math.atan(y / (-x));
        }
        return [Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), θ];
    }
    /**
     * Converts from polar coordinates to cartesian coordinates
     * @param r The modulus of the complex number
     * @param θ The argument of the complex number
     */
    function fromPolar(r, θ) {
        if (r === Infinity) {
            return [Infinity, Infinity];
        }
        return [r * Math.cos(θ), r * Math.sin(θ)];
    }
    /**
     * Gets a normalized value of an angle in the range (-π, π]
     * @param θ The angle
     */
    function normalizeTheta(θ) {
        if (θ === Infinity || θ === -Infinity) {
            return 0;
        }
        if (θ > Math.PI) {
            return θ - Math.floor((θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
        }
        else if (θ <= -Math.PI) {
            return θ + Math.floor((-θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
        }
        else {
            return θ;
        }
    }
    exports.normalizeTheta = normalizeTheta;
    /**
     * Iterates a function with respect to its first parameter a given number of times
     * @param f The function
     * @param n Number of times to iterate it
     */
    function iterate(f, n) {
        if (n <= 0) {
            return function (_x) { return 0; };
        }
        else if (n === 1) {
            return f;
        }
        return function (x) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var res = x;
            for (var i = 0; i < n; i++) {
                res = f.apply(void 0, __spreadArrays([res], args));
            }
            return res;
        };
    }
    exports.iterate = iterate;
});
//#endregion
define("tokenize", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var LETTERS = (function () {
        var letters = [];
        for (var i = 65; i <= 90; i++)
            letters.push(String.fromCharCode(i));
        for (var i = 97; i <= 122; i++)
            letters.push(String.fromCharCode(i));
        return letters;
    })();
    var DIGITS = '0123456789'.split('');
    var ALPHANUMERICS = LETTERS.concat(DIGITS);
    var ARITHMETIC_FUNCTIONS = '+-*/^'.split('');
    /**
     * Enum for the type of a token
     */
    var TokenType;
    (function (TokenType) {
        TokenType[TokenType["Function"] = 0] = "Function";
        TokenType[TokenType["Parenthesis"] = 1] = "Parenthesis";
        TokenType[TokenType["String"] = 2] = "String";
        TokenType[TokenType["Number"] = 3] = "Number";
        TokenType[TokenType["Comma"] = 4] = "Comma";
        TokenType[TokenType["SquareBracket"] = 5] = "SquareBracket";
    })(TokenType || (TokenType = {}));
    exports.TokenType = TokenType;
    /**
     * Represents a string buffer that gets one character at a time
     */
    var StrBuffer = /** @class */ (function () {
        function StrBuffer(str) {
            this.ind = 0;
            this.ary = str.split('');
        }
        /**
         * Gets the next character in the string, or undefined if there is not one
         */
        StrBuffer.prototype.nextChar = function () {
            return this.ary[this.ind++];
        };
        /**
         * Backs up the current position by one
         */
        StrBuffer.prototype.backup = function () {
            this.ind -= 1;
        };
        return StrBuffer;
    }());
    /**
     * Represents one token from the input text
     */
    var Token = /** @class */ (function () {
        function Token(text, type) {
            this.text = text;
            this.type = type;
        }
        return Token;
    }());
    exports.Token = Token;
    /**
     * Tokenizes a string and returns a list of the tokens
     * @param str The input string
     * @returns The list of tokens from the string
     */
    function tokenize(str) {
        var sb = new StrBuffer(str);
        var tokens = [];
        for (var c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
            var token = c;
            var type = void 0;
            if (ARITHMETIC_FUNCTIONS.indexOf(c) >= 0) {
                type = TokenType.Function;
            }
            else if (c === '(' || c === ')') {
                type = TokenType.Parenthesis;
            }
            else if (c === '[' || c === ']') {
                type = TokenType.SquareBracket;
            }
            else if (c === ',') {
                type = TokenType.Comma;
            }
            else if (LETTERS.indexOf(c) >= 0) {
                // variable, i, pi, sin, etc.
                while (ALPHANUMERICS.indexOf(c = sb.nextChar()) >= 0) {
                    token += c;
                }
                sb.backup();
                type = TokenType.String;
            }
            else if (DIGITS.indexOf(c) >= 0 || c === '.') {
                // Number
                var hasDot = (c === '.');
                while (DIGITS.indexOf(c = sb.nextChar()) >= 0 || c === '.') {
                    if (c === '.') {
                        if (hasDot) {
                            throw ('Too many dots in a number: ' + token + '.');
                        }
                        else {
                            hasDot = true;
                        }
                    }
                    token += c;
                }
                sb.backup();
                type = TokenType.Number;
            }
            else if (c === ' ') {
                continue;
            }
            else {
                throw 'Unrecognized character: ' + c;
            }
            tokens.push(new Token(token, type));
        }
        return tokens;
    }
    exports.tokenize = tokenize;
});
define("parse", ["require", "exports", "complexNumbers", "functify", "tokenize"], function (require, exports, complexNumbers_1, functify_1, tokenize_1) {
    "use strict";
    exports.__esModule = true;
    var NamedFunctions = {
        'exp': complexNumbers_1.exp,
        'ln': complexNumbers_1.log,
        'log': complexNumbers_1.log,
        'cos': complexNumbers_1.cosine,
        'sin': complexNumbers_1.sine,
        'tan': complexNumbers_1.tangent,
        'sinh': complexNumbers_1.sinh,
        'cosh': complexNumbers_1.cosh,
        'tet': complexNumbers_1.tetrate,
        'sqrt': complexNumbers_1.sqrt,
        'Re': complexNumbers_1.Re,
        'Im': complexNumbers_1.Im,
        'Arg': complexNumbers_1.Arg,
        'Mod': complexNumbers_1.Mod,
        'iterate': complexNumbers_1.iterate
    };
    /**
     * Class for a node in the parse tree
     */
    var Node = /** @class */ (function () {
        function Node(f, children) {
            this.f = f;
            this.children = children;
        }
        return Node;
    }());
    exports.Node = Node;
    /**
     * Takes an array of tokens and turns it into a tree structure, returning the root Node
     * @param tokens The array of tokens from tokenize()
     * @param vars Array with open space for the number of variables allowed
     * @returns The root Node of the parsed tree
     */
    function parse(tokens, vars) {
        if (vars === undefined) {
            vars = [null]; //Only allow one variable (for now)
        }
        var rslt = parseRec(tokens, vars);
        if (rslt instanceof Array) {
            return new Node(function (x) { return x; }, [rslt]);
        }
        else if (!(rslt instanceof Node)) {
            return new Node(function (x) { return x; }, [rslt]);
        }
        else {
            return rslt;
        }
    }
    exports.parse = parse;
    /**
     * Recursive version of parse
     */
    function parseRec(tokens, vars) {
        if (tokens.length === 0) {
            throw 'Syntax error (I don\'t know what to do with this input)';
        }
        var children = [];
        var tokenOne = tokens[0];
        // See if it's an arithmetic function
        var _a = findLastFunc(tokens), funcName = _a.funcName, index = _a.index;
        if (funcName !== '') {
            if (funcName === '-' && index === 0) {
                // Actually a negative sign, not minus
                children.push(complexNumbers_1.real(0));
            }
            else {
                children.push(parseRec(tokens.slice(0, index), vars));
            }
            if (funcName === 'implicit_mult') {
                index -= 1;
            }
            children.push(parseRec(tokens.slice(index + 1), vars));
            return new Node(getFuncFromArithFuncString(funcName), children);
        }
        // See if it's a single thing
        if (tokens.length === 1) {
            var unit_1 = turnTokenIntoChild(tokenOne, vars);
            if (typeof unit_1 === 'function') {
                throw tokenOne.text + ' called without arguments';
            }
            return unit_1;
        }
        // See if it's a parenthesis
        if (tokenOne.text === '(' || tokenOne.text === '[') {
            var closePos = getNextCloseParen(tokens, 0, tokenOne.type);
            if (closePos === tokens.length - 1) {
                // Entirely inside parens
                return parseRec(tokens.slice(1, tokens.length - 1), vars);
            }
            else {
                // Otherwise, multiplication
                children.push(parseRec(tokens.slice(1, closePos), vars));
                children.push(parseRec(tokens.slice(closePos + 1), vars));
                return new Node(complexNumbers_1.mult, children);
            }
        }
        // See if it's a named function
        if (isNamedFunction(tokenOne.text)) {
            var func = matchKnownFunc(tokenOne.text);
            if (tokens[1].text === '(') {
                // Function without square brackets
                if (funcHasSquareBrackets(tokenOne.text)) {
                    throw tokenOne.text + ' should be called with square brackets';
                }
                var endInd = getNextCloseParen(tokens, 1, tokenize_1.TokenType.Parenthesis);
                var args = splitArguments(tokens.slice(2, endInd));
                if (args.length !== func.length) {
                    throw 'Wrong number of parameters passed to ' + tokenOne.text;
                }
                if (endInd === tokens.length - 1) {
                    // All tokens are arguments - here we know func is a ComplexFunction since it does not have square brackets
                    return new Node(func, args.map(function (x) { return parseRec(x, vars); }));
                }
                else {
                    // There are tokens past the arguments - we're multiplying with the next part
                    children.push(new Node(func, args.map(function (x) { return parseRec(x, vars); })));
                    children.push(parseRec(tokens.slice(endInd + 1), vars));
                    return new Node(complexNumbers_1.mult, children);
                }
            }
            else if (tokens[1].text === '[') {
                // Function with square brackets
                if (!funcHasSquareBrackets(tokenOne.text)) {
                    throw tokenOne.text + ' should not be called with square brackets';
                }
                var endInd = getNextCloseParen(tokens, 1, tokenize_1.TokenType.SquareBracket);
                var _b = getComplexFuncFromFuncWithSquareBrackets(tokenOne.text, tokens.slice(2, endInd)), complexFunc = _b.complexFunc, numArgs = _b.numArgs;
                // Now we just need everything after the square brackets
                tokens = tokens.slice(endInd + 1);
                if (tokens.length === 0 || tokens[0].text !== '(') {
                    throw 'No parameters passed to ' + tokenOne.text;
                }
                // Get the arguments
                var argsEndInd = getNextCloseParen(tokens, 0, tokenize_1.TokenType.Parenthesis);
                var args = splitArguments(tokens.slice(1, argsEndInd));
                if (args.length < numArgs) {
                    throw 'Not enough parameters passed to ' + tokenOne.text;
                }
                if (argsEndInd === tokens.length - 1) {
                    // Everything is in the parentheses
                    return new Node(complexFunc, args.map(function (x) { return parseRec(x, vars); }));
                }
                else {
                    // There are tokens past the arguments - we're multiplying with the next part
                    children.push(new Node(complexFunc, args.map(function (x) { return parseRec(x, vars); })));
                    children.push(parseRec(tokens.slice(argsEndInd + 1), vars));
                    return new Node(complexNumbers_1.mult, children);
                }
            }
            else {
                // Function called without parens/brackets (e.g. 'cos x' or 'cos sin x')
                // Only allow this with 1-argument functions
                if (func.length > 1) {
                    throw 'Missing parentheses for ' + tokenOne.text;
                }
                return new Node(func, [parseRec(tokens.slice(1), vars)]);
            }
        }
        // Otherwise it's just implicit multiplication
        var unit = turnTokenIntoChild(tokenOne, vars);
        if (typeof unit === 'function') {
            throw tokenOne.text + ' called without arguments';
        }
        children.push(unit);
        children.push(parseRec(tokens.slice(1), vars));
        return new Node(complexNumbers_1.mult, children);
    }
    /**
     * Find lowest priority elementary function outside of parentheses (PEMDAS) and its index in the token list
     * @param tokens The list of tokens
     * @returns The pair [lowest-priority function, index in the token list]
     * For example,
     * ['2', 'x', '+', 'sin', '3'] => [add, 2]
     * ['2', 'x', '*', 'sin', '3'] => [mult, 2]
     * ['2', 'sin', 'x']           => [implicit_mult, 1]
     */
    function findLastFunc(tokens) {
        var strF = '';
        var index;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.type !== tokenize_1.TokenType.Function) {
                // Check for implicit multiplication
                if (i > 0) {
                    var prevToken = tokens[i - 1];
                    if (prevToken.type !== tokenize_1.TokenType.Function) {
                        // must have 2 tokens next to each other that are each either
                        // a number, a variable, or a parenthesis
                        if (!(['+', '-'].indexOf(strF) >= 0) // +/- are lower priority
                            && ([tokenize_1.TokenType.Number, tokenize_1.TokenType.String].indexOf(prevToken.type) >= 0 || prevToken.text === ')')
                            && ([tokenize_1.TokenType.Number, tokenize_1.TokenType.String].indexOf(token.type) >= 0 || token.text === '(')
                            && !isNamedFunction(prevToken.text)) {
                            strF = 'implicit_mult';
                            index = i;
                        }
                    }
                }
                if ([tokenize_1.TokenType.Parenthesis, tokenize_1.TokenType.SquareBracket].indexOf(token.type) >= 0) {
                    if (['(', '['].indexOf(token.text) >= 0) {
                        i = getNextCloseParen(tokens, i, token.type);
                    }
                    else {
                        console.log(tokens);
                        throw 'Error: unbalanced paremtheses';
                    }
                }
                continue;
            }
            // always some function if one exists
            if (strF === '') {
                strF = token.text;
                index = i;
            }
            else if (['+', '-'].indexOf(token.text) >= 0) {
                // always lowest priority
                strF = token.text;
                index = i;
            }
            else if (['*', '/'].indexOf(token.text) >= 0 && !(['+', '-'].indexOf(strF) >= 0)) {
                // only lowest priority if no add or subtract
                strF = token.text;
                index = i;
            }
            // No case for ^ because it's set if(f) strF is empty so far
        }
        return { funcName: strF, index: index };
    }
    /**
     * Returns whether the string is a known function (like ln, tet, etc.)
     */
    function isNamedFunction(strF) {
        return (NamedFunctions[strF] !== undefined);
    }
    /**
     * Matches the string to a known function
     */
    function matchKnownFunc(strF) {
        return NamedFunctions[strF];
    }
    /**
     * Returns whether the function uses square brackets
     */
    function funcHasSquareBrackets(strF) {
        return strF === 'iterate';
    }
    /**
     * Gets the position of the closing parenthesis matching the opening parenthesis at the given position
     * @param tokens The list of tokens
     * @param i The position of the opening parenthesis
     * @param parenType Either TokenType.Parenthesis or TokenType.SquareBracket to tell which type of paren we're looking for
     */
    function getNextCloseParen(tokens, i, parenType) {
        var level = 1;
        var open;
        var close;
        if (parenType === tokenize_1.TokenType.Parenthesis) {
            open = '(';
            close = ')';
        }
        else if (parenType === tokenize_1.TokenType.SquareBracket) {
            open = '[';
            close = ']';
        }
        else {
            throw 'getNextCloseParen called incorrectly. Shame on the developer!';
        }
        var j;
        for (j = i + 1; j < tokens.length; j++) {
            switch (tokens[j].text) {
                case open:
                    level++;
                    break;
                case close:
                    level--;
                    break;
                default:
                    break;
            }
            if (level === 0) {
                break;
            }
        }
        if (j > tokens.length - 1) {
            throw 'Error: unbalanced paremtheses';
        }
        return j;
    }
    function getFuncFromArithFuncString(arithFuncString) {
        switch (arithFuncString) {
            case '+':
                return complexNumbers_1.add;
            case '-':
                return complexNumbers_1.subtract;
            case '*':
                return complexNumbers_1.mult;
            case '/':
                return complexNumbers_1.divide;
            case '^':
                return complexNumbers_1.raise;
            case 'implicit_mult':
                return complexNumbers_1.mult;
            default:
                throw 'getFuncFromArithFuncString called incorrectly. Shame on the developer!';
        }
    }
    /**
     * Given a list of tokens passed into a function, returns a list where the nth entry is the list of tokens corresponding to the nth argument.
     * @param tokens The tokens passed into a function
     * @returns A list of arguments (each argument is a list of tokens)
     * For example, if the overall input is: tet(2*n, 35 tet(1, 2))
     * then pass tokens = ['2', 'n', ',', '35', 'tet', '(', '1', '2', ')']
     * and this returns [ ['2', 'n'], ['35', 'tet', '(', '1', '2', ')'] ]
     */
    function splitArguments(tokens) {
        var args = [], curArg = [];
        var level = 0;
        for (var i = 0; i < tokens.length; i++) {
            var curToken = tokens[i];
            switch (curToken.type) {
                case tokenize_1.TokenType.Comma:
                    if (level === 0) {
                        args.push(curArg);
                        curArg = [];
                    }
                    else {
                        curArg.push(curToken);
                    }
                    break;
                case tokenize_1.TokenType.Parenthesis:
                case tokenize_1.TokenType.SquareBracket:
                    if (curToken.text === '(' || curToken.text === '[') {
                        level++;
                    }
                    else {
                        level--;
                    }
                // Don't break
                default:
                    curArg.push(curToken);
                    break;
            }
        }
        args.push(curArg);
        return args;
    }
    /**
     * Turn a functin with square brackets ('function[arg1, arg2, ...]') into a single function
     * @param strF The function as a string (only 'iterate' supported for now)
     * @param tokens The tokens from inside the square brackets
     * @returns The complex function and the number of arguments that should be passed to the complex function
     */
    function getComplexFuncFromFuncWithSquareBrackets(strF, tokens) {
        var args = splitArguments(tokens);
        if (strF === 'iterate') {
            // Function is iterate[g, n, varName]
            if (args.length !== 3) {
                throw 'wrong number of square-bracket parameters for iterate';
            }
            else if (args[2].length !== 1 || args[2][0].type !== tokenize_1.TokenType.String) {
                throw 'third parameter for iterate should be a single variable';
            }
            var varName = args[2][0].text;
            // Allow [arbitrary large number] variables
            var newVarAry = createFilledArray(200, null);
            newVarAry[0] = varName;
            var g = functify_1.functify(parse(args[0], newVarAry));
            var n = functify_1.functify(parse(args[1], []))()[0];
            if (n <= 0) {
                throw 'second parameter for iterate should be > 0';
            }
            return { complexFunc: complexNumbers_1.iterate(g, Math.floor(n)), numArgs: newVarAry.indexOf(null) };
        }
        else {
            // Not supported
            throw 'getComplexFuncFromFuncWithSquareBrackets called incorrectly. Shame on the developer!';
        }
    }
    /**
     * Create an array filled with a value
     * @param size The size for the array
     * @param value The value to fill the array
     */
    function createFilledArray(size, value) {
        var ary = [];
        for (var index = 0; index < size; index++) {
            ary.push(value);
        }
        return ary;
    }
    /**
     * Turn a single token into a thing that can be a child of a Node
     * @param token The token
     * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
     * @returns The token turned into a type that can be a child of a Node
     */
    function turnTokenIntoChild(token, vars) {
        switch (token.type) {
            case tokenize_1.TokenType.String:
                if (token.text === 'i') {
                    return complexNumbers_1.imag(1);
                }
                else if (token.text === 'e') {
                    return complexNumbers_1.real(Math.E);
                }
                else if (token.text === 'pi') {
                    return complexNumbers_1.real(Math.PI);
                }
                else if (isNamedFunction(token.text)) {
                    var fn = matchKnownFunc(token.text);
                    if (token.text === 'iterate') {
                        throw 'iterate cannot be used like this (I\'m not sure what you entered, but it\'s wrong)';
                    }
                    return fn;
                }
                else {
                    // Otherwise, it's a variable
                    if (!canUseVar(token.text, vars)) {
                        throw tooManyVarsErr(token.text, vars);
                    }
                    var ind = vars.indexOf(token.text);
                    var variable = {
                        name: token.text,
                        position: ind + 1
                    };
                    return variable;
                }
            case tokenize_1.TokenType.Number:
                return complexNumbers_1.real(parseFloat(token.text));
            case tokenize_1.TokenType.Comma:
                throw 'Rogue comma detected';
            default:
                throw 'Something went wrong; encountered "' + token.text + '" where I did not expect it. Shame on the developer!';
        }
    }
    /**
     * Determines whether we can use a variable with this name given the variables seen so far. Also adds variable to the variable array if we can use it.
     * @param varName The name of the potential variable
     * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
     */
    function canUseVar(varName, varAry) {
        if (varAry.indexOf(varName) >= 0) {
            // yep, we've used it before
            return true;
        }
        var nextSpot = varAry.indexOf(null);
        if (nextSpot < 0) {
            // nope, too many
            return false;
        }
        else {
            // yep, add it
            varAry[nextSpot] = varName;
            return true;
        }
    }
    /**
     * Creates an error string for when there are too many variables used
     * @param extraVar The name of the variable that broke the camel's back
     * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
     */
    function tooManyVarsErr(extraVar, vars) {
        var err = 'Too many variables: ';
        if (vars.length === 0) {
            return err + extraVar;
        }
        else if (vars.length === 1) {
            err += vars[0] + ' ';
        }
        else {
            for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
                var varName = vars_1[_i];
                if (varName !== null) {
                    err += varName + ', ';
                }
            }
        }
        err += 'and ' + extraVar;
        return err;
    }
});
define("functify", ["require", "exports", "complexNumbers", "parse", "tokenize"], function (require, exports, complexNumbers_2, parse_1, tokenize_2) {
    "use strict";
    exports.__esModule = true;
    /**
     * Returns a function from an input string (or throws an error on invalid input)
     * @param str The input string
     */
    function strToFunc(str) {
        return functify(parse_1.parse(tokenize_2.tokenize(str)));
    }
    exports.strToFunc = strToFunc;
    /**
     * Returns a complex number from an input string (or throws an error on invalid input)
     * @param str The input string
     */
    function strToNum(str) {
        var vars = [];
        try {
            var rslt = parse_1.parse(tokenize_2.tokenize(str), vars);
            return functify(rslt)();
        }
        catch (e) {
            throw 'Input must be a complex number';
        }
    }
    exports.strToNum = strToNum;
    /**
     * Turns a Node into a function on the complex numbers
     * TODO: Could be improved by not creating so many functions
     * @param n The node
     * @returns A complex function corresponding to the parse tree entered
     */
    function functify(n) {
        if (n.children === undefined || n.children.length === 0) {
            return n.f;
        }
        // Turn each child into a function
        var results = [];
        for (var i = 0; i < n.children.length; i++) {
            results.push(childToFunc(n.children[i]));
        }
        // Then create a function that calls the Node's function on the result of calling each child function with the given arguments
        var func = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return n.f.apply(n, results.map(function (g) { return g.apply(void 0, args); }));
        };
        return func;
    }
    exports.functify = functify;
    /**
     * Turns a child of a Node into a function on the complex numbers
     */
    function childToFunc(child) {
        if (child instanceof parse_1.Node) {
            return functify(child);
        }
        else if (child instanceof Array) {
            // child is a ComplexNumber
            return function () { return child; };
        }
        else if (typeof child === 'object') {
            // child is a Variable
            var position = child.position;
            if (position === 1) {
                // It's the first variable
                return function (x) { return x; };
            }
            else {
                // It's a subsequent variable, create a function that returns the position-th argument
                var str = 'n1,';
                for (var i = 2; i < position; i++) {
                    str += 'n' + i + ',';
                }
                str += 'n' + position;
                return new Function(str, 'return n' + position + ';');
            }
        }
        else if (typeof child === 'number') {
            // Shouldn't happen but just in case
            console.log('This shouldn\'t happen - child in childToFunc is type number');
            return function () { return complexNumbers_2.real(child); };
        }
        else {
            // Otherwise, should be a function
            return child;
        }
    }
});
define("complex", ["require", "exports", "complexNumbers", "functify"], function (require, exports, complexNumbers_3, functify_2) {
    "use strict";
    exports.__esModule = true;
    var MIN_PIXELS = 20;
    function dgebi(id) { return document.getElementById(id); }
    var floor = Math.floor;
    var lastTimeoutID;
    var input = dgebi('mainInput');
    var widthInput = dgebi('widthInput');
    var heightInput = dgebi('heightInput');
    var centerInput = dgebi('centerInput');
    var inputBoxes = ['mainInput', 'widthInput', 'heightInput', 'centerInput'];
    var canvas = dgebi('myCanvas');
    var ctx = canvas.getContext('2d');
    var imageData = new ImageData(canvas.width, canvas.height);
    var data = imageData.data;
    dgebi('allInputDiv').addEventListener('keydown', onInputKey);
    dgebi('plusMinusDiv').addEventListener('click', onButtonClick);
    canvas.addEventListener('keydown', onCanvasKey);
    for (var _i = 0, _a = ['inputDiv', 'widthDiv', 'heightDiv']; _i < _a.length; _i++) {
        var name_1 = _a[_i];
        dgebi(name_1).addEventListener('click', onInputDivClick);
    }
    window.onresize = function () { view.hasChanged = true; };
    function onWindowLoad() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        var hash = window.location.hash;
        if (hash !== '' && hash !== '#') {
            setTimeout(drawFromHash, 0, hash.replace(/%20/g, ' '));
        }
        else {
            setCenter(0, 0);
        }
        view.hasChanged = true;
    }
    window.addEventListener("load", onWindowLoad, false);
    //#region View
    /**
     * Contains information about the current view
     */
    var view = {
        center: [0, 0],
        width: 10,
        height: (window.innerHeight / window.innerWidth) * 10,
        setHeight: function (width) {
            this.height = (window.innerHeight / window.innerWidth) * width;
        },
        setWidth: function (height) {
            this.width = (window.innerWidth / window.innerHeight) * height;
        },
        manuallySet: false,
        hasChanged: false,
        lastFunc: null,
        lastFuncStr: null,
        fixAspectRatio: true
    };
    /**
     * Set the center of the view
     */
    function setCenter(x, y) {
        view.center = [x, y];
        centerInput.value = x + '+' + y + 'i';
        centerInput.lastValue = centerInput.value;
    }
    //#endregion
    //#region Buttons
    /**
     * Toggle showing the rest of the buttons
     */
    function toggleMenu() {
        var menuBox = dgebi('menuBox');
        var chevronDiv = dgebi('chevronDiv');
        if (chevronDiv.classList.contains('upsidedown')) {
            chevronDiv.classList.remove('upsidedown');
            menuBox.hidden = true;
        }
        else {
            chevronDiv.classList.add('upsidedown');
            menuBox.hidden = false;
        }
    }
    /**
     * (Un)Fix aspect ratio button
     */
    function showOrHideHeight() {
        if (view.fixAspectRatio) {
            dgebi('heightDiv').hidden = false;
            view.fixAspectRatio = false;
        }
        else {
            dgebi('heightDiv').hidden = true;
            view.fixAspectRatio = true;
        }
    }
    /**
     * Origin button - centers at 0 + 0i
     */
    function center() {
        if (view.center == [0, 0]) {
            return;
        }
        view.center = [0, 0];
        view.width = 10;
        view.setHeight(view.width);
        setCenter(0, 0);
        view.hasChanged = true;
        view.manuallySet = false;
        draw(view.lastFunc);
    }
    /**
     * Copy link to clipboard button
     */
    function copyLink() {
        var link = "https://pillig3.github.io/complex.html#";
        link += view.lastFuncStr.replace(/ /g, '%20') + '&'; // Function
        link += view.center[0] + ',' + view.center[1] + '&'; // Center
        link += view.width;
        if (!view.fixAspectRatio) {
            link += ',' + view.height;
        }
        navigator.clipboard.writeText(link);
    }
    /**
     * Change resolution button
     */
    function changeResolution() {
        var pixelWidthStr = prompt('Change resolution:\nEnter a width for the image in pixels', canvas.width.toString());
        if (pixelWidthStr === null || pixelWidthStr === "") {
            return; // Cancel button
        }
        var pixelWidth = parseInt(pixelWidthStr);
        if (isNaN(pixelWidth)) {
            pixelWidth = canvas.width;
        }
        pixelWidth = Math.max(pixelWidth, MIN_PIXELS);
        var pixelHeight = (view.height / view.width) * pixelWidth;
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
        view.hasChanged = true;
        draw(view.lastFunc, false);
    }
    //#endregion
    //#region Drag 'n' drop
    var dragStart;
    /**
     * Begin the drag
     */
    canvas.onmousedown = function (e) {
        if (e.buttons === 2) { // right-click
            return;
        }
        canvas.onmousemove = dragCanvas;
        canvas.addEventListener('keydown', abortIfEsc);
        dragStart = [e.pageX, e.pageY];
    };
    /**
     * When the mouse moves while the drag is in progress
     */
    function dragCanvas(e) {
        var ratio = imageData.width / window.innerWidth;
        var _a = [(e.pageX - dragStart[0]) * ratio, (e.pageY - dragStart[1]) * ratio], dx = _a[0], dy = _a[1];
        if (lastTimeoutID !== undefined) {
            clearTimeout(lastTimeoutID);
            lastTimeoutID = undefined;
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, dx, dy);
    }
    /**
     * When the mouse button is released
     */
    canvas.onmouseup = function (e) {
        canvas.onmousemove = undefined;
        canvas.removeEventListener('keydown', abortIfEsc);
        if (dragStart === undefined) {
            return;
        }
        if (Math.abs(e.pageX - dragStart[0]) < 5 && Math.abs(e.pageY - dragStart[1]) < 5) {
            // probs wasn't trying to drag
            ctx.putImageData(imageData, 0, 0);
            if (lastTimeoutID === undefined) {
                draw(view.lastFunc);
            }
            dragStart = undefined;
            return;
        }
        var ratio = imageData.width / window.innerWidth;
        var dx = ((e.pageX - dragStart[0]) / canvas.width) * view.width * ratio;
        var dy = -((e.pageY - dragStart[1]) / canvas.height) * view.height * ratio;
        view.center = [view.center[0] - dx, view.center[1] - dy];
        setCenter(view.center[0], view.center[1]);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;
        draw(view.lastFunc);
        dragStart = undefined;
    };
    /**
     * Abort the drag if user presses the escape button
     */
    function abortIfEsc(e) {
        if (e.code === 'Escape') {
            canvas.onmousemove = undefined;
            dragStart = undefined;
            canvas.removeEventListener('keydown', abortIfEsc);
            ctx.putImageData(imageData, 0, 0);
            if (lastTimeoutID === undefined) {
                draw(view.lastFunc);
            }
        }
    }
    //#endregion
    //#region Zoom in and out
    /**
     * Zoom in to half the current window size
     */
    function zoomIn() {
        // Make quick pixellated version to show while loading
        var _a = [canvas.width, canvas.height], pixelWidth = _a[0], pixelHeight = _a[1];
        imageData = ctx.getImageData(Math.ceil(pixelWidth / 4), Math.ceil(pixelHeight / 4), floor(3 * pixelWidth / 4), floor(3 * pixelHeight / 4));
        data = imageData.data;
        var newData = new Uint8ClampedArray(pixelWidth * pixelHeight * 4);
        var ind = 0;
        for (var row = 0; row < pixelHeight; row++) {
            var dataInd = floor(row / 2) * imageData.width * 4;
            for (var col = 0; col < pixelWidth; col++) {
                newData[ind] = data[dataInd];
                newData[ind + 1] = data[dataInd + 1];
                newData[ind + 2] = data[dataInd + 2];
                newData[ind + 3] = data[dataInd + 3];
                ind += 4;
                if (col % 2 == 1) {
                    dataInd += 4;
                }
            }
        }
        imageData = new ImageData(newData, pixelWidth);
        data = imageData.data;
        ctx.putImageData(imageData, 0, 0);
        // Now draw more detailed image
        view.width /= 2;
        view.height /= 2;
        draw(view.lastFunc);
    }
    /**
     * Zoom out to twice the current window size
     */
    function zoomOut() {
        // Make quick pixellated version to show while loading
        var _a = [canvas.width, canvas.height], pixelWidth = _a[0], pixelHeight = _a[1];
        imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
        data = imageData.data;
        var newData = new Uint8ClampedArray(floor(pixelWidth / 2) * floor(pixelHeight / 2) * 4);
        var dataInd = 0, ind = 0;
        for (var row = 0; row < floor(pixelHeight / 2); row++) {
            dataInd = pixelWidth * 2 * row * 4;
            for (var col = 0; col < floor(pixelWidth / 2); col++) {
                newData[ind] = data[dataInd];
                newData[ind + 1] = data[dataInd + 1];
                newData[ind + 2] = data[dataInd + 2];
                newData[ind + 3] = data[dataInd + 3];
                ind += 4;
                dataInd += 8;
            }
        }
        ctx.fillRect(0, 0, pixelWidth, pixelHeight);
        ctx.putImageData(new ImageData(newData, floor(pixelWidth / 2)), floor(pixelWidth / 4), floor(pixelHeight / 4));
        imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
        data = imageData.data;
        // Now draw more detailed image
        view.width *= 2;
        view.height *= 2;
        draw(view.lastFunc);
    }
    //#endregion
    //#region Key presses
    /**
     * Key pressed when focus is on the canvas
     */
    function onCanvasKey(e) {
        if (e.isComposing) {
            return;
        }
        switch (e.code) {
            case 'Tab':
                e.preventDefault();
                input.focus();
                break;
            case 'Equal':
                if (!controlKeyHeld(e)) {
                    zoomIn();
                }
                break;
            case 'Minus':
                if (!controlKeyHeld(e)) {
                    zoomOut();
                }
                break;
        }
    }
    /**
     * Whether one of the 'controlling' keys is held
     */
    function controlKeyHeld(e) {
        return e.ctrlKey || e.metaKey || e.altKey;
    }
    /**
     * Sets focus from the containing div to the <textarea> - otherwise the user could
     * click on a tiny place in the input box and not get to the input field
     */
    function onInputDivClick(e) {
        if (e.target.children.length > 0) {
            e.target.children[0].focus();
        }
    }
    /**
     * Handler when a button is pressed in one of the input boxes or buttons
     */
    function onInputKey(e) {
        if (e.isComposing) {
            return;
        }
        var elem = e.target.id;
        if (inputBoxes.indexOf(elem) >= 0) {
            if (e.code === 'Enter') {
                e.preventDefault();
                drawOnEnter();
            }
        }
        else {
            if (e.code === 'Enter' || e.code === 'Space') {
                if (elem === 'horiz' || elem === 'vert') {
                    elem = e.target.parentNode.id;
                }
                doFuncForElem(elem);
            }
        }
    }
    /**
     * Handler when a button is clicked
     */
    function onButtonClick(e) {
        var elem = e.target.id;
        if (['horiz', 'vert'].indexOf(e.target.classList[0]) >= 0) {
            elem = e.target.parentNode.id;
        }
        doFuncForElem(elem);
    }
    /**
     * Execute the corresponding function when a doc element is clicked
     */
    function doFuncForElem(elem) {
        switch (elem) {
            case 'plusDiv':
                zoomIn();
                break;
            case 'minusDiv':
                zoomOut();
                break;
            case 'originDiv':
                center();
                break;
            case 'chevronDiv':
                toggleMenu();
                break;
            case 'copyButt':
                copyLink();
                break;
            case 'infoButt':
                window.open('/complex/info.html');
                break;
            case 'ARButton':
                showOrHideHeight();
                break;
            case 'rslnButt':
                changeResolution();
                break;
        }
    }
    //#endregion
    //#region Draw
    /**
     * Draw what the user entered
     */
    function drawOnEnter() {
        var f;
        var str = input.value;
        var width = widthInput.value;
        var height = heightInput.value;
        var center = centerInput.value;
        if (center !== centerInput.lastValue) {
            try {
                view.center = functify_2.strToNum(center);
                centerInput.lastValue = center;
                view.hasChanged = true;
            }
            catch (e) {
                // Just use last valid center
                logError(e, true);
            }
        }
        if (width !== widthInput.lastValue) {
            setViewHW('width', widthInput.value);
            view.manuallySet = true;
        }
        if (height !== heightInput.lastValue) {
            setViewHW('height', heightInput.value);
            view.manuallySet = true;
        }
        if (typeof str !== 'string' || str == '')
            return;
        try {
            f = functify_2.strToFunc(str);
        }
        catch (e) {
            logError(e);
            return;
        }
        draw(f, view.lastFuncStr !== str);
        view.lastFuncStr = str;
    }
    /**
     * Set the height or width of the view
     * @returns true if the property was changed
     */
    function setViewHW(prop, val) {
        if (val === '') {
            return false;
        }
        var newVal = parseFloat(val);
        if (typeof newVal !== 'number' || newVal <= 0 || isNaN(newVal) || newVal === Infinity) {
            logError(prop[0].toUpperCase() + prop.slice(1) + ' should be a positive number');
        }
        else if (newVal !== view[prop]) {
            view[prop] = newVal;
            view.hasChanged = true;
            return true;
        }
    }
    /**
     * Display an error message
     * @param e The error message
     * @param notAnError True if this is more of a 'notification' than an error - the div will be grey rather than yellow
     */
    function logError(e, notAnError) {
        if (notAnError === void 0) { notAnError = false; }
        var cssClass = '';
        var errorDiv = dgebi('errorDiv');
        if (!notAnError) {
            errorDiv.innerHTML = '❗&nbsp;&nbsp;&nbsp;&nbsp;' + e + '&nbsp;&nbsp;&nbsp;&nbsp;❗';
            cssClass = 'anError'; // yellow
        }
        else {
            errorDiv.innerHTML = '❗&nbsp;' + e + '&nbsp;❗';
            cssClass = 'notAnError'; // grey
        }
        errorDiv.classList.add('visible');
        errorDiv.classList.add(cssClass);
        setTimeout(function (ed) {
            ed.classList.remove('visible');
            ed.classList.remove(cssClass);
        }, 4000, errorDiv);
    }
    /**
     * Draw the entered function
     */
    function draw(f, showLowRes, callback) {
        if (showLowRes === void 0) { showLowRes = false; }
        view.lastFunc = f;
        var pixelWidth = canvas.width;
        var pixelHeight = canvas.height;
        if (view.hasChanged) {
            if (view.fixAspectRatio || !view.manuallySet) {
                view.setHeight(view.width);
            }
            imageData = new ImageData(pixelWidth, pixelHeight);
            data = imageData.data;
            showLowRes = true;
            view.hasChanged = false;
        }
        widthInput.value = view.width.toString();
        heightInput.value = view.height.toString();
        widthInput.lastValue = widthInput.value;
        heightInput.lastValue = heightInput.value;
        if (lastTimeoutID !== undefined) {
            clearTimeout(lastTimeoutID);
        }
        var toCoords = getPixelToCoords(pixelWidth, pixelHeight);
        var scaleMod = getScaleMod(f, toCoords, pixelWidth, pixelHeight);
        if (showLowRes) {
            drawLowRes(f, toCoords, scaleMod, pixelWidth, pixelHeight);
        }
        lastTimeoutID = setTimeout(drawTimeout, 0, f, 0, toCoords, scaleMod, pixelWidth, pixelHeight, callback);
    }
    /**
     * Draw a low resolution version of the function while the full image loads
     */
    function drawLowRes(f, toCoords, scaleMod, width, height) {
        var ind;
        for (var row = 0; row < Math.ceil(height / MIN_PIXELS); row++) {
            for (var col = 0; col < Math.ceil(width / MIN_PIXELS); col++) {
                var i = col * MIN_PIXELS;
                var j = row * MIN_PIXELS;
                var res = f(toCoords(i + MIN_PIXELS / 2, j + MIN_PIXELS / 2));
                var _a = hl2rgb(complexNumbers_3.Arg(res)[0], scaleMod(complexNumbers_3.Mod(res)[0])), r = _a[0], g = _a[1], b = _a[2];
                var baseInd = ind = width * 4 * j + 4 * i;
                for (j = 0; j < MIN_PIXELS; j++) {
                    ind = baseInd + width * 4 * j;
                    for (i = 0; i < MIN_PIXELS; i++) {
                        data[ind] = r;
                        data[ind + 1] = g;
                        data[ind + 2] = b;
                        data[ind + 3] = 255; // Always 255
                        ind += 4;
                    }
                }
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }
    /**
     * Draw image and update screen every few columns
     */
    function drawTimeout(f, i, toCoords, scaleMod, width, height, callback) {
        if (i >= width) {
            if (callback !== undefined) {
                callback();
            }
            return;
        }
        for (var k = 0; k < 5 && i < width; k++) {
            for (var j = 0; j < height; j++) {
                var ind = width * 4 * j + 4 * i;
                var res = f(toCoords(i, j));
                var _a = hl2rgb(complexNumbers_3.Arg(res)[0], scaleMod(complexNumbers_3.Mod(res)[0])), r = _a[0], g = _a[1], b = _a[2];
                data[ind] = r;
                data[ind + 1] = g;
                data[ind + 2] = b;
                data[ind + 3] = 255; // Always 255
            }
            i++;
        }
        ctx.putImageData(imageData, 0, 0);
        lastTimeoutID = setTimeout(function () { drawTimeout(f, i, toCoords, scaleMod, width, height, callback); });
    }
    /**
     * Returns a function that will turn a modulus in [0, Infinity) into a lightness in [0, 1]
     * based on the median & standard deviation of the input function
     */
    function getScaleMod(f, toCoords, width, height) {
        var mods = [];
        var samples = 6;
        for (var i = 0; i < width; i += floor(width / samples)) {
            for (var j = 0; j < height; j += floor(height / samples)) {
                var mod = complexNumbers_3.Mod(f(toCoords(i, j)))[0];
                if (!isNaN(mod) && mod !== Infinity && mod !== undefined) {
                    mods.push(mod);
                }
            }
        }
        if (mods.length === 0) {
            return (function (x) { return 0; }); // give up.
        }
        var avg = getMedian(mods);
        var max = Math.max.apply(Math, mods);
        var count = 0;
        var sd = Math.sqrt(mods.map(function (x) { return Math.pow((x - avg), 2); }).reduce((function (x, y) {
            if (y === Infinity) {
                return x;
            }
            else {
                count++;
                return x + y;
            }
        }), 0));
        if (count !== 0) {
            sd = sd / count;
        }
        // finally the actual function
        // https://www.desmos.com/calculator/ef7xcjgqtn
        return function (x) {
            if (isNaN(x) || x === Infinity) {
                // Color NaN 1 as well so it's not confused with zeros
                return 1;
            }
            if (x >= avg) {
                return 1 / (1 + Math.pow(Math.E, (-(x - avg) / (Math.pow(2, (max))))));
            }
            return Math.sqrt(Math.pow(avg, 2) - Math.pow((Math.pow((Math.max(x, 0) * avg), (1 / 2)) - avg), 2)) / (2 * avg);
        };
    }
    /**
     * Returns a function f such that f(i, j) = [x, y] where i, j are the pixel coordinates and x, y
     * are the real and imaginary parts
     */
    function getPixelToCoords(pixelWidth, pixelHeight) {
        var width = view.width;
        var height = view.height;
        return function (i, j) {
            return [
                view.center[0] - width / 2 + (i / pixelWidth) * width,
                view.center[1] + height / 2 - (j / pixelHeight) * height
            ];
        };
    }
    /**
     * Get the median value in the array
     */
    function getMedian(ary) {
        ary.sort(function (x, y) { return y - x; });
        if (ary.length % 2 === 0) {
            return (ary[floor(ary.length / 2)] + ary[floor(ary.length / 2) + 1]) / 2;
        }
        return ary[floor(ary.length / 2)];
    }
    /**
     * Turns a hue in [0, 2pi] and lightness in [0, 1] into an RGB color
     * Input is an HSL color with S = 1
     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
     */
    function hl2rgb(h, l) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (isNaN(h)) {
            h = 0;
        }
        h = realMod(h, 2 * Math.PI);
        var h1 = h / (Math.PI / 3);
        var c = 1 - Math.abs(2 * l - 1);
        var x = c * (1 - Math.abs(h1 % 2 - 1));
        var r, g, b;
        if (c === 0) {
            _a = [0, 0, 0], r = _a[0], g = _a[1], b = _a[2];
        }
        else if (h1 <= 1) {
            _b = [c, x, 0], r = _b[0], g = _b[1], b = _b[2];
        }
        else if (h1 <= 2) {
            _c = [x, c, 0], r = _c[0], g = _c[1], b = _c[2];
        }
        else if (h1 <= 3) {
            _d = [0, c, x], r = _d[0], g = _d[1], b = _d[2];
        }
        else if (h1 <= 4) {
            _e = [0, x, c], r = _e[0], g = _e[1], b = _e[2];
        }
        else if (h1 <= 5) {
            _f = [x, 0, c], r = _f[0], g = _f[1], b = _f[2];
        }
        else { // h1 <= 6
            _g = [c, 0, x], r = _g[0], g = _g[1], b = _g[2];
        }
        var m = l - c / 2;
        return [r, g, b].map(function (x) { return floor((x + m) * 255); });
    }
    /**
     * Draw from a hash in the url - this has the form #function&centerX,centerY&width,height
     */
    function drawFromHash(hash) {
        var _a = hash.slice(1).split('&'), f = _a[0], center = _a[1], wh = _a[2];
        if (center !== undefined && center !== '') {
            view.center = center.split(',').map(function (x) { return parseFloat(x); });
        }
        setCenter(view.center[0], view.center[1]);
        if (wh !== undefined && wh !== '') {
            var _b = wh.split(',').map(function (x) { return parseFloat(x); }), width = _b[0], height = _b[1];
            view.width = width;
            if (height !== undefined) {
                view.height = height;
                view.manuallySet = true;
                showOrHideHeight();
            }
            else {
                view.setHeight(width);
            }
            view.hasChanged = true;
        }
        input.value = f;
        view.lastFuncStr = f;
        var func;
        try {
            func = functify_2.strToFunc(f);
        }
        catch (e) {
            logError(e);
            return;
        }
        draw(func, true);
    }
    /**
     * Gets the real value of x modulo y (none of that 'remainder' stuff)
     */
    function realMod(x, y) {
        if (x < 0) {
            return Math.abs(y) + x % y;
        }
        else {
            return x % y;
        }
    }
});
//#endregion
