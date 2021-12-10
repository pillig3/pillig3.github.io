import {
	real,
	imag,
	Re,
	Im,
	Arg,
	Mod,
	add,
	subtract,
	mult,
	divide,
	exp,
	log,
	raise,
	sine,
	cosine,
	tangent,
	sinh,
	cosh,
	tanh,
	tetrate,
	iterate,
	ComplexNumber,
	sqrt,
} from "./complexNumbers";
import { Token, TokenType, tokenize } from "./tokenize";
export { Node, NodeChild, ComplexFunction, parse, functify, strToFunc, strToNum };
// Just for unit tests
export { splitArguments, getNextCloseParen };

//#region Functify

/**
 * Returns a function from an input string (or throws an error on invalid input)
 * @param str The input string
 */
function strToFunc(str: string): ComplexFunction {
	return functify(parse(tokenize(str)));
}

/**
 * Returns a complex number from an input string (or throws an error on invalid input)
 * @param str The input string
 */
function strToNum(str: string): ComplexNumber {
	const vars: (string | null)[] = [];
	try {
		const rslt = parse(tokenize(str), vars);
		return functify(rslt)();
	} catch (e) {
		throw "Input must be a complex number";
	}
}

/**
 * Turns a Node into a function on the complex numbers
 * TODO: Could be improved by not creating so many functions
 * @param n The node
 * @returns A complex function corresponding to the parse tree entered
 */
function functify(n: Node): ComplexFunction {
	if (n.children === undefined || n.children.length === 0) {
		return n.f;
	}
	// Turn each child into a function
	const results: ComplexFunction[] = [];
	for (let i = 0; i < n.children.length; i++) {
		results.push(childToFunc(n.children[i]));
	}
	// Then create a function that calls the Node's function on the result of calling each child function with the given arguments
	let func = function (...args: ComplexNumber[]): ComplexNumber {
		return n.f(...results.map((g) => g(...args)));
	};
	return func;
}

/**
 * Turns a child of a Node into a function on the complex numbers
 */
function childToFunc(child: NodeChild): ComplexFunction {
	if (child instanceof Node) {
		return functify(child);
	} else if (child instanceof Array) {
		// child is a ComplexNumber
		return () => child;
	} else if (typeof child === "object") {
		// child is a Variable
		const position = child.position;
		if (position === 1) {
			// It's the first variable
			return (x) => x;
		} else {
			// It's a subsequent variable, create a function that returns the position-th argument
			let str = "n1,";
			for (var i = 2; i < position; i++) {
				str += "n" + i + ",";
			}
			str += "n" + position;
			return new Function(str, "return n" + position + ";") as ComplexFunction;
		}
	} else if (typeof child === "number") {
		// Shouldn't happen but just in case
		console.log("This shouldn't happen - child in childToFunc is type number");
		return () => real(child);
	} else {
		// Otherwise, should be a function
		return child;
	}
}
//#endregion

const NamedFunctions: { [key: string]: ComplexFunction | typeof iterate } = {
	exp: exp,
	ln: log,
	log: log,
	cos: cosine,
	sin: sine,
	tan: tangent,
	sinh: sinh,
	cosh: cosh,
	tanh: tanh,
	tet: tetrate,
	sqrt: sqrt,
	Re: Re,
	Im: Im,
	Arg: Arg,
	Mod: Mod,
	iterate: iterate,
};

type ComplexFunction = (...args: ComplexNumber[]) => ComplexNumber;
type Variable = {
	name: string;
	position: number;
};
type NodeChild = Node | ComplexFunction | ComplexNumber | Variable;

/**
 * Class for a node in the parse tree
 */
class Node {
	f: ComplexFunction;
	children: NodeChild[];

	constructor(f: ComplexFunction, children: NodeChild[]) {
		this.f = f;
		this.children = children;
	}
}

/**
 * Takes an array of tokens and turns it into a tree structure, returning the root Node
 * @param tokens The array of tokens from tokenize()
 * @param vars Array with open space for the number of variables allowed
 * @returns The root Node of the parsed tree
 */
function parse(tokens: Token[], vars?: (string | null)[]): Node {
	if (vars === undefined) {
		vars = [null]; //Only allow one variable (for now)
	}
	let rslt = parseRec(tokens, vars);
	if (rslt instanceof Array) {
		return new Node((x) => x, [rslt]);
	} else if (!(rslt instanceof Node)) {
		return new Node((x) => x, [rslt]);
	} else {
		return rslt;
	}
}

/**
 * Recursive version of parse
 */
function parseRec(tokens: Token[], vars: (string | null)[]): NodeChild {
	if (tokens.length === 0) {
		throw "Syntax error (I don't know what to do with this input)";
	}
	const children: NodeChild[] = [];
	const tokenOne = tokens[0];

	// See if it's an arithmetic function
	let { funcName: funcName, index: index } = findLastFunc(tokens);
	if (funcName !== "") {
		if (funcName === "-" && index === 0) {
			// Actually a negative sign, not minus
			children.push(real(0));
		} else {
			children.push(parseRec(tokens.slice(0, index), vars));
		}
		if (funcName === "implicit_mult") {
			index -= 1;
		}
		children.push(parseRec(tokens.slice(index + 1), vars));
		return new Node(getFuncFromArithFuncString(funcName), children);
	}

	// See if it's a single thing
	if (tokens.length === 1) {
		const unit = turnTokenIntoChild(tokenOne, vars);
		if (typeof unit === "function") {
			throw tokenOne.text + " called without arguments";
		}
		return unit;
	}

	// See if it's a parenthesis
	if (tokenOne.text === "(" || tokenOne.text === "[") {
		const closePos = getNextCloseParen(tokens, 0, tokenOne.type);
		if (closePos === tokens.length - 1) {
			// Entirely inside parens
			return parseRec(tokens.slice(1, tokens.length - 1), vars);
		} else {
			// Otherwise, multiplication
			children.push(parseRec(tokens.slice(1, closePos), vars));
			children.push(parseRec(tokens.slice(closePos + 1), vars));
			return new Node(mult, children);
		}
	}

	// See if it's a named function
	if (isNamedFunction(tokenOne.text)) {
		const func = matchKnownFunc(tokenOne.text)!;

		if (tokens[1].text === "(") {
			// Function without square brackets
			if (funcHasSquareBrackets(tokenOne.text)) {
				throw tokenOne.text + " should be called with square brackets";
			}
			const endInd = getNextCloseParen(tokens, 1, TokenType.Parenthesis);
			const args = splitArguments(tokens.slice(2, endInd));
			if (args.length !== func.length) {
				throw "Wrong number of parameters passed to " + tokenOne.text;
			}
			if (endInd === tokens.length - 1) {
				// All tokens are arguments - here we know func is a ComplexFunction since it does not have square brackets
				return new Node(
					func as ComplexFunction,
					args.map((x) => parseRec(x, vars)),
				);
			} else {
				// There are tokens past the arguments - we're multiplying with the next part
				children.push(
					new Node(
						func as ComplexFunction,
						args.map((x) => parseRec(x, vars)),
					),
				);
				children.push(parseRec(tokens.slice(endInd + 1), vars));
				return new Node(mult, children);
			}
		} else if (tokens[1].text === "[") {
			// Function with square brackets
			if (!funcHasSquareBrackets(tokenOne.text)) {
				throw tokenOne.text + " should not be called with square brackets";
			}
			const endInd = getNextCloseParen(tokens, 1, TokenType.SquareBracket);
			const { complexFunc: complexFunc, numArgs: numArgs } = getComplexFuncFromFuncWithSquareBrackets(
				tokenOne.text,
				tokens.slice(2, endInd),
			);
			// Now we just need everything after the square brackets
			tokens = tokens.slice(endInd + 1);
			if (tokens.length === 0 || tokens[0].text !== "(") {
				throw "No parameters passed to " + tokenOne.text;
			}
			// Get the arguments
			const argsEndInd = getNextCloseParen(tokens, 0, TokenType.Parenthesis);
			const args = splitArguments(tokens.slice(1, argsEndInd));
			if (args.length < numArgs) {
				throw "Not enough parameters passed to " + tokenOne.text;
			}
			if (argsEndInd === tokens.length - 1) {
				// Everything is in the parentheses
				return new Node(
					complexFunc,
					args.map((x) => parseRec(x, vars)),
				);
			} else {
				// There are tokens past the arguments - we're multiplying with the next part
				children.push(
					new Node(
						complexFunc,
						args.map((x) => parseRec(x, vars)),
					),
				);
				children.push(parseRec(tokens.slice(argsEndInd + 1), vars));
				return new Node(mult, children);
			}
		} else {
			// Function called without parens/brackets (e.g. 'cos x' or 'cos sin x')
			// Only allow this with 1-argument functions
			if (func.length > 1) {
				throw "Missing parentheses for " + tokenOne.text;
			}
			return new Node(func as ComplexFunction, [parseRec(tokens.slice(1), vars)]);
		}
	}

	// Otherwise it's just implicit multiplication
	const unit = turnTokenIntoChild(tokenOne, vars);
	if (typeof unit === "function") {
		throw tokenOne.text + " called without arguments";
	}
	children.push(unit);
	children.push(parseRec(tokens.slice(1), vars));
	return new Node(mult, children);
}

/**
 * Interface for return value of findLastFunc
 */
interface FindLastFuncReturn {
	funcName: string;
	index: number;
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
function findLastFunc(tokens: Token[]): FindLastFuncReturn {
	let strF: string = "";
	let index = -1;
	for (var i = 0; i < tokens.length; i++) {
		let token = tokens[i];
		if (token.type !== TokenType.Function) {
			// Check for implicit multiplication
			if (i > 0) {
				let prevToken = tokens[i - 1];
				if (prevToken.type !== TokenType.Function) {
					// must have 2 tokens next to each other that are each either
					// a number, a variable, or a parenthesis
					if (
						!(["+", "-"].indexOf(strF) >= 0) && // +/- are lower priority
						([TokenType.Number, TokenType.String].indexOf(prevToken.type) >= 0 ||
							prevToken.text === ")") &&
						([TokenType.Number, TokenType.String].indexOf(token.type) >= 0 ||
							token.text === "(") &&
						!isNamedFunction(prevToken.text)
					) {
						strF = "implicit_mult";
						index = i;
					}
				}
			}
			if ([TokenType.Parenthesis, TokenType.SquareBracket].indexOf(token.type) >= 0) {
				if (["(", "["].indexOf(token.text) >= 0) {
					i = getNextCloseParen(tokens, i, token.type);
				} else {
					console.log(tokens);
					throw "Error: unbalanced parentheses";
				}
			}
			continue;
		}
		// always some function if one exists
		if (strF === "") {
			strF = token.text;
			index = i;
		} else if (["+", "-"].indexOf(token.text) >= 0) {
			// always lowest priority
			strF = token.text;
			index = i;
		} else if (["*", "/"].indexOf(token.text) >= 0 && !(["+", "-"].indexOf(strF) >= 0)) {
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
function isNamedFunction(strF: string): boolean {
	return NamedFunctions[strF] !== undefined;
}

/**
 * Matches the string to a known function
 */
function matchKnownFunc(strF: string): ComplexFunction | typeof iterate | undefined {
	return NamedFunctions[strF];
}

/**
 * Returns whether the function uses square brackets
 */
function funcHasSquareBrackets(strF: string): boolean {
	return strF === "iterate";
}

/**
 * Gets the position of the closing parenthesis matching the opening parenthesis at the given position
 * @param tokens The list of tokens
 * @param i The position of the opening parenthesis
 * @param parenType Either TokenType.Parenthesis or TokenType.SquareBracket to tell which type of paren we're looking for
 */
function getNextCloseParen(tokens: Token[], i: number, parenType: TokenType): number {
	let level = 1;
	let open: string;
	let close: string;
	if (parenType === TokenType.Parenthesis) {
		open = "(";
		close = ")";
	} else if (parenType === TokenType.SquareBracket) {
		open = "[";
		close = "]";
	} else {
		throw "getNextCloseParen called incorrectly. This should not have been possible!";
	}
	let j: number;
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
		throw "Error: unbalanced parentheses";
	}
	return j;
}

function getFuncFromArithFuncString(arithFuncString: string): ComplexFunction {
	switch (arithFuncString) {
		case "+":
			return add;
		case "-":
			return subtract;
		case "*":
			return mult;
		case "/":
			return divide;
		case "^":
			return raise;
		case "implicit_mult":
			return mult;
		default:
			throw "getFuncFromArithFuncString called incorrectly. This should not have been possible!";
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
function splitArguments(tokens: Token[]): Token[][] {
	let args = [],
		curArg = [];
	let level = 0;
	for (var i = 0; i < tokens.length; i++) {
		let curToken = tokens[i];
		switch (curToken.type) {
			case TokenType.Comma:
				if (level === 0) {
					args.push(curArg);
					curArg = [];
				} else {
					curArg.push(curToken);
				}
				break;
			case TokenType.Parenthesis:
			case TokenType.SquareBracket:
				if (curToken.text === "(" || curToken.text === "[") {
					level++;
				} else {
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

interface GetComplexFuncReturn {
	complexFunc: ComplexFunction;
	numArgs: number;
}

/**
 * Turn a functin with square brackets ('function[arg1, arg2, ...]') into a single function
 * @param strF The function as a string (only 'iterate' supported for now)
 * @param tokens The tokens from inside the square brackets
 * @returns The complex function and the number of arguments that should be passed to the complex function
 */
function getComplexFuncFromFuncWithSquareBrackets(strF: string, tokens: Token[]): GetComplexFuncReturn {
	const args = splitArguments(tokens);
	if (strF === "iterate") {
		// Function is iterate[g, n, varName]
		if (args.length !== 3) {
			throw "wrong number of square-bracket parameters for iterate";
		} else if (args[2].length !== 1 || args[2][0].type !== TokenType.String) {
			throw "third parameter for iterate should be a single variable";
		}
		const varName = args[2][0].text;
		// Allow [arbitrary large number] variables
		const newVarAry = createFilledArray(200, null);
		newVarAry[0] = varName;
		const g: ComplexFunction = functify(parse(args[0], newVarAry));
		const n: number = functify(parse(args[1], []))()[0];
		if (n <= 0) {
			throw "second parameter for iterate should be > 0";
		}
		return { complexFunc: iterate(g, Math.floor(n)), numArgs: newVarAry.indexOf(null) };
	} else {
		// Not supported
		throw "getComplexFuncFromFuncWithSquareBrackets called incorrectly. This should not have been possible!";
	}
}

/**
 * Create an array filled with a value
 * @param size The size for the array
 * @param value The value to fill the array
 */
function createFilledArray(size: number, value: any): any[] {
	const ary = [];
	for (let index = 0; index < size; index++) {
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
function turnTokenIntoChild(token: Token, vars: (string | null)[]): NodeChild {
	switch (token.type) {
		case TokenType.String:
			if (token.text === "i") {
				return imag(1);
			} else if (token.text === "e") {
				return real(Math.E);
			} else if (token.text === "pi") {
				return real(Math.PI);
			} else if (isNamedFunction(token.text)) {
				const fn = matchKnownFunc(token.text);
				if (token.text === "iterate") {
					throw "iterate cannot be used like this (I'm not sure what you entered, but it's wrong)";
				}
				return fn as ComplexFunction;
			} else {
				// Otherwise, it's a variable
				if (!canUseVar(token.text, vars)) {
					throw tooManyVarsErr(token.text, vars);
				}
				const ind = vars.indexOf(token.text);
				const variable: Variable = {
					name: token.text,
					position: ind + 1,
				};
				return variable;
			}
		case TokenType.Number:
			return real(parseFloat(token.text));
		case TokenType.Comma:
			throw "Rogue comma detected";
		default:
			throw (
				'Something went wrong; encountered "' +
				token.text +
				'" where I did not expect it. This should not have been possible!'
			);
	}
}

/**
 * Determines whether we can use a variable with this name given the variables seen so far. Also adds variable to the variable array if we can use it.
 * @param varName The name of the potential variable
 * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
 */
function canUseVar(varName: string, varAry: (string | null)[]) {
	if (varAry.indexOf(varName) >= 0) {
		// yep, we've used it before
		return true;
	}
	let nextSpot = varAry.indexOf(null);
	if (nextSpot < 0) {
		// nope, too many
		return false;
	} else {
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
function tooManyVarsErr(extraVar: string, vars: (string | null)[]) {
	let err = "Too many variables: ";
	if (vars.length === 0) {
		return err + extraVar;
	} else if (vars.length === 1) {
		err += vars[0] + " ";
	} else {
		for (let varName of vars) {
			if (varName !== null) {
				err += varName + ", ";
			}
		}
	}
	err += "and " + extraVar;
	return err;
}
