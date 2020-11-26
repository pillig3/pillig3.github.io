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
define("funcTrees", ["require", "exports", "complexNumbers"], function (require, exports, complexNumbers_1) {
    "use strict";
    exports.__esModule = true;
    var TokenType;
    (function (TokenType) {
        TokenType[TokenType["FUNCTION"] = 1] = "FUNCTION";
        TokenType[TokenType["PAREN"] = 2] = "PAREN";
        TokenType[TokenType["STR"] = 3] = "STR";
        TokenType[TokenType["NUM"] = 4] = "NUM";
        TokenType[TokenType["COMMA"] = 5] = "COMMA";
        TokenType[TokenType["SQUARE_PAREN"] = 6] = "SQUARE_PAREN";
    })(TokenType || (TokenType = {}));
    /**
     * Returns the function from the input string
     * @param str The input string
     */
    function strToFunc(str) {
        return functify(parse(tokenize(str)));
    }
    exports.strToFunc = strToFunc;
    /**
     * Takes a string and returns the number
     */
    function strToNum(str) {
        var vars = [];
        var rslt;
        try {
            rslt = parse2(tokenize(str), vars);
            if (rslt instanceof Array) {
                return rslt;
            }
            else if (typeof rslt === 'string') {
                throw 'Center should be a complex number';
            }
            return functify(rslt)();
        }
        catch (e) {
            throw 'Center should be a complex number';
        }
    }
    exports.strToNum = strToNum;
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
    // Turns a Node into a function
    // could be improved a lot
    function functify(n) {
        if (n.children === undefined || n.children.length === 0) {
            if (n.f !== undefined) {
                return n.f;
            }
            return childToFunc(n);
        }
        var results = [];
        for (var i = 0; i < n.children.length; i++) {
            results.push(childToFunc(n.children[i]));
        }
        var func = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return n.f.apply(n, results.map(function (g) { return g.apply(void 0, args); }));
        };
        return func;
    }
    function childToFunc(child) {
        if (child instanceof Node) {
            return functify(child);
        }
        else if (typeof child === 'string') {
            return function (x) { return x; };
        }
        else if (child instanceof Array) {
            // needs to come before object
            return function () { return child; };
        }
        else if (typeof child === 'object') {
            // Variable with specified position
            var pos = child.pos;
            if (pos === 1) {
                return function (x) { return x; };
            }
            else {
                var str = 'n1,';
                for (var i = 2; i < pos; i++) {
                    str += 'n' + i + ',';
                }
                str += 'n' + pos;
                return new Function(str, 'return n' + pos + ';');
            }
        }
        else if (typeof child === 'number') {
            return function () { return complexNumbers_1.real(child); };
        }
        else if (typeof child === 'function') {
            return child;
        }
        return undefined; // should never happen
    }
    //=========================//
    //         Tokenize        //
    //     string -> Tokens    //
    //=========================//
    //#region Tokenize functions
    /**
     * Represents a string buffer that gets one character at a time
     */
    var StrBuffer = /** @class */ (function () {
        function StrBuffer(str) {
            this.ind = 0;
            this.ary = str.split('');
        }
        /**
         * Gets the next character in the string
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
    /**
     * Tokenizes a string and returns a list of the tokens
     * @param str The input string
     * @returns The list of tokens from the string
     */
    function tokenize(str) {
        var sb = new StrBuffer(str);
        var tokens = [];
        var letters = [];
        for (var i = 65; i <= 90; i++)
            letters.push(String.fromCharCode(i));
        for (var i = 97; i <= 122; i++)
            letters.push(String.fromCharCode(i));
        var digits = '0123456789'.split('');
        var alphanum = letters.concat(digits);
        var arithFuncs = '+-*/^'.split('');
        for (var c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
            var token = c;
            var type = 0;
            if (arithFuncs.indexOf(c) >= 0) {
                type = TokenType.FUNCTION;
            }
            else if (['(', ')'].indexOf(c) >= 0) {
                type = TokenType.PAREN;
            }
            else if (['[', ']'].indexOf(c) >= 0) {
                type = TokenType.SQUARE_PAREN;
            }
            else if (c === ',') {
                type = TokenType.COMMA;
            }
            else if (letters.indexOf(c) >= 0) {
                // var, i, pi, e, sin, exp, ln, etc...
                while (alphanum.indexOf(c = sb.nextChar()) >= 0) {
                    token += c;
                }
                sb.backup();
                type = TokenType.STR;
            }
            else if (digits.indexOf(c) >= 0 || c === '.') {
                // number
                var hasDot = (c === '.');
                while (digits.indexOf(c = sb.nextChar()) >= 0 || c === '.') {
                    if (c === '.') {
                        if (hasDot) {
                            throw ('Too many dots in a number: ' + token + '.');
                        }
                        hasDot = true;
                    }
                    token += c;
                }
                sb.backup();
                type = TokenType.NUM;
            }
            else if (c === ' ') {
                continue;
            }
            else {
                throw ('Unrecognized character: ' + c);
            }
            tokens.push(new Token(token, type));
        }
        return tokens;
    }
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
        var rslt = parse2(tokens, vars);
        if (rslt instanceof Array) {
            return new Node(function (x) { return x; }, rslt);
        }
        else if (typeof rslt === 'string') {
            return new Node(function (x) { return x; }, [rslt]);
        }
        return rslt;
    }
    /**
     * Recursive version of parse
     * @param tokens Array of tokens from tokenize()
     * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
     * @returns The root Node of the parsed tree or the single child
     */
    function parse2(tokens, vars) {
        if (tokens.length === 0) {
            throw 'Syntax error (I don\'t know what to do with this input)';
        }
        var children = [];
        var _a = findLastFunc(tokens), func = _a[0], index = _a[1];
        if (func !== undefined) {
            if (func === complexNumbers_1.subtract && index === 0) {
                // Actually a negative sign
                children.push(complexNumbers_1.real(0));
            }
            else {
                children.push(parse2(tokens.slice(0, index), vars));
            }
            if (func === implicit_mult) {
                func = complexNumbers_1.mult;
                index -= 1;
            }
            children.push(parse2(tokens.slice(index + 1), vars));
            return new Node(func, children);
        }
        var token1 = tokens[0];
        if (tokens.length === 1) {
            var unit = unitize(token1, vars);
            if (typeof unit === 'function') {
                throw token1.text + ' called without arguments';
            }
            return unit;
        }
        if (['(', '['].indexOf(token1.text) >= 0) {
            var closePos = getNextCloseParen(tokens, 0, token1.type);
            // entirely inside ()?
            if (closePos === tokens.length - 1) {
                return parse2(tokens.slice(1, tokens.length - 1), vars);
            }
            // multiplication
            func = complexNumbers_1.mult;
            children.push(parse2(tokens.slice(1, closePos), vars));
            children.push(parse2(tokens.slice(closePos + 1), vars));
            return new Node(func, children);
        }
        // Named function?
        if ((func = matchKnownFunc(token1.text)) !== null) {
            if (tokens[1].text === '(') {
                if (funcHasSquareParens(token1.text)) {
                    throw token1.text + ' should be called with square braces';
                }
                var endInd = getNextCloseParen(tokens, 1, TokenType.PAREN);
                var args = splitArguments(tokens.slice(2, endInd));
                if (args.length !== func.length) {
                    throw 'Wrong number of parameters passed to ' + token1.text;
                }
                if (endInd === tokens.length - 1) {
                    return new Node(func, args.map(function (x) { return parse2(x, vars); }));
                }
                // otherwise we're multiplying with the next part
                children.push(new Node(func, args.map(function (x) { return parse2(x, vars); })));
                children.push(parse2(tokens.slice(endInd + 1), vars));
                return new Node(complexNumbers_1.mult, children);
            }
            else if (tokens[1].text === '[') {
                if (!funcHasSquareParens(token1.text)) {
                    throw token1.text + ' should not be called with square braces';
                }
                var endInd = getNextCloseParen(tokens, 1, TokenType.SQUARE_PAREN);
                var output = { length: 0 };
                var realFunc = getRealFuncFromSquareParens(func, tokens.slice(2, endInd), output);
                tokens = tokens.slice(endInd + 1); // Everything after the []
                if (tokens.length === 0 || tokens[0].text !== '(') {
                    throw 'No parameters passed to ' + token1.text;
                }
                // Get arguments
                endInd = getNextCloseParen(tokens, 0, TokenType.PAREN);
                var args = splitArguments(tokens.slice(1, endInd));
                if (args.length < output.length) {
                    throw 'Not enough parameters passed to ' + token1.text;
                }
                if (endInd === tokens.length - 1) {
                    return new Node(realFunc, args.map(function (x) { return parse2(x, vars); }));
                }
                // otherwise we're multiplying with the next part
                children.push(new Node(realFunc, args.map(function (x) { return parse2(x, vars); })));
                children.push(parse2(tokens.slice(endInd + 1), vars));
                return new Node(complexNumbers_1.mult, children);
            }
            // Otherwise no parens (e.g.  'cos x', or even 'cos sin x')
            // Only allow this with 1-arg functions
            if (func.length > 1) {
                throw 'Missing parentheses';
            }
            return new Node(func, parse2(tokens.slice(1), vars));
        }
        // Then it's just implicit multiplication
        children.push(unitize(token1, vars));
        children.push(parse2(tokens.slice(1), vars));
        return new Node(complexNumbers_1.mult, children);
    }
    /**
     * Turns a token into a node, complex number, variable, or function
     * @param token The token
     * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
     */
    function unitize(token, vars) {
        var fn;
        switch (token.type) {
            case TokenType.STR:
                if (token.text === 'i') {
                    return complexNumbers_1.imag(1);
                }
                else if (token.text === 'e') {
                    return complexNumbers_1.real(Math.E);
                }
                else if (token.text === 'pi') {
                    return complexNumbers_1.real(Math.PI);
                }
                else if ((fn = matchKnownFunc(token.text)) !== null) {
                    return fn;
                }
                // Otherwise, it's a variable
                if (!canUseVar(token.text, vars)) {
                    throw tooManyVarsErr(token.text, vars);
                }
                var ind = vars.indexOf(token.text);
                return { text: token.text, pos: ind + 1 };
            case TokenType.NUM:
                return complexNumbers_1.real(parseFloat(token.text));
            case TokenType.COMMA:
                throw 'Rogue comma detected';
            case TokenType.FUNCTION:
            case TokenType.PAREN:
            default:
                console.log(token);
                throw 'Something went wrong (this should never happen)';
        }
    }
    /**
     * Determines whether we can use a variable with this name given the variables seen so far
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
    /**
     * Gets the position of the closing parenthesis matching the opening parenthesis at the given position
     * @param tokens The list of tokens
     * @param i The position of the opening parenthesis
     * @param parenType Either TokenType.PAREN or TokenType.SQUARE_PAREN to tell which type of paren we're looking for
     */
    function getNextCloseParen(tokens, i, parenType) {
        var level = 1;
        var open;
        var close;
        if (parenType === TokenType.PAREN) {
            open = '(';
            close = ')';
        }
        else if (parenType === TokenType.SQUARE_PAREN) {
            open = '[';
            close = ']';
        }
        else {
            throw 'getNextCloseParen called incorrectly. Shame on the developer';
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
    //#endregion
    //===================//
    //  Tools for using  //
    //     functions     //
    //===================//
    //#region Function helpers
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
                case TokenType.COMMA:
                    if (level === 0) {
                        args.push(curArg);
                        curArg = [];
                    }
                    else {
                        curArg.push(curToken);
                    }
                    break;
                case TokenType.PAREN:
                case TokenType.SQUARE_PAREN:
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
     * Implicit multiplication function - wrapper for multiplication
     * @param args The complex numbers to multiply
     */
    function implicit_mult() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length > 1) {
            return complexNumbers_1.mult(args[0], args[1]);
        }
        return [0, 0];
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
        var strF, index, func;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (token.type !== TokenType.FUNCTION) {
                // Check for implicit multiplication
                if (i > 0) {
                    var prevToken = tokens[i - 1];
                    if (prevToken.type !== TokenType.FUNCTION) {
                        // must have 2 tokens next to each other that are each either
                        // a number, a variable, or a parenthesis
                        if (!(['+', '-'].indexOf(strF) >= 0) // +/- are lower priority
                            && ([TokenType.NUM, TokenType.STR].indexOf(prevToken.type) >= 0 || prevToken.text === ')')
                            && ([TokenType.NUM, TokenType.STR].indexOf(token.type) >= 0 || token.text === '(')
                            && matchKnownFunc(prevToken.text) === null) {
                            strF = 'implicit_mult';
                            index = i;
                        }
                    }
                }
                if ([TokenType.PAREN, TokenType.SQUARE_PAREN].indexOf(token.type) >= 0) {
                    if (['(', '['].indexOf(token.text) >= 0) {
                        i = getNextCloseParen(tokens, i, token.type);
                    }
                    else {
                        throw 'Error: unbalanced paremtheses';
                    }
                }
                continue;
            }
            // always some function if one exists
            if (strF === undefined) {
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
            // No case for ^ because it's set if(f) strF is undefined so far
        }
        switch (strF) {
            case '^':
                func = complexNumbers_1.raise;
                break;
            case '*':
                func = complexNumbers_1.mult;
                break;
            case '/':
                func = complexNumbers_1.divide;
                break;
            case '+':
                func = complexNumbers_1.add;
                break;
            case '-':
                func = complexNumbers_1.subtract;
                break;
            case 'implicit_mult':
                func = implicit_mult;
            default:
                break;
        }
        return [func, index];
    }
    var namedFuncStrings = [
        'exp', 'ln', 'log', 'cos', 'sin', 'tan', 'sinh', 'cosh', 'tet',
        'sqrt',
        'Re', 'Im', 'Arg', 'Mod', 'iterate'
    ];
    var namedFuncs = [
        complexNumbers_1.exp, complexNumbers_1.log, complexNumbers_1.log, complexNumbers_1.cosine, complexNumbers_1.sine, complexNumbers_1.tangent, complexNumbers_1.sinh, complexNumbers_1.cosh, complexNumbers_1.tetrate,
        function (x) { return complexNumbers_1.raise(x, complexNumbers_1.real(0.5)); },
        complexNumbers_1.Re, complexNumbers_1.Im, complexNumbers_1.Arg, complexNumbers_1.Mod, complexNumbers_1.iterate
    ];
    /**
     * Match a string to a known function
     */
    function matchKnownFunc(strF) {
        var ind = namedFuncStrings.indexOf(strF);
        if (ind >= 0) {
            return namedFuncs[ind];
        }
        return null;
    }
    /**
     * Return whether the function requires square parentheses
     * e.g. 'iterate[func, n, var](z)'
     */
    function funcHasSquareParens(strF) {
        if (strF === 'iterate') {
            return true;
        }
        return false;
    }
    /**
     * Turn 'iterate[func, n, var]' into a single function
     * @param tokens The tokens from inside the square brackets
     * @param output output.length is set to the number of variables within the square brackets
     * @returns The iterated function
     */
    function getRealFuncFromSquareParens(f, tokens, output) {
        var args = splitArguments(tokens);
        if (f === complexNumbers_1.iterate) {
            if (args.length !== 3) {
                throw 'wrong number of parameters for iterate';
            }
            else if (args[2].length !== 1 || args[2][0].type !== TokenType.STR) {
                throw 'third parameter for iterate should be a single variable';
            }
            var varName = args[2][0].text;
            // Allow hella variables
            var newVarAry = createFilledArray(Math.pow(2, 10), null);
            newVarAry[0] = varName;
            var g = functify(parse2(args[0], newVarAry));
            var n = functify(parse2(args[1], []))();
            if (n instanceof Array) {
                n = n[0];
            }
            else {
                throw 'second parameter for iterate should be an integer';
            }
            n = Math.floor(n);
            if (n <= 0) {
                throw 'second parameter for iterate should be >0';
            }
            output.length = newVarAry.indexOf(null);
            return complexNumbers_1.iterate(g, n);
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
});
//#endregion
define("complex", ["require", "exports", "complexNumbers", "funcTrees"], function (require, exports, complexNumbers_2, funcTrees_1) {
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
    //=========================//
    //         Buttons         //
    //=========================//
    // Toggle showing the rest of the buttons
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
    // (Un)Fix aspect ratio button
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
    function setCenter(x, y) {
        view.center = [x, y];
        centerInput.value = x + '+' + y + 'i';
        centerInput.lastValue = centerInput.value;
    }
    // Origin button
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
    // Copy to clipboard button
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
    // Change resolution button
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
    //=========================//
    //       Drag n Drop       //
    //=========================//
    var dragStart;
    canvas.onmousedown = function (e) {
        if (e.buttons === 2) { // right-click
            return;
        }
        canvas.onmousemove = dragCanvas;
        canvas.addEventListener('keydown', abortIfEsc);
        dragStart = [e.pageX, e.pageY];
    };
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
    //========================//
    //          ZOOM          //
    //========================//
    // Zoom in to half the current window size
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
    // Zoom out to twice the current window size
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
    //========================//
    //       keypresses       //
    //========================//
    // when focus is on the canvas
    function onCanvasKey(e) {
        if (e.isComposing || e.keyCode === 229) {
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
    // not literally the 'control' key but like the keys
    // that control the meaning of other keypresses
    function controlKeyHeld(e) {
        return e.ctrlKey || e.metaKey || e.altKey;
    }
    // sets focus from the containing div to the <textarea>
    function onInputDivClick(e) {
        if (e.target.children.length > 0) {
            e.target.children[0].focus();
        }
    }
    // When button pressed in one of the input boxes
    function onInputKey(e) {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }
        var elem = e.target.id;
        if (inputBoxes.indexOf(elem) >= 0) {
            if (e.code === 'Enter') {
                e.preventDefault();
                drawOnEnter();
            }
            return;
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
    // When a button is clicked
    function onButtonClick(e) {
        var elem = e.target.id;
        if (['horiz', 'vert'].indexOf(e.target.classList[0]) >= 0) {
            elem = e.target.parentNode.id;
        }
        doFuncForElem(elem);
    }
    // Returns the function to execute when
    // the doc element is clicked/pushed/etc.
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
    // Draw what they entered
    function drawOnEnter() {
        var f;
        var str = input.value;
        var width = widthInput.value;
        var height = heightInput.value;
        var center = centerInput.value;
        if (center !== centerInput.lastValue) {
            try {
                view.center = funcTrees_1.strToNum(center);
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
            f = funcTrees_1.strToFunc(str);
        }
        catch (e) {
            logError(e);
            return;
        }
        draw(f, view.lastFuncStr !== str);
        view.lastFuncStr = str;
    }
    // Set height or width
    // Returns true if property was changed
    function setViewHW(prop, val) {
        if (val === '') {
            return 0;
        }
        var newVal = parseFloat(val);
        if (typeof newVal !== 'number' || newVal <= 0 || isNaN(newVal) || newVal === Infinity) {
            logError(prop[0].toUpperCase() + prop.slice(1) + ' should be a positive number');
        }
        else if (newVal !== view[prop]) {
            view[prop] = newVal;
            view.hasChanged = true;
            return 1;
        }
    }
    // Pop up the error message
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
    // Draw a low resolution version of the image while full image loads
    function drawLowRes(f, toCoords, scaleMod, width, height) {
        var ind;
        for (var row = 0; row < Math.ceil(height / MIN_PIXELS); row++) {
            for (var col = 0; col < Math.ceil(width / MIN_PIXELS); col++) {
                var i = col * MIN_PIXELS;
                var j = row * MIN_PIXELS;
                var res = f(toCoords(i + MIN_PIXELS / 2, j + MIN_PIXELS / 2));
                var _a = hl2rgb(complexNumbers_2.Arg(res)[0], scaleMod(complexNumbers_2.Mod(res)[0])), r = _a[0], g = _a[1], b = _a[2];
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
    //Draw image & update screen every handful of columns
    function drawTimeout(f, i, toCoords, scaleMod, width, height, callback) {
        var _a;
        if (i >= width) {
            if (callback !== undefined) {
                callback();
            }
            return;
        }
        var ind, res, r, g, b;
        for (var k = 0; k < 5 && i < width; k++) {
            for (var j = 0; j < height; j++) {
                ind = width * 4 * j + 4 * i;
                res = f(toCoords(i, j));
                _a = hl2rgb(complexNumbers_2.Arg(res)[0], scaleMod(complexNumbers_2.Mod(res)[0])), r = _a[0], g = _a[1], b = _a[2];
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
    // Returns a function to turn modulus\in[0,\infty) into Lightness\in[0,1]
    // based on the median & standard deviation
    function getScaleMod(f, toCoords, width, height) {
        var mods = [];
        var samples = 6;
        var mod;
        for (var i = 0; i < width; i += floor(width / samples)) {
            for (var j = 0; j < height; j += floor(height / samples)) {
                mod = complexNumbers_2.Mod(f(toCoords(i, j)))[0];
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
    // Returns f such that f(i, j) = [x, y]
    // where i,j are the pixel coordinates
    // and x, y are real and imaginary parts
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
    // get median
    function getMedian(ary) {
        ary.sort(function (x, y) { return y - x; });
        if (ary.length % 2 === 0) {
            return (ary[floor(ary.length / 2)] + ary[floor(ary.length / 2) + 1]) / 2;
        }
        return ary[floor(ary.length / 2)];
    }
    // turns Hue \in [0,2\pi] and Lightness \in [0,1] into RGB color
    // Input is an HSL color with S = 1
    // Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
    // Returns [r, g, b] \in {0, 1, ..., 255}^3
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
    // For when the url has a hash -
    // #function&centerX,centerY&width,height
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
        try {
            f = funcTrees_1.strToFunc(f);
        }
        catch (e) {
            logError(e);
            return;
        }
        draw(f, true);
    }
    // lol
    function realMod(x, y) {
        if (x < 0) {
            return Math.abs(y) + x % y;
        }
        else {
            return x % y;
        }
    }
});
