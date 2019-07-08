import {ComNum, real, imag, add, subtract, mult, divide, exp, log, raise, sine, cosine} from "/js/complex/complexNumbers.js";
import {StrBuffer, Token, tokenize, parse, getNextCloseParen,
  getNamedFunc, findLastFunc, Node, functify, strToFunc} from '/js/complex/funcTrees.js';
import {approxEquals} from '/js/complex/complexNumbersTest.js';

function cl(x){ console.log(x); }
ComNum.prototype.toString = function(){
  return (this.x + "+" + this.y + "i");
}

//===================//
//       Tests       //
//===================//


function test() {
  // Functify
  let n = new Node(add, real(1), imag(1));
  let n2 = new Node(add, 'x');
  let n3 = new Node(mult, n, n2);
  // (1 + i) * x
  let fn = functify(n3);
  assertEqual(fn(real(1)), new ComNum(1, 1));
  assertEqual(fn(real(2)), new ComNum(2, 2));
  assertEqual(fn(new ComNum(1, 1)), imag(2));

  n = new Node((x)=>x, real(1));
  let n1 = new Node((x)=>x, 'x');
  n2 = new Node(raise, 'x', real(2));
  n3 = new Node(subtract, n2, n1, n);
  // x^2 - x - 1
  fn = functify(n3);
  assertEqual(fn(real(0)), real(-1));
  assertEqual(fn(real(1.61803398875)), real(0));
  assertEqual(fn(imag(1)), new ComNum(-2, -1));

  // getNextCloseParen
  let t = tokenize('x+(3-4)x^2');
  assertEqual(getNextCloseParen(t, 2), 6);
  t = tokenize('((()()2x))');
  assertEqual(getNextCloseParen(t, 1), 8);
  t = tokenize('(ab^(cd*ef))');
  assertEqual(getNextCloseParen(t, 0), 8);

  // findLastFunc
  t = tokenize('2*x^2')
  assertEqual(findLastFunc(t)[0], mult);
  assertEqual(findLastFunc(t)[1], 1);
  t = tokenize('sin(x)');
  assertEqual(findLastFunc(t)[0], undefined);
  assertEqual(findLastFunc(t)[1], undefined);
  t = tokenize('sin(x) + (3 * x^(3^4))');
  assertEqual(findLastFunc(t)[0], add);
  assertEqual(findLastFunc(t)[1], 4);
  t = tokenize('x^2+3*7i');
  assertEqual(findLastFunc(t)[0], add);
  assertEqual(findLastFunc(t)[1], 3);

  // Parse
  let p = parse(tokenize('x^2'));
  assertEqual(p.f, raise);
  assertEqual(p.children[0].children[0], 'x');
  assertEqual(p.children[1].children[0], real(2));
  p = parse(tokenize('2*x^2'));
  assertEqual(p.f, mult);
  assertEqual(p.children[0].children[0], real(2));
  assertEqual(p.children[1].f, raise);
  assertEqual(p.children[1].children[0].children[0], 'x');
  p = parse(tokenize('x^(2i)'));
  assertEqual(p.f, raise);
  assertEqual(p.children[0].children[0], 'x');
  assertEqual(p.children[1].f, mult);
  // let's test some implicit mult
  p = parse(tokenize('2+2x^2'));
  assertEqual(p.f, add);
  assertEqual(p.children[1].f, mult);
  assertEqual(p.children[1].children[1].f, raise);
  p = parse(tokenize('3(2^x+1)x'));
  assertEqual(p.f, mult);
  assertEqual(p.children[0].f, mult);
  assertEqual(p.children[0].children[1].f, add);
  assertEqual(p.children[0].children[1].children[0].f, raise);

  // All together
  fn = strToFunc('x^2');
  assertEqual(fn(real(2)), real(4));
  assertEqual(fn(imag(2)), real(-4));
  assertEqual(fn(new ComNum(1, 1)), imag(2));

  fn = strToFunc('12*x + 7*x^3 - 3');
  assertEqual(fn(real(1)), real(16));
  assertEqual(fn(imag(1)), new ComNum(-3, 5));

}

test();




function assertEqual(a, b){
  let equal = true;
  if (a instanceof ComNum) {
    if (b instanceof ComNum) {
      if (!approxEquals(a, b, 1e-8)) {
        equal = false;
      }
    } else {
      equal = false;
    }
  } else {
    if (a !== b) {
      equal = false;
    }
  }
  if (!equal) {
    cl("Test failed! " +
    "\nExpected: " + b +
    "\nActual: " + a);
  }
}
