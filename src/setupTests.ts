/**
 * Custom matchers for unit tests
 */

type NumOrArray = number | NumOrArray[];

expect.extend({
	toApproxEqual(result: NumOrArray, expected: NumOrArray, tolerance: number): jest.CustomMatcherResult {
		return approxEquals(result, expected, tolerance);
	},
});

/**
 * Compares two numbers or numeric arrays for approximate equality (same shapes and corresponding numbers are at most 'tolerance' apart)
 * @param result The result of the operation
 * @param expected The expected result
 * @param tolerance The tolerance for comparison
 * @returns CustomMatcherResult of true if the result and expected are close, otherwise false and the error message.
 */
function approxEquals(result: NumOrArray, expected: NumOrArray, tolerance: number): jest.CustomMatcherResult {
	const message = "Expected " + expected.toString() + " but got " + result.toString();
	const falseReturnObj = {
		pass: false,
		message: () => message,
	};
	const trueReturnObj = {
		pass: true,
		message: () => "",
	};
	if (typeof result === "object") {
		if (typeof expected !== "object") {
			return falseReturnObj;
		}
		if (result.length !== expected.length) {
			return falseReturnObj;
		}
		for (let i = 0; i < result.length; i++) {
			const resultElem = result[i];
			const expectedElem = expected[i];
			const elemsEqual = approxEquals(resultElem, expectedElem, tolerance);
			if (!elemsEqual.pass) {
				return falseReturnObj;
			}
		}
		return trueReturnObj;
	} else {
		if (typeof expected === "object") {
			return falseReturnObj;
		}
		if (Math.abs(result - expected) <= tolerance) {
			return trueReturnObj;
		} else {
			return falseReturnObj;
		}
	}
}
