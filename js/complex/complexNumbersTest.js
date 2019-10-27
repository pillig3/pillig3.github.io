import * as cn from "/js/complex/complexNumbers.js";
export {testFunc, approxEquals};

var ComNum = cn.ComNum;
ComNum.prototype.toString = function(){
  return (this.x + "+" + this.y + "i");
}

function real(x){
  return new ComNum(x, 0);
}
function imag(y){
  return new ComNum(0, y);
}

const ZERO = real(0);
const ONE = real(1);
const TWO = real(2);
const E = real(Math.E);
const I = imag(1);
const TWOI = imag(2);

//===================//
//       Tests       //
//===================//

function test(){
// Add
  let tolerance = 1e-8;
  let inputs = [
    [ONE, ONE],
    [ONE, TWO],
    [I, ONE],
    [I, ONE, ONE],
    [],
    I,
    [I, I],
    [I, I, I],
    [I, I, I, I]
  ];
  let results = [
    TWO,
    new ComNum(3, 0),
    new ComNum(1, 1),
    new ComNum(2, 1),
    ZERO,
    I,
    TWOI,
    new ComNum(0, 3),
    new ComNum(0, 4)
  ];
  testFunc(cn.add, inputs, results, tolerance);

// Mult
  results = [
    ONE,
    TWO,
    I,
    I,
    ONE,
    I,
    new ComNum(-1, 0),
    new ComNum(0, -1),
    ONE
  ];
  testFunc(cn.mult, inputs, results, tolerance);

// Subtract
  results = [
    ZERO,
    new ComNum(-1, 0),
    new ComNum(-1, 1),
    new ComNum(-2, 1),
    ZERO,
    I,
    ZERO,
    new ComNum(0, -1),
    new ComNum(0, -2)
  ];
  testFunc(cn.subtract, inputs, results, tolerance);

// Exp
  inputs = [
    real(3),
    I,
    cn.mult(real(Math.PI), I),
    cn.mult(real(Math.PI), imag(-1)),
    cn.add(ONE, I),
    ZERO
  ];
  results = [
    real(20.0855369231876677409285296546),
    new ComNum(0.5403023059, 0.8414709848),
    real(-1),
    real(-1),
    new ComNum(1.468693940, 2.287355287),
    ONE
  ];
  testFunc(cn.exp, inputs, results, tolerance);

// Sine
  results = [
    real(0.1411200081),
    imag(1.175201194),
    imag(11.54873936),
    cn.subtract(ZERO, imag(11.54873936)),
    new ComNum(1.298457581, 0.634963915),
    ZERO
  ]
  testFunc(cn.sine, inputs, results, tolerance);

  // Tetration
  inputs = [
    [real(2), 4],  // 2^2^2^2
    [I, 2]
  ]
  results = [
    real(2**16),
    real(0.207879576350761908546955619835)
  ]
  testFunc(cn.tetrate, inputs, results, tolerance);
}

function testFunc(f, inputs, results, tolerance) {
  for (let i = 0; i < inputs.length; i++) {
    let actualResult;
    // input can be multiple nums or just one
    if (inputs[i] instanceof Array) {
      actualResult = f(...inputs[i]);
    } else {
      actualResult = f(inputs[i]);
    }
    if (!approxEquals(actualResult, results[i], tolerance)) {
      console.log("Test failed! Function: " + f.name +
                  "\nInput: " + inputs[i] +
                  "\nExpected: " + results[i] +
                  "\nActual: " + actualResult);
    }
  }
}

function approxEquals(z, w, tolerance) {
  return (Math.abs(z.x-w.x) < tolerance &&
          Math.abs(z.y-w.y) < tolerance);
}

test();
