import { Token, tokenize, TokenType } from "../tokenize";

describe("tokenize", () => {
	const rsltArray: [string, Token[]][] = [
		["x", [new Token("x", TokenType.String)]],
		["2", [new Token("2", TokenType.Number)]],
		["2x", [new Token("2", TokenType.Number), new Token("x", TokenType.String)]],
		[
			"sin(x^3.14)",
			[
				new Token("sin", TokenType.String),
				new Token("(", TokenType.Parenthesis),
				new Token("x", TokenType.String),
				new Token("^", TokenType.Function),
				new Token("3.14", TokenType.Number),
				new Token(")", TokenType.Parenthesis),
			],
		],
		[
			"tet(z,52)",
			[
				new Token("tet", TokenType.String),
				new Token("(", TokenType.Parenthesis),
				new Token("z", TokenType.String),
				new Token(",", TokenType.Comma),
				new Token("52", TokenType.Number),
				new Token(")", TokenType.Parenthesis),
			],
		],
		[
			"iterate[x^2+z,40,x](z,z)",
			[
				new Token("iterate", TokenType.String),
				new Token("[", TokenType.SquareBracket),
				new Token("x", TokenType.String),
				new Token("^", TokenType.Function),
				new Token("2", TokenType.Number),
				new Token("+", TokenType.Function),
				new Token("z", TokenType.String),
				new Token(",", TokenType.Comma),
				new Token("40", TokenType.Number),
				new Token(",", TokenType.Comma),
				new Token("x", TokenType.String),
				new Token("]", TokenType.SquareBracket),
				new Token("(", TokenType.Parenthesis),
				new Token("z", TokenType.String),
				new Token(",", TokenType.Comma),
				new Token("z", TokenType.String),
				new Token(")", TokenType.Parenthesis),
			],
		],
	];

	for (const ary of rsltArray) {
		it('Gets the correct tokens for "' + ary[0] + '"', () => {
			expect(tokenize(ary[0])).toEqual(ary[1]);
		});
	}
});
