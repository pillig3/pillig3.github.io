export {
  real, imag, Re, Im, Mod, Arg, add, subtract, mult, divide, exp, log, raise,
  sine, cosine, tangent, sinh, cosh, tetrate, iterate,
  normalizeTheta
};


//===================//
//        Math       //
//===================//

// makes x a complex number x+0i
// R -> C
function real(x) {
  return [x, 0];
}

// makes x a complex number 0+xi
// R -> C
function imag(x) {
  return [0, x];
}

// Real part
// C -> R \subset C
function Re(z) {
  return [z[0], 0];
}
// Imaginary part
// C -> R \subset C
function Im(z) {
  return [z[1], 0];
}
// Mod (radius)
// C -> R \subset C
function Mod([x, y]) {
  return [Math.sqrt(x**2 + y**2), 0];
}
// Arg (angle)
// C -> R \subset C
function Arg(z) {
  return [toPolar(z[0], z[1])[1], 0];
}

// Plus
// C^2 -> C
function add(z, w) {
  return [z[0]+w[0], z[1]+w[1]];
}
// c^n -> C
function addMore(...args) {
  return [args.reduce((sum, w) => sum + w[0], 0), args.reduce((sum, w) => sum + w[1], 0)];
}

// Negate
// C -> C
function negate(z) {
  return [-z[0], -z[1]];
}

// Subtract
// C^2 -> C
function subtract(z, w) {
  return [z[0] - w[0], z[1] - w[1]];
}

// Multiply
// C^2 -> C
function mult([x1, y1], [x2, y2]) {
  return [x1*x2-y1*y2, x1*y2+y1*x2];
}

// Inverse
// C -> C
function invert(z) {
  let pol = toPolar(z[0], z[1]);
  return fromPolar(1/pol[0], -pol[1]);
}

// Divide
// C^2 -> C
function divide(z, w) {
  let zz = toPolar(z[0], z[1]);
  let ww = toPolar(w[0], w[1]);
  return fromPolar(zz[0] * (1/ww[0]), zz[1] - ww[1]);
}

// e^z
// C -> C
function exp([x, y]) {
  if (x === Infinity || y === Infinity) {
    return [Infinity, Infinity];
  }
  return [Math.E**x*Math.cos(y), Math.E**x*Math.sin(y)];
}

// ln(z)
// C -> C
function log(z) {
  let zz = toPolar(z[0], z[1]);
  return [Math.log(zz[0]), zz[1]];
}

// z^w  =  e^(w * ln(z))
// C^2 -> C
function raise(z, w) {
  if (z[0] === 0 && z[1] === 0) {
    return z;
  }
  let zz = toPolar(z[0], z[1]);
  let logzz = toPolar(Math.log(zz[0]), zz[1]);
  let ww = toPolar(w[0], w[1]);
  return exp(fromPolar(ww[0] * logzz[0], ww[1] + logzz[1]));
}

// sin z = \frac{ e^{i z}-e^{-i z} }{ 2i }
// C -> C
function sine(z) {
  return divide(subtract(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [0, 2]);
}

// cos z = \frac{ e^{i z}+e^{-i z} }{ 2 }
// C -> C
function cosine(z) {
  return divide(add(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [2, 0]);
}

// tan z = \frac{sin z}{cos z}
// C -> C
function tangent(z) {
  return divide(sine(z), cosine(z));
}

// sinh z = sin(-i z)
// C -> C
function sinh(z) {
  return sine(mult([0, -1], z));
}

// cosh z = cos(-i z)
// C -> C
function cosh(z) {
  return cosine(mult([0, -1], z));
}

// z^z^...^z  =  e^(e^(...e^(z ln(z))... ln(z)) ln(z))
// n should be a non-negative int
// C x N -> C
function tetrate([x, y], n) {
  if (n.length > 0) {
    n = n[0];
  }
  n = Math.floor(n);
  if (n < 0) {
    return [NaN, NaN];
  } else if (n === 0) {
    return [1, 0];
  } else if (n === 1) {
    return [x, y];
  }
  let lnzX = Math.log(Math.sqrt(x**2+y**2));
  let lnzY = toPolar(x, y)[1];
  let resX = x;
  let resY = y;
  let mX, mY, x1x2, y1y2, x1y2, y1x2;
  for (let i = 1; i < n; i++) {
    x1x2 = resX*lnzX;
    y1y2 = resY*lnzY;
    x1y2 = resX*lnzY;
    y1x2 = resY*lnzX;
    mX = resX*lnzX-resY*lnzY;
    mY = resX*lnzY+resY*lnzX; // mult
    resX = Math.E**mX*Math.cos(mY);
    resY = Math.E**mX*Math.sin(mY); // exp
  }
  if ([Infinity, -Infinity, NaN].includes(resX) || [Infinity, -Infinity, NaN].includes(resY)) {
    return [Infinity, Infinity];
  }
  return [resX, resY];
}

// check \infty
function checkMult([x1, y1], [x2, y2]) {
  if (x1 === Infinity || y1 === Infinity || x1 === -Infinity || y1 === -Infinity
   || x2 === Infinity || y2 === Infinity || x2 === -Infinity || y2 === -Infinity) {
    return [Infinity, Infinity];
  }
  return [x1*x2-y1*y2, x1*y2+y1*x2];
}


//===================//
//      Helpers      //
//===================//

// Returns [r, theta]
function toPolar(x, y) {
  let θ;
  if (Math.abs(x) === Infinity || Math.abs(y) === Infinity) {
    θ = 0;
  } else if (x === 0 && y === 0) {
    θ = 0;
  } else if (x >= 0) {
    θ = Math.atan(y/x);
  } else if (y >= 0) {
    θ = Math.PI - Math.atan(y/(-x));
  } else {
    θ = -Math.PI - Math.atan(y/(-x));
  }
  return [Math.sqrt(x**2 + y**2), θ];
}

// Returns [x, y]
function fromPolar(r, θ) {
  if (r === Infinity) {
    return [Infinity, Infinity];
  }
  return [r*Math.cos(θ), r*Math.sin(θ)];
}

// returns \theta\in (-pi, pi]
function normalizeTheta(θ) {
  if (θ === Infinity || θ === -Infinity) {
    return 0;
  }
  if (θ > Math.PI) {
    return θ - Math.floor((θ+Math.PI) / (2*Math.PI)) * 2*Math.PI;
  } else if (θ <= -Math.PI) {
    return θ + Math.floor((-θ+Math.PI) / (2*Math.PI)) * 2*Math.PI;
  } else {
    return θ;
  }
}

// iterate w.r.t. the first parameter of f
// (C -> C)xN -> (C -> C)
function iterate(f, n) {
  if (n <= 0) {
    return ()=>0;
  } else if (n === 1) {
    return f;
  }
  return (x, ...args) => {
    let res = x;
    for (let i = 0; i < n; i++) {
      res = f(res, ...args);
    }
    return res;
  }
}
