import {
  ComNum, real, imag, add, subtract, mult, divide, exp, log, raise,
  sine, cosine, tangent, sinh, cosh, tetrate, logBaseN, Re, Im
} from '/js/complex/complexNumbers.js';
export {strToFunc, strToNum};
export {StrBuffer, Token, Node, functify, tokenize, parse, getNextCloseParen, findLastFunc}; // for testing

const arithFuncs = '+-*/^'.split('');
const parens = '()'.split('')
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const digits = '0123456789'.split('');
const alphanum = letters.concat(digits);
const types = {}; // Token types
types.FUNCTION = 1;
types.PAREN = 2;
types.STR = 3;
types.NUM = 4;
types.COMMA = 5;

function cl(x){ console.log(x); }

// Takes a string and returns the function
function strToFunc(str) {
  return functify(parse(tokenize(str)));
}

// Takes a string and returns the number
function strToNum(str) {
  varName = ""; //Don't allow variables
  let rslt;
  try {
    rslt = parse2(tokenize(str));
  } catch (e) {
    throw 'Center should be a complex number'
  }

  if (rslt instanceof ComNum) {
    return rslt
  } else if (typeof rslt === 'string') {
    throw 'Center should be a complex number'
  }
  return functify(rslt)();
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
    return n.f;
  }
  let results = [];
  for (let i = 0; i < n.children.length; i++) {
    let child = n.children[i];
    // Turn everything into a function
    if (child instanceof Node) {
      results.push(functify(child));
    }
    else if (typeof child === 'string') {
      results.push(x => x);
    }
    else if (child instanceof ComNum) {
      results.push(() => child);
    }
    else if (typeof child === 'number') {
      results.push(() => real(child));
    }
    else if (typeof child === 'function') {
      results.push(child);
    }
  }
  // cl(n.f);
  // cl(results);

  let func = function(...args) {
    return n.f(...results.map((g) => g(...args)));
  }
  return func;
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
  let tokens = [];
  for (var c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
    //
    let token = c;
    let type = 0;
    if (arithFuncs.includes(c)) {
      type = types.FUNCTION;
    }
    else if (parens.includes(c)) {
      type = types.PAREN;
    }
    else if (c === ',') {
      type = types.COMMA;
    }
    else if (letters.includes(c)) {
      // var, i, pi, e, sin, exp, ln, etc...
      while (alphanum.includes(c = sb.nextChar())) {
        token += c;
      }
      sb.backup();
      type = types.STR;
    }
    else if (digits.includes(c) || c === '.') {
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
    }
    else if (c === ' ') {
      continue;
    }
    else {
      throw ('Unrecognized character: ' + c);
    }
    tokens.push(new Token(token, type));
    //
  }
  return tokens;
}



//==========================//
//           Parse          //
//      Tokens -> Node      //
//==========================//

// i'm sorry
var varName;

// Takes array from tokenize & turns it into a Node
function parse(tokens) {
  varName = undefined;
  let rslt = parse2(tokens);
  if (rslt instanceof ComNum || typeof rslt === 'string') {
    return new Node((x) => x, rslt);
  }
  return rslt;
}
function parse2(tokens) {
  if (tokens.length === 0) {
    throw 'Syntax error (I don\'t know what to do with this input)';
  }
  let children=[];
  let [func, index] = findLastFunc(tokens);
  if (func !== undefined) {
    if (func === subtract && index === 0) {
      // Actually a negative sign
      children.push(real(0));
    }
    else {
      children.push(parse2(tokens.slice(0, index)));
    }
    if (func === implicit_mult) {
      func = mult;
      index -= 1;
    }
    children.push(parse2(tokens.slice(index+1)));
    return new Node(func, ...children);
  }

  let token1 = tokens[0];

  if (tokens.length === 1) {
    return unitize(token1);
  }

  if (token1.text === '(') {
    let closePos = getNextCloseParen(tokens, 0);
    // entirely inside ()?
    if (closePos === tokens.length - 1) {
      return parse2(tokens.slice(1, tokens.length-1));
    }
    // multiplication
    func = mult;
    children.push(parse2(tokens.slice(1, closePos)));
    children.push(parse2(tokens.slice(closePos + 1)));
    return new Node(func, ...children);
  }

  // Named function?
  if ((func = matchKnownFunc(token1.text)) !== null) {
    if (tokens[1].text === '(' ) {
      let endInd = getNextCloseParen(tokens, 1);
      let args = splitArguments(tokens.slice(2, endInd));
      if (args.length !== func.length) {
        throw 'Wrong number of parameters passed to ' + token1.text;
      }
      if (endInd === tokens.length-1) {
        return new Node(func, ...args.map(parse2));
      }
      // otherwise we're multiplying with the next part
      children.push(new Node(func, ...args.map(parse2)));
      children.push(parse2(tokens.slice(endInd+1)));
      return new Node(mult, ...children);
    }
    // Otherwise no parens (e.g.  'cos x', or even 'cos sin x')
    // Only allow this with 1-arg functions
    if (func.length > 1) {
      throw 'Missing parentheses';
    }
    return new Node(func, parse2(tokens.slice(1)));
  }

  // Then it's just implicit multiplication
  children.push(unitize(token1));
  children.push(parse2(tokens.slice(1)));
  return new Node(mult, ...children);
}

// turns a token into a ComNum or variable
function unitize(token) {
  switch (token.type) {
    case types.STR:
      if (token.text === 'i') {
        return imag(1);
      }
      else if (token.text === 'e') {
        return real(Math.E);
      }
      else if (token.text === 'pi') {
        return real(Math.PI);
      }
      // Otherwise it's a variable - only allow one variable
      else if (varName === undefined) {
        varName = token.text;
      }
      else if (token.text !== varName) {
        throw 'Too many variables: ' + token.text + ' and ' + varName;
      }
      return token.text;
      break;
    case types.NUM:
      return real(parseFloat(token.text));
      break;
    case types.COMMA:
      throw 'Rogue comma detected';
    case types.FUNCTION:
    case types.PAREN:
    default:
      // cl(token.text);
      throw 'Something went wrong (this should never happen)';
  }
}

// Gets position of the closing parenthesis matching
// the opening parenthesis at position i
function getNextCloseParen(tokens, i) {
  let level = 1;
  let j;
  for (j = i+1; j < tokens.length; j++) {
    switch (tokens[j].text) {
      case '(':
        level++;
        break;
      case ')':
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
        }
        else {
          curArg.push(curToken);
        }
        break;
      case types.PAREN:
        if (curToken.text === '(') {
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
      if (token.type === types.PAREN) {
        if (token.text === '(') {
          i = getNextCloseParen(tokens, i);
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
    // lowest priority always
    else if (['+', '-'].includes(token.text)) {
      strF = token.text;
      index = i;
    }
    // only lowest priority if no add or subtract
    else if (['*', '/'].includes(token.text) && !['+', '-'].includes(strF)) {
      strF = token.text;
      index = i;
    }
    // No case for ^ because it's set only if strF is undefined so far
  }
  //
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
  'Re', 'Im'
];
const namedFuncs = [
  exp, log, log, cosine, sine, tangent, sinh, cosh, tetrate, (x) => raise(x, real(0.5)),
  Re, Im
];

function matchKnownFunc(strF) {
  let ind = namedFuncStrings.indexOf(strF);
  if (ind >= 0) {
    return namedFuncs[ind];
  }
  // Log base n, e.g. 'log10'
  if (strF.match(/log[0-9]+/g) !== null) {
    let base = parseFloat(strF.match(/[0-9]+/g));
    return ((x) => logBaseN(base, x));
  }

  return null;
}





// cl(parse(tokenize('tet(x, 2)')));
//
// let f=functify(parse(tokenize('tet(x, 2)')));
// cl(f(real(2)));
