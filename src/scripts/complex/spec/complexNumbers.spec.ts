import {
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
	sinh,
	cosh,
	tetrate,
	ComplexNumber,
} from "../complexNumbers";
import "../../../setupTests";
import "../../../../jest.d.ts";

const EPSILON = 1e-10;

describe("real", () => {
	it("Creates a complex number from a real number", () => {
		expect(real(1)).toEqual([1, 0]);
		expect(real(-1)).toEqual([-1, 0]);
		expect(real(Math.PI)).toEqual([Math.PI, 0]);
	});
});

describe("imag", () => {
	it("Creates an imaginary complex number from a real number", () => {
		expect(imag(1)).toEqual([0, 1]);
		expect(imag(-1)).toEqual([0, -1]);
		expect(imag(Math.PI)).toEqual([0, Math.PI]);
	});
});

describe("Re", () => {
	it("Gets the real part of a complex number", () => {
		expect(Re([1, 2])).toEqual(real(1));
		expect(Re([-1, 2])).toEqual(real(-1));
		expect(Re([Math.PI, 2])).toEqual(real(Math.PI));
	});
});

describe("Im", () => {
	it("Gets the imaginary part of a complex number", () => {
		expect(Im([2, 1])).toEqual(real(1));
		expect(Im([2, -1])).toEqual(real(-1));
		expect(Im([2, Math.PI])).toEqual(real(Math.PI));
	});
});

describe("Mod", () => {
	it("Gets the modulus of a complex number", () => {
		expect(Mod([1, 0])).toEqual(real(1));
		expect(Mod([0, 1])).toEqual(real(1));
		expect(Mod([1, 1])).toEqual(real(Math.sqrt(2)));
		expect(Mod([-1, -1])).toEqual(real(Math.sqrt(2)));
		expect(Mod([-2, 1])).toEqual(real(Math.sqrt(5)));
	});
});

describe("Arg", () => {
	it("Gets the argument of a complex number", () => {
		expect(Arg([1, 0])).toEqual(real(0));
		expect(Arg([0, 1])).toEqual(real(Math.PI / 2));
		expect(Arg([1, 1])).toEqual(real(Math.PI / 4));
		expect(Arg([0, -1])).toEqual(real(-Math.PI / 2));
		expect(Arg([-1, -1])).toEqual(real(-(Math.PI * 3) / 4));
		expect(Arg([-1, 0])).toEqual(real(Math.PI));
	});
});

describe("add", () => {
	const rsltArray: [ComplexNumber, ComplexNumber, ComplexNumber][] = [
		[imag(1), real(1), [1, 1]],
		[real(0), real(1), real(1)],
		[[1, 1], imag(-1), real(1)],
		[
			[Math.PI, -2],
			[Math.E, 4],
			[Math.PI + Math.E, 2],
		],
	];
	for (const ary of rsltArray) {
		it("Adds " + ary[0] + " and " + ary[1], () => {
			expect(add(ary[0], ary[1])).toEqual(ary[2]);
		});
		it("Adds " + ary[1] + " and " + ary[0], () => {
			expect(add(ary[1], ary[0])).toEqual(ary[2]);
		});
	}
});

describe("subtract", () => {
	const rsltArray: [ComplexNumber, ComplexNumber, ComplexNumber][] = [
		[imag(1), real(1), [-1, 1]],
		[real(0), real(1), real(-1)],
		[[1, 1], imag(-1), [1, 2]],
		[
			[Math.PI, -2],
			[Math.E, 4],
			[Math.PI - Math.E, -6],
		],
	];
	for (const ary of rsltArray) {
		it("Subtracts " + ary[0] + " minus " + ary[1], () => {
			expect(subtract(ary[0], ary[1])).toEqual(ary[2]);
		});
		it("Subtracts " + ary[0] + "minus " + ary[2], () => {
			expect(subtract(ary[0], ary[2])).toEqual(ary[1]);
		});
	}
});

describe("mult", () => {
	const rsltArray: [ComplexNumber, ComplexNumber, ComplexNumber][] = [
		[real(2), real(4), real(8)],
		[imag(1), imag(-1), real(1)],
		[real(0), [Math.PI, 999], real(0)],
		[
			imag(Math.PI),
			[Math.sqrt(1 / 2), Math.sqrt(1 / 2)],
			[-Math.sqrt(Math.PI ** 2 / 2), Math.sqrt(Math.PI ** 2 / 2)],
		],
	];
	for (const ary of rsltArray) {
		it("Multiplies " + ary[0] + " and " + ary[1], () => {
			expect(mult(ary[0], ary[1])).toEqual(ary[2]);
		});
		it("Multiplies " + ary[1] + " and " + ary[0], () => {
			expect(mult(ary[1], ary[0])).toEqual(ary[2]);
		});
	}
});

describe("divide", () => {
	const rsltArray: [ComplexNumber, ComplexNumber, ComplexNumber][] = [
		[real(2), real(4), real(1 / 2)],
		[imag(1), imag(-1), real(-1)],
		[real(-1), imag(Math.PI), imag(1 / Math.PI)],
		[
			[-Math.sqrt(Math.PI ** 2 / 2), Math.sqrt(Math.PI ** 2 / 2)],
			[Math.sqrt(1 / 2), Math.sqrt(1 / 2)],
			imag(Math.PI),
		],
	];
	for (const ary of rsltArray) {
		it("Divides " + ary[0] + " by " + ary[1], () => {
			expect(divide(ary[0], ary[1])).toApproxEqual(ary[2], EPSILON);
		});
		it("Divides " + ary[0] + " by " + ary[2], () => {
			expect(divide(ary[0], ary[2])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("exp", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(2), real(Math.E ** 2)],
		[imag(Math.PI / 4), [Math.sqrt(1 / 2), Math.sqrt(1 / 2)]],
		[real(-1), real(1 / Math.E)],
		[imag(Math.PI), real(-1)],
		[imag(Math.PI / 2), imag(1)],
		[imag((-Math.PI * 3) / 4), [-Math.sqrt(1 / 2), -Math.sqrt(1 / 2)]],
		[imag((Math.PI * 5) / 4), [-Math.sqrt(1 / 2), -Math.sqrt(1 / 2)]],
	];
	for (const ary of rsltArray) {
		it("Calculates e^" + ary[0], () => {
			expect(exp(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("log", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(2), real(Math.E ** 2)],
		[imag(Math.PI / 4), [Math.sqrt(1 / 2), Math.sqrt(1 / 2)]],
		[real(-1), real(1 / Math.E)],
		[imag(Math.PI), real(-1)],
		[imag(Math.PI / 2), imag(1)],
		[imag((-Math.PI * 3) / 4), [-Math.sqrt(1 / 2), -Math.sqrt(1 / 2)]],
	];
	for (const ary of rsltArray) {
		it("Calculates ln " + ary[1], () => {
			expect(log(ary[1])).toApproxEqual(ary[0], EPSILON);
		});
	}
});

describe("raise", () => {
	const rsltArray: [ComplexNumber, ComplexNumber, ComplexNumber][] = [
		[real(2), real(5), real(32)],
		[real(-2), real(5), real(-32)],
		[imag(1), real(3), imag(-1)],
		[real(-1), real(0.5), imag(1)],
		[imag(-1), real(0.5), [Math.sqrt(1 / 2), -Math.sqrt(1 / 2)]],
		[real(Math.E), imag(Math.PI / 4), [Math.sqrt(1 / 2), Math.sqrt(1 / 2)]],
		[exp(imag(Math.PI / 4)), real(5), exp(imag((Math.PI * 5) / 4))],
		[imag(1), imag(1), real(Math.E ** (-Math.PI / 2))],
	];
	for (const ary of rsltArray) {
		it("Raises " + ary[0] + " to " + ary[1], () => {
			expect(raise(ary[0], ary[1])).toApproxEqual(ary[2], EPSILON);
		});
	}
});

describe("sqrt", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(-1), imag(1)],
		[imag(-1), [Math.sqrt(1 / 2), -Math.sqrt(1 / 2)]],
	];
	for (const ary of rsltArray) {
		it("Gets square root of " + ary[0], () => {
			expect(sqrt(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("sine", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(0), real(0)],
		[real(Math.PI / 2), real(1)],
		[imag(Math.PI), imag(Math.sinh(Math.PI))],
		[imag(-1), imag(-Math.sinh(1))],
	];
	for (const ary of rsltArray) {
		it("Gets sine of " + ary[0], () => {
			expect(sine(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("cosine", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(0), real(1)],
		[real(Math.PI / 2), real(0)],
		[imag(Math.PI), real(Math.cosh(Math.PI))],
		[imag(-1), real(Math.cosh(1))],
	];
	for (const ary of rsltArray) {
		it("Gets cosine of " + ary[0], () => {
			expect(cosine(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("sinh", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(0), real(0)],
		[imag(Math.PI), real(0)],
		[imag(Math.PI / 2), imag(1)],
		[imag(-1), imag(-Math.sin(1))],
	];
	for (const ary of rsltArray) {
		it("Gets sinh of " + ary[0], () => {
			expect(sinh(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("cosh", () => {
	const rsltArray: [ComplexNumber, ComplexNumber][] = [
		[real(0), real(1)],
		[imag(Math.PI), real(-1)],
		[imag(Math.PI / 2), real(0)],
		[imag(-1), real(Math.cos(1))],
	];
	for (const ary of rsltArray) {
		it("Gets cosh of " + ary[0], () => {
			expect(cosh(ary[0])).toApproxEqual(ary[1], EPSILON);
		});
	}
});

describe("tetrate", () => {
	const rsltArray: [ComplexNumber, number, ComplexNumber][] = [
		[real(2), 3, real(2 ** (2 ** 2))],
		[real(-2), 2, real(1 / 4)],
		[real(-2), 3, raise(real(-2), real(1 / 4))],
		[imag(1), 2, real(Math.E ** (-Math.PI / 2))],
		[imag(1), 3, raise(imag(1), real(Math.E ** (-Math.PI / 2)))],
		[imag(1), 4, raise(imag(1), raise(imag(1), real(Math.E ** (-Math.PI / 2))))],
	];
	for (const ary of rsltArray) {
		it("Tetrates " + ary[0] + " for " + ary[1] + " times", () => {
			expect(tetrate(ary[0], ary[1])).toApproxEqual(ary[2], EPSILON);
		});
	}
});
