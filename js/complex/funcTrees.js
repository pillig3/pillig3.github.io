import {ComNum, real, imag, add, subtract, mult, divide, exp, log, raise, sine, cosine} from "/js/complex/complexNumbers.js";
export {Node, functify, strToFunc};
// For testing
export {StrBuffer, Token, tokenize, parse, getNextCloseParen, getNamedFunc, findLastFunc};

const namedFuncStrings = ['exp', 'ln', 'log', 'cos', 'sin'];
const namedFuncs       = [exp, log, log, cosine, sine];
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

function cl(x){ console.log(x); }

// Main export: takes a string and returns the function
function strToFunc(str) {
  return functify(parse(tokenize(str)));
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

// Evaluates the tree with parameter sym set to val
// function evaluate(n, sym, val) {
//   if (n.children === undefined || n.children.length === 0) {
//     return n.f();
//   }
//   let results = [];
//   for (let i = 0; i < n.children.length; i++) {
//     let child = n.children[i];
//     if (child instanceof Node) {
//       results.push(evaluate(child));
//     } else if (typeof child === "string") {
//       if (child !== sym) {
//         throw "Too many variables entered";
//       } else {
//         results.push(val);
//       }
//     } else if (child instanceof ComNum) {
//       results.push(child);
//     } else if (typeof child === "number" && child.toString() !== "NaN") {
//       results.push(real(child));
//     } // else ignore it
//   }
//   return n.f(...results);
// }

// Turns a Node into a function
// Node n
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
    else if (typeof child === "string") {
      results.push(x => x);
    }
    else if (child instanceof ComNum) {
      results.push(() => child);
    }
    else if (typeof child === "number") {
      results.push(() => new ComNum(child, 0));
    }
    else if (typeof child === "function") {
      results.push(child);
    }
  }

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

// Takes array from tokenize & turns it into a Node
function parse(tokens) {
  if (tokens.length === 0) {
    throw "You gotta put something inside the parentheses, yo";
  }
  let children=[];
  let [func, index] = findLastFunc(tokens)
  if (func !== undefined) {
    if (func === subtract && index === 0) {
      // Actually a negative rather than a function
      children.push(real(0));
    } else {
      children.push(parse(tokens.slice(0, index)));
    }
    if (func === implicit_mult) {
      func = mult;
      index -= 1;
    }
    children.push(parse(tokens.slice(index+1)));
    return new Node(func, ...children);
  }

  let token1 = tokens[0];

  // Is it just a unit?
  if (tokens.length === 1) {
    return new Node(((x) => x), unitize(token1));
  }

  // Entirely inside (), or implicit multiplication?
  if (token1.text === '(') {
    let closePos = getNextCloseParen(tokens, 0);
    if (closePos === tokens.length - 1) {
      return parse(tokens.slice(1, tokens.length-1));
    }
    // multiplication
    func = mult;
    children.push(parse(tokens.slice(1, closePos)));
    children.push(parse(tokens.slice(closePos + 1)));
    return new Node(func, ...children);
  }

  // Named function?
  if (namedFuncStrings.includes(token1.text)) {
    func = getNamedFunc(token1.text);
    if (tokens[1].text === '(' ) {
      let endInd = getNextCloseParen(tokens, 1);
      if (endInd === tokens.length - 1) {
        return new Node(func, parse(tokens.slice(2, endInd)));
      }
      // Otherwise we multiply after
      children.push(new Node(func, parse(tokens.slice(2, endInd))));
      children.push(parse(tokens.slice(endInd + 1)));
      return new Node(mult, ...children);
    }
    // Otherwise no parens (e.g.  'cos x'  )
    children.push(new Node(func, unitize(tokens[1])));
    children.push(parse(tokens.slice(2)));
    return new Node(mult, ...children);
  }

  // Then it's just implicit multiplication
  children.push(unitize(token1));
  children.push(parse(tokens.slice(1)));
  return new Node(mult, ...children);
}

// turns a token into a number or func; a 'unit' if you will
function unitize(token) {
  switch (token.type) {
    case types.STR:
      if (token.text === 'i') {
        return imag(1);
      } else if (token.text === 'e') {
        return real(Math.E);
      } else if (token.text === 'pi') {
        return real(Math.PI);
      }
      return token.text;
      break;
    case types.NUM:
      return real(parseFloat(token.text));
      break;
    case types.FUNCTION:
    case types.PAREN:
    default:
      cl(token); // TODO: delet this
      throw "This should never happen";
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
    throw "Error: unbalanced paremtheses";
  }
  return j;
}

function getNamedFunc(str) {
  return namedFuncs[namedFuncStrings.indexOf(str)];
}

function implicit_mult(...args) {
  return mult(...args);
}

// Find lowest priority func outside of parentheses (PEMDAS rules)
function findLastFunc(tokens){
  let strF, index, func;
  for (var i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token.type === types.PAREN) {
      if (token.text === '(') {
        i = getNextCloseParen(tokens, i);
        continue;
      } else {
        throw "Error: unbalanced paremtheses";
      }
    }
    if (token.type !== types.FUNCTION) {
      // Check for implicit multiplication
      if (i > 0) {
        let prevToken = tokens[i-1];
        if (prevToken.type !== types.FUNCTION) {
          if (([types.NUM, types.STR].includes(prevToken.type) || prevToken.text === ')' )
            && ([types.NUM, types.STR].includes(token.type) || token.text === '(')) {
            // only lowest priority if no add or subtract
            if (!['+', '-'].includes(strF)) {
              strF = 'implicit_mult';
              index = i;
            }
          }
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
