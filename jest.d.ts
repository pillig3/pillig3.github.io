/**
 * Custom matchers for unit tests
 */

declare global {
	namespace jest {
		interface Matchers<R> {
			toApproxEqual(expected: NumOrArray, tolerance: number): CustomMatcherResult;
		}
	}
}

type NumOrArray = number | NumOrArray[];

export default undefined;
