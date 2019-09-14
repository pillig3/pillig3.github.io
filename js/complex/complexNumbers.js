export {ComNum, real, imag, add, subtract, mult, divide, exp, log, raise, sine, cosine, tangent};

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
    } else {
      this.r = x;
      this.θ = y;
      [this.x, this.y] = fromPolar(x, y);
    }
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


function add(...args) {
  return new ComNum(args.reduce((sum, w) => sum + w.x, 0),
                    args.reduce((sum, w) => sum + w.y, 0));
}

function negate(z) {  return new ComNum(-z.x, -z.y); }

function mult(...args) {
  return new ComNum(args.reduce((rad, w) => rad * w.r, 1),
                    normalizeθ(args.reduce((θ, w) => θ + w.θ, 0)),
                    1);
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

function raise(z, w) {
  if (z.x === 0 && z.y === 0) {
    return new ComNum(0, 0);
  }
  return exp(mult(w, log(z)));
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
