import {
  real, imag, Re, Im, Arg, Mod, add, subtract, mult, divide, exp, log, raise,
  sine, cosine, tangent, sinh, cosh, tetrate, iterate
} from '/js/complex/complexNumbers.js';
export {strToFunc, strToNum};
export {StrBuffer, Token, Node, functify, tokenize, parse, getNextCloseParen, findLastFunc}; // for testing

const types = {}; // Token types
types.FUNCTION = 1;
types.PAREN = 2;
types.STR = 3;
types.NUM = 4;
types.COMMA = 5;
types.SQUARE_PAREN = 6;

// Takes a string and returns the function
function strToFunc(str) {
  return functify(parse(tokenize(str)));
}

// Takes a string and returns the number
function strToNum(str) {
  let vars = []; //Don't allow variables
  let rslt;
  try {
    rslt = parse2(tokenize(str), vars);
    if (rslt instanceof Array) {
      return rslt;
    } else if (typeof rslt === 'string') {
      throw 'Center should be a complex number'
    }
    return functify(rslt)();
  } catch (e) {
    throw 'Center should be a complex number'
  }
}

//===========//
//    Tree   //
//===========//
class Node {
  // function, arg1, arg2, ...
  // args can be Nodes / ComNums / strings / numbers / functions
  constructor(f, ...children) {
    this.f = f;
    this.children = children;
  }
}

//===========================//
//          Evaluate         //
//      Node -> Function     //
//===========================//

// Turns a Node into a function
// could be improved a lot
function functify(n) {
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
  let func = function(...args) {
    return n.f(...results.map((g) => g(...args)));
  }
  return func;
}

function childToFunc(child) {
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
      let str='n1,';
      for (var i = 2; i < pos; i++) {
        str += 'n' + i + ',';
      }
      str += 'n'+pos;
      return new Function(str,'return n' + pos + ';');
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

class StrBuffer {
  constructor(str) {
    this.ind = 0;
    this.ary = str.split('');
  }
  nextChar() {
    return this.ary[this.ind++];
  }
  backup() {
    this.ind -= 1;
  }
}

class Token {
  constructor(text, type) {
    this.text = text;
    this.type = type;
  }
}

// Tokenize string; return array of Tokens
function tokenize(str) {
  let sb = new StrBuffer(str);
  let tokens = [], letters = [];
  for (var i=65;i<=90;i++) letters.push(String.fromCharCode(i));
  for (var i=97;i<=122;i++) letters.push(String.fromCharCode(i));
  let digits = '0123456789'.split('');
  let alphanum = letters.concat(digits);
  let arithFuncs = '+-*/^'.split('');

  for (var c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
    let token = c;
    let type = 0;
    if (arithFuncs.includes(c)) {
      type = types.FUNCTION;
    } else if (['(', ')'].includes(c)) {
      type = types.PAREN;
    } else if (['[', ']'].includes(c)) {
      type = types.SQUARE_PAREN;
    } else if (c === ',') {
      type = types.COMMA;
    } else if (letters.includes(c)) {
      // var, i, pi, e, sin, exp, ln, etc...
      while (alphanum.includes(c = sb.nextChar())) {
        token += c;
      }
      sb.backup();
      type = types.STR;
    } else if (digits.includes(c) || c === '.') {
      // number
      let hasDot = (c === '.');
      while (digits.includes(c = sb.nextChar()) || c === '.') {
        if (c === '.') {
          if (hasDot) {
            throw ('Too many dots in a number: ' + token + '.');
          }
          hasDot = true;
        }
        token += c;
      }
      sb.backup();
      type = types.NUM;
    } else if (c === ' ') {
      continue;
    } else {
      throw ('Unrecognized character: ' + c);
    }
    tokens.push(new Token(token, type));
  }
  return tokens;
}



//==========================//
//           Parse          //
//      Tokens -> Node      //
//==========================//


// Takes array from tokenize & turns it into a Node
function parse(tokens, vars) {
  if (vars === undefined) {
    vars = [null]; //Only allow one variable (for now)
  }
  let rslt = parse2(tokens, vars);
  if (rslt instanceof Array || typeof rslt === 'string') {
    return new Node((x) => x, rslt);
  }
  return rslt;
}
// Recursive version
// vars is an array w/ space for the # of legal vars
function parse2(tokens, vars) {
  if (tokens.length === 0) {
    throw 'Syntax error (I don\'t know what to do with this input)';
  }
  let children=[];
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
    children.push(parse2(tokens.slice(index+1), vars));
    return new Node(func, ...children);
  }

  let token1 = tokens[0];
  if (tokens.length === 1) {
    let unit = unitize(token1, vars);
    if (typeof unit === 'function') {
      throw token1.text + ' called without arguments';
    }
    return unit;
  }

  if (['(', '['].includes(token1.text)) {
    let closePos = getNextCloseParen(tokens, 0, token1.type);
    // entirely inside ()?
    if (closePos === tokens.length - 1) {
      return parse2(tokens.slice(1, tokens.length-1), vars);
    }
    // multiplication
    func = mult;
    children.push(parse2(tokens.slice(1, closePos), vars));
    children.push(parse2(tokens.slice(closePos + 1), vars));
    return new Node(func, ...children);
  }

  // Named function?
  if ((func = matchKnownFunc(token1.text)) !== null) {
    if (tokens[1].text === '(' ) {
      if (funcHasSquareParens(token1.text)) {
        throw token1.text + ' should be called with square braces';
      }
      let endInd = getNextCloseParen(tokens, 1, types.PAREN);
      let args = splitArguments(tokens.slice(2, endInd));
      if (args.length !== func.length) {
        throw 'Wrong number of parameters passed to ' + token1.text;
      }
      if (endInd === tokens.length-1) {
        return new Node(func, ...args.map((x) => parse2(x, vars)));
      }
      // otherwise we're multiplying with the next part
      children.push(new Node(func, ...args.map((x) => parse2(x, vars))));
      children.push(parse2(tokens.slice(endInd+1), vars));
      return new Node(mult, ...children);
    } else if (tokens[1].text === '[') {
      if (!funcHasSquareParens(token1.text)) {
        throw token1.text + ' should not be called with square braces';
      }
      let endInd = getNextCloseParen(tokens, 1, types.SQUARE_PAREN);
      let output = {};
      let realFunc = getRealFuncFromSquareParens(func, tokens.slice(2, endInd), output);
      tokens = tokens.slice(endInd+1)     // Everything after the []
      if (tokens.length === 0 || tokens[0].text !== '(') {
        throw 'No parameters passed to ' + token1.text;
      }
      // Get arguments
      endInd = getNextCloseParen(tokens, 0, types.PAREN);
      let args = splitArguments(tokens.slice(1, endInd));
      if (args.length < output.length) {
        throw 'Not enough parameters passed to ' + token1.text;
      }
      if (endInd === tokens.length-1) {
        return new Node(realFunc, ...args.map((x) => parse2(x, vars)));
      }
      // otherwise we're multiplying with the next part
      children.push(new Node(realFunc, ...args.map((x) => parse2(x, vars))));
      children.push(parse2(tokens.slice(endInd+1), vars));
      return new Node(mult, ...children);

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
  return new Node(mult, ...children);
}

// turns a token into a ComNum or variable
function unitize(token, vars) {
  let fn;
  switch (token.type) {
    case types.STR:
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
      return {text: token.text, pos: ind+1};
      break;
    case types.NUM:
      return real(parseFloat(token.text));
      break;
    case types.COMMA:
      throw 'Rogue comma detected';
    case types.FUNCTION:
    case types.PAREN:
    default:
      console.log(token);
      throw 'Something went wrong (this should never happen)';
  }
}

function canUseVar(varName, varAry) {
  if (varAry.includes(varName)) {
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

function tooManyVarsErr(extraVar, vars) {
  let err = 'Too many variables: ';
  if (vars.length === 0) {
    return err + extraVar;
  } else if (vars.length === 1) {
    err += vars[0] + ' ';
  } else {
    for (let varName of vars) {
      err += varName + ', ';
    }
  }
  err += 'and ' + extraVar;
  return err;
}

// Gets position of the closing parenthesis matching
// the opening parenthesis at position i
// tokens - token list
// i - position of the opening paren
// parenType - either types.PAREN or types.SQUARE_PAREN
function getNextCloseParen(tokens, i, parenType) {
  let level = 1;
  let open;
  let close;
  if (parenType === types.PAREN) {
    open = '(';
    close = ')';
  } else if (parenType === types.SQUARE_PAREN) {
    open = '[';
    close = ']';
  } else {
    throw '?????';
  }
  let j;
  for (j = i+1; j < tokens.length; j++) {
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



//===================//
//  Tools for using  //
//     functions     //
//===================//

// Given a list of tokens passed into a function, returns a list where the nth
// entry is the list of tokens corresponding to the nth argument.
// e.g. if input is: tet(2*n, 35 tet(1, 2))
// then pass tokens = ['2', 'n', ',', '35', 'tet', '(', '1', '2', ')']
// and this returns [ ['2', 'n'], ['35', 'tet', '(', '1', '2', ')'] ]
function splitArguments(tokens) {
  let args = [], curArg = [];
  let level = 0;
  for (var i = 0; i < tokens.length; i++) {
    let curToken = tokens[i];
    switch (curToken.type) {
      case types.COMMA:
        if (level === 0) {
          args.push(curArg);
          curArg = [];
        } else {
          curArg.push(curToken);
        }
        break;
      case types.PAREN:
      case types.SQUARE_PAREN:
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

function implicit_mult(...args) {
  return mult(...args);
}

// Find lowest priority elementary function outside of parentheses (PEMDAS)
// and its index in tokens. E.g.
// ['2', 'x', '+', 'sin', '3'] => [add, 2]
// ['2', 'x', '*', 'sin', '3'] => [mult, 2]
// ['2', 'sin', 'x']           => [implicit_mult, 1]
function findLastFunc(tokens){
  let strF, index, func;
  for (var i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token.type !== types.FUNCTION) {
      // Check for implicit multiplication
      if (i > 0) {
        let prevToken = tokens[i-1];
        if (prevToken.type !== types.FUNCTION) {
          // must have 2 tokens next to each other that are each either
          // a number, a variable, or a parenthesis
          if (!['+', '-'].includes(strF)  // +/- are lower priority
              && ([types.NUM, types.STR].includes(prevToken.type) || prevToken.text === ')')
              && ([types.NUM, types.STR].includes(token.type) || token.text === '(')
              && matchKnownFunc(prevToken.text) === null) {
            strF = 'implicit_mult';
            index = i;
          }
        }
      }
      if ([types.PAREN, types.SQUARE_PAREN].includes(token.type)) {
        if (['(', '['].includes(token.text)) {
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
    } else if (['+', '-'].includes(token.text)) {
      // always lowest priority
      strF = token.text;
      index = i;
    } else if (['*', '/'].includes(token.text) && !['+', '-'].includes(strF)) {
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
  'exp', 'ln', 'log', 'cos', 'sin', 'tan', 'sinh', 'cosh', 'tet', 'sqrt',
  'Re', 'Im', 'Arg', 'Mod', 'iterate'
];
const namedFuncs = [
  exp, log, log, cosine, sine, tangent, sinh, cosh, tetrate, (x) => raise(x, real(0.5)),
  Re, Im, Arg, Mod, iterate
];

function matchKnownFunc(strF) {
  let ind = namedFuncStrings.indexOf(strF);
  if (ind >= 0) {
    return namedFuncs[ind];
  }
  return null;
}

// Some functions require '[...]' to be complete
// e.g. 'iterate[func, n, var](z)''
function funcHasSquareParens(strF) {
  if (strF === 'iterate') {
    return true;
  }
  return false;
}

// Turn 'iterate[g,n,x]' into a single function.
// @param tokens - the tokens from inside the square brackets
// @param output - output.length is set to the number of
//  variables within the square brackets
function getRealFuncFromSquareParens(f, tokens, output){
  let args = splitArguments(tokens);
  if (f === iterate) {
    if (args.length !== 3) {
      throw 'wrong number of parameters for iterate';
    } else if (args[2].length !== 1 || args[2][0].type !== types.STR) {
      throw 'third parameter for iterate should be a single variable';
    }
    let varName = args[2][0].text;
    // Allow hella variables
    let newVarAry = new Array(2**10).fill(null);
    newVarAry[0] = varName;

    let g = functify(parse2(args[0], newVarAry));
    let n = functify(parse2(args[1], []))();
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
