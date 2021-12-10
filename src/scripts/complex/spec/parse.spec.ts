import { getNextCloseParen, splitArguments } from "../parse";
import { Token, tokenize, TokenType } from "../tokenize";

describe("splitArguments", () => {
	const rsltArray: [string, Token[][]][] = [
		["2x, tet(1,2)", [tokenize("2x"), tokenize("tet(1,2)")]],
		["e^x,40,5i", [tokenize("e^x"), tokenize("40"), tokenize("5i")]],
		["1,,2", [tokenize("1"), [], tokenize("2")]],
		[",,,,,", [[], [], [], [], [], []]],
		["exp(sin(z))", [tokenize("exp(sin(z))")]],
	];
	for (const ary of rsltArray) {
		it("splits " + ary[0], () => {
			expect(splitArguments(tokenize(ary[0]))).toEqual(ary[1]);
		});
	}
});

describe("getNextCloseParen", () => {
	const rsltArray: [string, number, TokenType, number][] = [
		["(x+y)^2", 0, TokenType.Parenthesis, 4],
		["(x*(y+1)^2)^3", 0, TokenType.Parenthesis, 10],
		["(x*(y+1)^2)^3", 3, TokenType.Parenthesis, 7],
	];
	for (const ary of rsltArray) {
		it("works for " + ary[0] + ", " + ary[1], () => {
			expect(getNextCloseParen(tokenize(ary[0]), ary[1], ary[2])).toBe(ary[3]);
		});
	}
});
