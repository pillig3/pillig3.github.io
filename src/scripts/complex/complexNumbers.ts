export {
	real,
	imag,
	Re,
	Im,
	Mod,
	Arg,
	add,
	subtract,
	mult,
	divide,
	exp,
	log,
	raise,
	sqrt,
	sine,
	cosine,
	tangent,
	sinh,
	cosh,
	tanh,
	tetrate,
	iterate,
	normalizeTheta,
	ComplexNumber,
};

// Type for a complex number: (x, y)
type ComplexNumber = [number, number];
// Type for a function that we can iterate
type IterateFunction = (first: any, ...rest: any[]) => any;

/**********************
 *       Math         *
 *********************/
//#region Math functions

/**
 * Makes a normal js number into a complex number x+0i
 */
function real(x: number): ComplexNumber {
	return [x, 0];
}

/**
 * Makes a normal js number into an imaginary number 0+xi
 */
function imag(x: number): ComplexNumber {
	return [0, x];
}

/**
 * Gets the real part of a complex number
 */
function Re(z: ComplexNumber): ComplexNumber {
	return [z[0], 0];
}

/**
 * Gets the imaginary part of a complex number
 */
function Im(z: ComplexNumber): ComplexNumber {
	return [z[1], 0];
}

/**
 * Gets the modulus of a complex number (distance from zero)
 */
function Mod(z: ComplexNumber): ComplexNumber {
	return [Math.sqrt(z[0] ** 2 + z[1] ** 2), 0];
}

/**
 * Gets the argument of a complex number (angle from zero)
 */
function Arg(z: ComplexNumber): ComplexNumber {
	return [toPolar(z[0], z[1])[1], 0];
}

/**
 * Adds two complex numbers
 */
function add(z: ComplexNumber, w: ComplexNumber): ComplexNumber {
	return [z[0] + w[0], z[1] + w[1]];
}

/**
 * Subtracts one complex number from another
 */
function subtract(z: ComplexNumber, w: ComplexNumber): ComplexNumber {
	return [z[0] - w[0], z[1] - w[1]];
}

/**
 * Multiplies two complex numbers
 */
function mult([x1, y1]: ComplexNumber, [x2, y2]: ComplexNumber): ComplexNumber {
	return [x1 * x2 - y1 * y2, x1 * y2 + y1 * x2];
}

/**
 * Divides one complex number by another
 */
function divide(z: ComplexNumber, w: ComplexNumber): ComplexNumber {
	let zz = toPolar(z[0], z[1]);
	let ww = toPolar(w[0], w[1]);
	return fromPolar(zz[0] * (1 / ww[0]), zz[1] - ww[1]);
}

/**
 * Returns e to the power of a number: e^(x+iy)
 */
function exp([x, y]: ComplexNumber): ComplexNumber {
	if (x === Infinity || y === Infinity) {
		return [Infinity, Infinity];
	}
	return [Math.E ** x * Math.cos(y), Math.E ** x * Math.sin(y)];
}

/**
 * Returns the natural log of a complex number: ln(z)
 */
function log(z: ComplexNumber): ComplexNumber {
	let zz = toPolar(z[0], z[1]);
	return [Math.log(zz[0]), zz[1]];
}

/**
 * Returns one complex number raised to the power of another: z^w = e^(w * ln(z))
 */
function raise(z: ComplexNumber, w: ComplexNumber): ComplexNumber {
	if (z[0] === 0 && z[1] === 0) {
		return z;
	}
	let zz = toPolar(z[0], z[1]);
	let logzz = toPolar(Math.log(zz[0]), zz[1]);
	let ww = toPolar(w[0], w[1]);
	return exp(fromPolar(ww[0] * logzz[0], ww[1] + logzz[1]));
}

/**
 * Returns the square root of a complex number
 */
function sqrt(z: ComplexNumber): ComplexNumber {
	return raise(z, real(0.5));
}

/**
 * Returns the sine of the complex number: sin z = ( e^(i z) - e^(-i z) ) / (2i)
 */
function sine(z: ComplexNumber): ComplexNumber {
	return divide(subtract(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [0, 2]);
}

/**
 * Returns the cosine of the complex number: cos z = ( e^(i z) + e^(-i z) ) / 2
 */
function cosine(z: ComplexNumber): ComplexNumber {
	return divide(add(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [2, 0]);
}

/**
 * Returns the tangent of the complex number: tan z = sin z / cos z
 */
function tangent(z: ComplexNumber): ComplexNumber {
	return divide(sine(z), cosine(z));
}

/**
 * Returns the hyperbolic sine of the complex number: sinh z = -i sin(i z)
 */
function sinh(z: ComplexNumber): ComplexNumber {
	return mult([0, -1], sine(mult([0, 1], z)));
}

/**
 * Returns the hyperbolic cosine of the complex number: cosh z = cos(i z)
 */
function cosh(z: ComplexNumber): ComplexNumber {
	return cosine(mult([0, 1], z));
}

/**
 * Returns the hyperbolic tangent of the complex number: tanh z = sinh(z)/cosh(z)
 */
function tanh(z: ComplexNumber): ComplexNumber {
	return divide(sinh(z), cosh(z));
}

/**
 * Returns a complex number tetrated a given number of times:
 * z^z^...^z  =  e^(e^(...e^(z ln(z))... ln(z)) ln(z))
 */
function tetrate([x, y]: ComplexNumber, n: number | number[]): ComplexNumber {
	if (typeof n !== "number") {
		if (n.length === 0) {
			return [0, 1]; //Just in case, return multiplicative identity
		}
		n = n[0]; //Use real part
	}
	n = Math.floor(n);
	if (n < 0) {
		return [NaN, NaN];
	} else if (n === 0) {
		return [1, 0];
	} else if (n === 1) {
		return [x, y];
	}
	let lnzX = Math.log(Math.sqrt(x ** 2 + y ** 2));
	let lnzY = toPolar(x, y)[1];
	let resX = x;
	let resY = y;
	for (let i = 1; i < n; i++) {
		const mX = resX * lnzX - resY * lnzY;
		const mY = resX * lnzY + resY * lnzX; // mult
		resX = Math.E ** mX * Math.cos(mY);
		resY = Math.E ** mX * Math.sin(mY); // exp
	}
	if (
		isNaN(resX) ||
		resX === Infinity ||
		resX === -Infinity ||
		isNaN(resY) ||
		resY === Infinity ||
		resY === -Infinity
	) {
		return [Infinity, Infinity];
	}
	return [resX, resY];
}

//#endregion

/**********************
 *      Helpers       *
 *********************/
//#region Helper functions

/**
 * Converts from cartesian coordinates to polar coordinates
 * @param x The x-coordinate of the complex number
 * @param y The y-coordinate of the complex number
 */
function toPolar(x: number, y: number): ComplexNumber {
	let θ: number;
	if (Math.abs(x) === Infinity || Math.abs(y) === Infinity) {
		θ = 0;
	} else if (x === 0 && y === 0) {
		θ = 0;
	} else if (x >= 0) {
		θ = Math.atan(y / x);
	} else if (y >= 0) {
		θ = Math.PI - Math.atan(y / -x);
	} else {
		θ = -Math.PI - Math.atan(y / -x);
	}
	return [Math.sqrt(x ** 2 + y ** 2), θ];
}

/**
 * Converts from polar coordinates to cartesian coordinates
 * @param r The modulus of the complex number
 * @param θ The argument of the complex number
 */
function fromPolar(r: number, θ: number): ComplexNumber {
	if (r === Infinity) {
		return [Infinity, Infinity];
	}
	return [r * Math.cos(θ), r * Math.sin(θ)];
}

/**
 * Gets a normalized value of an angle in the range (-π, π]
 * @param θ The angle
 */
function normalizeTheta(θ: number): number {
	if (θ === Infinity || θ === -Infinity) {
		return 0;
	}
	if (θ > Math.PI) {
		return θ - Math.floor((θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
	} else if (θ <= -Math.PI) {
		return θ + Math.floor((-θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
	} else {
		return θ;
	}
}

/**
 * Iterates a function with respect to its first parameter a given number of times
 * @param f The function
 * @param n Number of times to iterate it
 */
function iterate(f: IterateFunction, n: number): IterateFunction {
	if (n <= 0) {
		return (_x) => 0;
	} else if (n === 1) {
		return f;
	}
	return (x: any, ...args: any[]) => {
		let res = x;
		for (let i = 0; i < n; i++) {
			res = f(res, ...args);
		}
		return res;
	};
}

//#endregion
