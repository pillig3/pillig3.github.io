export { Token, TokenType, tokenize };

const LETTERS = (() => {
  const letters: string[] = [];
  for (var i = 65; i <= 90; i++) letters.push(String.fromCharCode(i));
  for (var i = 97; i <= 122; i++) letters.push(String.fromCharCode(i));
  return letters;
})();
const DIGITS = '0123456789'.split('');
const ALPHANUMERICS = LETTERS.concat(DIGITS);
const ARITHMETIC_FUNCTIONS = '+-*/^'.split('');

/**
 * Enum for the type of a token
 */
enum TokenType {
  Function,
  Parenthesis,
  String,
  Number,
  Comma,
  SquareBracket,
}

/**
 * Represents a string buffer that gets one character at a time
 */
class StrBuffer {
  // Current position
  ind: number;
  // Array of characters
  ary: string[];

  constructor(str: string) {
    this.ind = 0;
    this.ary = str.split('');
  }

  /**
   * Gets the next character in the string, or undefined if there is not one
   */
  nextChar(): string {
    return this.ary[this.ind++];
  }

  /**
   * Backs up the current position by one
   */
  backup(): void {
    this.ind -= 1;
  }
}

/**
 * Represents one token from the input text
 */
class Token {
  text: string;
  type: TokenType;

  constructor(text: string, type: TokenType) {
    this.text = text;
    this.type = type;
  }
}

/**
 * Tokenizes a string and returns a list of the tokens
 * @param str The input string
 * @returns The list of tokens from the string
 */
function tokenize(str: string): Token[] {
  const sb = new StrBuffer(str);
  const tokens: Token[] = [];
  for (let c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
    let token = c;
    let type: TokenType;
    if (ARITHMETIC_FUNCTIONS.indexOf(c) >= 0) {
      type = TokenType.Function;
    } else if (c === '(' || c === ')') {
      type = TokenType.Parenthesis;
    } else if (c === '[' || c === ']') {
      type = TokenType.SquareBracket;
    } else if (c === ',') {
      type = TokenType.Comma;
    } else if (LETTERS.indexOf(c) >= 0) {
      // variable, i, pi, sin, etc.
      while (ALPHANUMERICS.indexOf(c = sb.nextChar()) >= 0) {
        token += c;
      }
      sb.backup();
      type = TokenType.String;
    } else if (DIGITS.indexOf(c) >= 0 || c === '.') {
      // Number
      let hasDot = (c === '.');
      while (DIGITS.indexOf(c = sb.nextChar()) >= 0 || c === '.') {
        if (c === '.') {
          if (hasDot) {
            throw ('Too many dots in a number: ' + token + '.');
          } else {
            hasDot = true;
          }
        }
        token += c;
      }
      sb.backup();
      type = TokenType.Number;
    } else if (c === ' ') {
      continue;
    } else {
      throw 'Unrecognized character: ' + c;
    }
    tokens.push(new Token(token, type));
  }
  return tokens;
}
