import {
  real, imag, Re, Im, Arg, Mod, add, subtract, mult, divide, exp, log, raise,
  sine, cosine, tangent, sinh, cosh, tetrate, iterate, ComplexNumber
} from './complexNumbers';
export { strToFunc, strToNum };

enum TokenType {
  FUNCTION = 1,
  PAREN = 2,
  STR = 3,
  NUM = 4,
  COMMA = 5,
  SQUARE_PAREN = 6,
}

/**
 * Returns the function from the input string
 * @param str The input string
 */
function strToFunc(str: string) {
  return functify(parse(tokenize(str)));
}

/**
 * Takes a string and returns the number
 */
function strToNum(str: string): any {
  let vars = [];
  let rslt;
  try {
    rslt = parse2(tokenize(str), vars);
    if (rslt instanceof Array) {
      return rslt;
    } else if (typeof rslt === 'string') {
      throw 'Center should be a complex number';
    }
    return functify(rslt)();
  } catch (e) {
    throw 'Center should be a complex number';
  }
}

/**
 * Class for a node in the parse tree
 */
class Node {
  f: Function | ((...args: any) => any);
  children: any[];

  constructor(f: Function | ((...args: any) => any), children: any[]) {
    this.f = f;
    this.children = children;
  }
}

//===========================//
//          Evaluate         //
//      Node -> Function     //
//===========================//

type ComplexFunction = (...args: ComplexNumber[]) => ComplexNumber;

// Turns a Node into a function
// could be improved a lot
function functify(n: Node): Function | ((...args: any) => any) {
  if (n.children === undefined || n.children.length === 0) {
    if (n.f !== undefined) {
      return n.f;
    }
    return childToFunc(n);
  }
  let results = [];
  for (let i = 0; i < n.children.length; i++) {
    results.push(childToFunc(n.children[i]));
  }
  let func = function (...args) {
    return n.f(...results.map((g) => g(...args)));
  };
  return func;
}

function childToFunc(child: NodeChild): Function | ((...args: any) => any) {
  if (child instanceof Node) {
    return functify(child);
  } else if (typeof child === 'string') {
    return x => x;
  } else if (child instanceof Array) {
    // needs to come before object
    return () => child;
  } else if (typeof child === 'object') {
    // Variable with specified position
    let pos = child.pos;
    if (pos === 1) {
      return x => x;
    } else {
      let str = 'n1,';
      for (var i = 2; i < pos; i++) {
        str += 'n' + i + ',';
      }
      str += 'n' + pos;
      return new Function(str, 'return n' + pos + ';');
    }
  } else if (typeof child === 'number') {
    return () => real(child);
  } else if (typeof child === 'function') {
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
class StrBuffer {
  // Current position
  ind: number;
  // Array of characters
  ary: string[];

  constructor(str: string) {
    this.ind = 0;
    this.ary = str.split('');
  }

  /**
   * Gets the next character in the string
   */
  nextChar(): string {
    return this.ary[this.ind++];
  }

  /**
   * Backs up the current position by one
   */
  backup(): void {
    this.ind -= 1;
  }
}

/**
 * Represents one token from the input text
 */
class Token {
  text: string;
  type: TokenType;

  constructor(text: string, type: TokenType) {
    this.text = text;
    this.type = type;
  }
}

/**
 * Tokenizes a string and returns a list of the tokens
 * @param str The input string
 * @returns The list of tokens from the string
 */
function tokenize(str: string): Token[] {
  let sb = new StrBuffer(str);
  let tokens: Token[] = [];
  let letters: string[] = [];
  for (var i = 65; i <= 90; i++) letters.push(String.fromCharCode(i));
  for (var i = 97; i <= 122; i++) letters.push(String.fromCharCode(i));
  let digits = '0123456789'.split('');
  let alphanum = letters.concat(digits);
  let arithFuncs = '+-*/^'.split('');

  for (let c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
    let token = c;
    let type = 0;
    if (arithFuncs.indexOf(c) >= 0) {
      type = TokenType.FUNCTION;
    } else if (['(', ')'].indexOf(c) >= 0) {
      type = TokenType.PAREN;
    } else if (['[', ']'].indexOf(c) >= 0) {
      type = TokenType.SQUARE_PAREN;
    } else if (c === ',') {
      type = TokenType.COMMA;
    } else if (letters.indexOf(c) >= 0) {
      // var, i, pi, e, sin, exp, ln, etc...
      while (alphanum.indexOf(c = sb.nextChar()) >= 0) {
        token += c;
      }
      sb.backup();
      type = TokenType.STR;
    } else if (digits.indexOf(c) >= 0 || c === '.') {
      // number
      let hasDot = (c === '.');
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
    } else if (c === ' ') {
      continue;
    } else {
      throw ('Unrecognized character: ' + c);
    }
    tokens.push(new Token(token, type));
  }
  return tokens;
}

//#endregion

//==========================//
//           Parse          //
//      Tokens -> Node      //
//==========================//
//#region Parse functions

// Contains information about a variable
interface Variable {
  // Variable name
  text: string;
  // Position where it occurs in the string
  pos: number;
}

// Type for a child of a Node
type NodeChild = Node | ComplexNumber | Variable | ComplexFunction | ((...args: any[]) => any);

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
  let rslt = parse2(tokens, vars);
  if (rslt instanceof Array) {
    return new Node((x) => x, rslt);
  } else if (typeof rslt === 'string') {
    return new Node((x) => x, [rslt]);
  }
  return rslt;
}

/**
 * Recursive version of parse
 * @param tokens Array of tokens from tokenize()
 * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
 * @returns The root Node of the parsed tree or the single child
 */
function parse2(tokens: Token[], vars: (string | null)[]) {
  if (tokens.length === 0) {
    throw 'Syntax error (I don\'t know what to do with this input)';
  }
  let children = [];
  let [func, index] = findLastFunc(tokens);
  if (func !== undefined) {
    if (func === subtract && index === 0) {
      // Actually a negative sign
      children.push(real(0));
    } else {
      children.push(parse2(tokens.slice(0, index), vars));
    }
    if (func === implicit_mult) {
      func = mult;
      index -= 1;
    }
    children.push(parse2(tokens.slice(index + 1), vars));
    return new Node(func, children);
  }

  let token1 = tokens[0];
  if (tokens.length === 1) {
    let unit = unitize(token1, vars);
    if (typeof unit === 'function') {
      throw token1.text + ' called without arguments';
    }
    return unit;
  }

  if (['(', '['].indexOf(token1.text) >= 0) {
    let closePos = getNextCloseParen(tokens, 0, token1.type);
    // entirely inside ()?
    if (closePos === tokens.length - 1) {
      return parse2(tokens.slice(1, tokens.length - 1), vars);
    }
    // multiplication
    func = mult;
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
      let endInd = getNextCloseParen(tokens, 1, TokenType.PAREN);
      let args = splitArguments(tokens.slice(2, endInd));
      if (args.length !== func.length) {
        throw 'Wrong number of parameters passed to ' + token1.text;
      }
      if (endInd === tokens.length - 1) {
        return new Node(func, args.map((x) => parse2(x, vars)));
      }
      // otherwise we're multiplying with the next part
      children.push(new Node(func, args.map((x) => parse2(x, vars))));
      children.push(parse2(tokens.slice(endInd + 1), vars));
      return new Node(mult, children);
    } else if (tokens[1].text === '[') {
      if (!funcHasSquareParens(token1.text)) {
        throw token1.text + ' should not be called with square braces';
      }
      let endInd = getNextCloseParen(tokens, 1, TokenType.SQUARE_PAREN);
      let output = { length: 0 };
      let realFunc = getRealFuncFromSquareParens(func, tokens.slice(2, endInd), output);
      tokens = tokens.slice(endInd + 1);     // Everything after the []
      if (tokens.length === 0 || tokens[0].text !== '(') {
        throw 'No parameters passed to ' + token1.text;
      }
      // Get arguments
      endInd = getNextCloseParen(tokens, 0, TokenType.PAREN);
      let args = splitArguments(tokens.slice(1, endInd));
      if (args.length < output.length) {
        throw 'Not enough parameters passed to ' + token1.text;
      }
      if (endInd === tokens.length - 1) {
        return new Node(realFunc, args.map((x) => parse2(x, vars)));
      }
      // otherwise we're multiplying with the next part
      children.push(new Node(realFunc, args.map((x) => parse2(x, vars))));
      children.push(parse2(tokens.slice(endInd + 1), vars));
      return new Node(mult, children);

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
  return new Node(mult, children);
}

/**
 * Turns a token into a node, complex number, variable, or function
 * @param token The token
 * @param vars Array with the variables we've encountered so far and open space for the number of remaining variables allowed
 */
function unitize(token: Token, vars: (string | null)[]): NodeChild {
  let fn: (...args: any[]) => any;
  switch (token.type) {
    case TokenType.STR:
      if (token.text === 'i') {
        return imag(1);
      } else if (token.text === 'e') {
        return real(Math.E);
      } else if (token.text === 'pi') {
        return real(Math.PI);
      } else if ((fn = matchKnownFunc(token.text)) !== null) {
        return fn;
      }
      // Otherwise, it's a variable
      if (!canUseVar(token.text, vars)) {
        throw tooManyVarsErr(token.text, vars);
      }
      let ind = vars.indexOf(token.text);
      return { text: token.text, pos: ind + 1 };
    case TokenType.NUM:
      return real(parseFloat(token.text));
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
  let err = 'Too many variables: ';
  if (vars.length === 0) {
    return err + extraVar;
  } else if (vars.length === 1) {
    err += vars[0] + ' ';
  } else {
    for (let varName of vars) {
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
function getNextCloseParen(tokens: Token[], i: number, parenType: TokenType) {
  let level = 1;
  let open: string;
  let close: string;
  if (parenType === TokenType.PAREN) {
    open = '(';
    close = ')';
  } else if (parenType === TokenType.SQUARE_PAREN) {
    open = '[';
    close = ']';
  } else {
    throw 'getNextCloseParen called incorrectly. Shame on the developer';
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
function splitArguments(tokens: Token[]): Token[][] {
  let args = [], curArg = [];
  let level = 0;
  for (var i = 0; i < tokens.length; i++) {
    let curToken = tokens[i];
    switch (curToken.type) {
      case TokenType.COMMA:
        if (level === 0) {
          args.push(curArg);
          curArg = [];
        } else {
          curArg.push(curToken);
        }
        break;
      case TokenType.PAREN:
      case TokenType.SQUARE_PAREN:
        if (curToken.text === '(' || curToken.text === '[') {
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

/**
 * Implicit multiplication function - wrapper for multiplication
 * @param args The complex numbers to multiply
 */
function implicit_mult(...args: ComplexNumber[]): ComplexNumber {
  if (args.length > 1) {
    return mult(args[0], args[1]);
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
function findLastFunc(tokens: Token[]): [(...args: any[]) => any, number] {
  let strF, index, func;
  for (var i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token.type !== TokenType.FUNCTION) {
      // Check for implicit multiplication
      if (i > 0) {
        let prevToken = tokens[i - 1];
        if (prevToken.type !== TokenType.FUNCTION) {
          // must have 2 tokens next to each other that are each either
          // a number, a variable, or a parenthesis
          if (!(['+', '-'].indexOf(strF) >= 0)  // +/- are lower priority
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
        } else {
          throw 'Error: unbalanced paremtheses';
        }
      }
      continue;
    }
    // always some function if one exists
    if (strF === undefined) {
      strF = token.text;
      index = i;
    } else if (['+', '-'].indexOf(token.text) >= 0) {
      // always lowest priority
      strF = token.text;
      index = i;
    } else if (['*', '/'].indexOf(token.text) >= 0 && !(['+', '-'].indexOf(strF) >= 0)) {
      // only lowest priority if no add or subtract
      strF = token.text;
      index = i;
    }
    // No case for ^ because it's set if(f) strF is undefined so far
  }
  switch (strF) {
    case '^':
      func = raise;
      break;
    case '*':
      func = mult;
      break;
    case '/':
      func = divide;
      break;
    case '+':
      func = add;
      break;
    case '-':
      func = subtract;
      break;
    case 'implicit_mult':
      func = implicit_mult;
    default:
      break;
  }
  return [func, index];
}

const namedFuncStrings = [
  'exp', 'ln', 'log', 'cos', 'sin', 'tan', 'sinh', 'cosh', 'tet',
  'sqrt',
  'Re', 'Im', 'Arg', 'Mod', 'iterate'
];
const namedFuncs = [
  exp, log, log, cosine, sine, tangent, sinh, cosh, tetrate,
  (x: ComplexNumber) => raise(x, real(0.5)),
  Re, Im, Arg, Mod, iterate
];

/**
 * Match a string to a known function
 */
function matchKnownFunc(strF: string): (...args: any[]) => any {
  let ind = namedFuncStrings.indexOf(strF);
  if (ind >= 0) {
    return namedFuncs[ind];
  }
  return null;
}

/**
 * Return whether the function requires square parentheses
 * e.g. 'iterate[func, n, var](z)'
 */
function funcHasSquareParens(strF: string): boolean {
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
function getRealFuncFromSquareParens(f: (...args: any) => any, tokens: Token[], output: { length: number; }): Function | ((...args: any) => any) {
  let args = splitArguments(tokens);
  if (f === iterate) {
    if (args.length !== 3) {
      throw 'wrong number of parameters for iterate';
    } else if (args[2].length !== 1 || args[2][0].type !== TokenType.STR) {
      throw 'third parameter for iterate should be a single variable';
    }
    let varName = args[2][0].text;
    // Allow hella variables
    let newVarAry = createFilledArray(2 ** 10, null);
    newVarAry[0] = varName;

    let g = functify(parse2(args[0], newVarAry));
    let n: any = functify(parse2(args[1], []))();
    if (n instanceof Array) {
      n = n[0];
    } else {
      throw 'second parameter for iterate should be an integer';
    }
    n = Math.floor(n);
    if (n <= 0) {
      throw 'second parameter for iterate should be >0';
    }
    output.length = newVarAry.indexOf(null);
    return iterate(g, n);
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

//#endregion
