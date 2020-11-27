import { ComplexNumber, real } from './complexNumbers';
import { ComplexFunction, Node, NodeChild, parse } from './parse';
import { tokenize } from './tokenize';
export { functify, strToFunc, strToNum };

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
  const vars = [];
  try {
    const rslt = parse(tokenize(str), vars);
    return functify(rslt)();
  } catch (e) {
    throw 'Input must be a complex number';
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
  } else if (typeof child === 'object') {
    // child is a Variable
    const position = child.position;
    if (position === 1) {
      // It's the first variable
      return x => x;
    } else {
      // It's a subsequent variable, create a function that returns the position-th argument
      let str = 'n1,';
      for (var i = 2; i < position; i++) {
        str += 'n' + i + ',';
      }
      str += 'n' + position;
      return new Function(str, 'return n' + position + ';') as ComplexFunction;
    }
  } else if (typeof child === 'number') {
    // Shouldn't happen but just in case
    console.log('This shouldn\'t happen - child in childToFunc is type number');
    return () => real(child);
  } else {
    // Otherwise, should be a function
    return child;
  }
}