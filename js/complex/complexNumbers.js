export {
  ComNum, real, imag, Re, Im, add, subtract, mult, divide, exp, log, raise,
  sine, cosine, tangent, sinh, cosh, tetrate, logBaseN
};

const PI = Math.PI;

//===========================//
//    Complex Number Class   //
//===========================//
class ComNum {
  // (x, y) for cartesian
  // or (r, θ, 1) for polar
  constructor(x, y, polar) {
    if (x === 0) {     // may also be negative zero;
      x = Math.abs(x); // ja🅱️ascript y u like this
    }
    if (y === 0) {
      y = Math.abs(y);
    }
    if (typeof polar === 'undefined') {
      this.x = x;
      this.y = y;
      [this.r, this.θ] = toPolar(x, y);
      this.θ = normalizeθ(this.θ);
    } else {
      this.r = x;
      this.θ = y;
      [this.x, this.y] = fromPolar(x, y);
    }
  }
  toString() {
    return this.x + "+" + this.y + "i";
  }
}


//===================//
//        Math       //
//===================//
function real(x) {
  return new ComNum(x, 0);
}
function imag(x) {
  return new ComNum(0, x);
}
const ZERO = real(0);
const I = imag(1);
const ONE = real(1);
const TWO = real(2);
const TWOI = imag(2);
const E = real(Math.E);


function Re(z) { return real(z.x); }
function Im(z) { return real(z.y); }

function add(...args) {
  return new ComNum(args.reduce((sum, w) => sum + w.x, 0),
                    args.reduce((sum, w) => sum + w.y, 0));
}

function negate(z) {  return new ComNum(-z.x, -z.y); }

function mult(...args) {
  return new ComNum(
    args.reduce((rad, w) => rad * w.r, 1),
    normalizeθ(args.reduce((θ, w) => θ + w.θ, 0)),
    1
  );
}

function invert(z) {  return new ComNum(1/z.r, -z.θ, 1); }

function subtract(z, ...args) {
  if (z === undefined) {
    return ZERO;
  } else if (args === undefined || args.length === 0) {
    return z;
  }
  return add(...[z, ...args.map(w => negate(w))]);
}

function divide(z, w) {  return mult(z, invert(w)); }

function exp(z) {  return new ComNum(Math.E**z.x, normalizeθ(z.y), 1); }

function log(z) { return new ComNum(Math.log(z.r), z.θ); }

// Assumes n is a real
function logBaseN(n, z) { return new ComNum(Math.log(z.r)/Math.log(n), z.θ/Math.log(n)); }

function raise(z, w) {
  if (z.x === 0 && z.y === 0) {
    return ZERO;
  }
  return new ComNum(...fastExp(fastMult([w.x, w.y], fastLog([z.x, z.y]))));
  // return exp(mult(w, log(z)));
}

function sine(z) {
  return divide(subtract(exp(mult(I, z)), exp(mult(negate(I), z))), TWOI);
}

function cosine(z) {
  return divide(add(exp(mult(I, z)), exp(mult(negate(I), z))), TWO);
}

function tangent(z) {
  return divide(sine(z), cosine(z));
}

function sinh(z) {
  return sine(mult(negate(I), z));
}

function cosh(z) {
  return cosine(mult(negate(I), z));
}

// z^z^...^z (n times)
// n must be a non-negative int (will be converted to one if not)
function tetrate(z, n) {
  if (n instanceof ComNum) {
    n = n.x;
  }
  if (n < 0) {
    return new ComNum(NaN, NaN);
  }
  else if (n === 0) {
    return ONE;
  }
  n = Math.floor(n);
  return new ComNum(...fastTetrate([z.x, z.y], n));
  // return iterate((x) => raise(z,x), z, n-1);
}


// z^w = e^(w ln(z))
// z^z^z^z = e^(e^(...e^(z ln(z))... ln(z)) ln(z))
// ~2-4x faster than iterate((x) => raise(z,x), z, n-1)
function fastTetrate([x, y], n) {
  if (n == 1) {
    return [x, y];
  }
  let logz = fastLog([x, y]);
  let rslt = fastExp(fastMult([x, y], logz));
  for (let i = 2; i < n; i++) {
    rslt = fastExp(fastMult(rslt, logz));
  }
  return rslt;
}

// (x1 + y1 i)(x2 + y2 i)
function fastMult([x1, y1], [x2, y2]) {
  if (x1 === Infinity || y1 === Infinity || x1 === -Infinity || y1 === -Infinity
   || x2 === Infinity || y2 === Infinity || x2 === -Infinity || y2 === -Infinity) {
    return [Infinity, Infinity];
  }
  return [x1*x2-y1*y2, x1*y2+y1*x2];
}
// e^(x + y i)  =  e^x * e^(i y)
function fastExp([x, y]) {
  if (x === Infinity || y === Infinity) {
    return [Infinity, Infinity];
  }
  return [Math.E**x*Math.cos(y), Math.E**x*Math.sin(y)];
}
//
function fastLog([x, y]) {
  return [Math.log(Math.sqrt(x**2+y**2)), toPolar(x, y)[1]];
}




//===================//
//      Helpers      //
//===================//

// Returns r, theta
function toPolar(x, y) {
  return [Math.sqrt(x**2 + y**2), (() => {
    if ([-Infinity, Infinity].includes(x) || [-Infinity, Infinity].includes(y)) {
      return 0;
    } else if (x === 0 && y === 0) {
      return 0;
    } else if (x >= 0) {
      return Math.atan(y/x);
    } else if (y >= 0) {
      return PI - Math.atan(y/(-x));
    } else {
      return -PI - Math.atan(y/(-x));
    }
  })()];
}

// Returns x, y
function fromPolar(r, θ) {
  if (r === Infinity) {
    return [Infinity, Infinity];
  }
  return [r*Math.cos(θ), r*Math.sin(θ)];
}

// returns \theta\in (-pi, pi]
function normalizeθ(θ) {
  if (θ === Infinity || θ === -Infinity) {
    return 0;
  }
  if (θ > PI) {
    return θ - Math.floor((θ+PI) / (2*PI)) * 2*PI;
  } else if (θ <= -PI) {
    return θ + Math.floor((-θ+PI) / (2*PI)) * 2*PI;
  } else {
    return θ;
  }
}

function compose(g, h) {
  return function(...x) {
    return g(h(...x));
  }
}

// f: ComNum -> ComNum
// x: ComNum
// n: positive int
function iterate(f, x, n) {
  let res = x;
  for (let i = 1; i <= n; i++) {
    res = f(res);
  }
  return res;
}





// Test
// let res;
// let w = new ComNum(1, 1);
// let z = new ComNum(0.54,13.2);
// //
//
// let start;
// let end;
// start = performance.now();
//
// end = performance.now();
// console.log("fast raise: "+(end-start)+" ms");
// //
// start = performance.now();
//
// end = performance.now();
// console.log("normal raise: "+(end-start)+" ms");
