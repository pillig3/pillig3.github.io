import * as React from "react";
import Card from "./Card";
import TeX from "./TeX";
import Menu from "./Menu";
import { useState } from "react";
import chocoJpg from "../images/chocobar.jpg";
import sansPng from "../images/sans1.png";

const MAX_COLS = 10;
const MAX_ROWS = 12;
const NULL_MSG = "-";

let canMove = true;
const messageSpace = React.createRef<HTMLParagraphElement>();
const loadingDiv = React.createRef<HTMLDivElement>();

const Chomp: React.FC = (): JSX.Element => (
	<React.Fragment>
		<Menu />
		<div className="title">Chomp</div>
		<Card>
			Chomp is a two-player game about eating chocolate! The rules are simple: To play, two people (or
			in this case, a person and a computer) take turns removing any square, plus all squares above and
			to the right. E.g. if you take the square with coordinates <TeX>(x,y)</TeX> (the origin is the
			lower left square), then all squares <TeX>(i,j)</TeX> with <TeX>i\geq x</TeX> and{" "}
			<TeX>j \geq y</TeX> are also removed. Whichever player takes the bottom left square loses, and the
			other player wins.
			<p>
				Since this game is <a href="//mathworld.wolfram.com/FiniteGame.html">finite</a>,{" "}
				<a href="//www.whatgamesare.com/determinism.html">deterministic</a>, and{" "}
				<a href="//mathworld.wolfram.com/ImpartialGame.html">impartial</a>, with no draws, we{" "}
				<a href="//en.wikipedia.org/wiki/Zermelo%27s_theorem_(game_theory)">know</a> that one of the
				players always has a winning strategy (can you prove which player it is?). However, this
				strategy is not known in general (for arbitrarily large boards), and only recently have
				results been found for <TeX>3\times n</TeX> boards.
			</p>
		</Card>
		<ChompCard />
		<Card>
			For more information on Chomp, see:
			<ul className="math_list">
				<li>
					<a href="//en.wikipedia.org/wiki/Chomp#Generalisations_of_Chomp">Generalizations</a>
				</li>
				<li>
					<a href="//xorshammer.com/2008/09/29/playing-games-in-the-transfinite-an-introduction-to-ordinal-chomp/">
						Ordinal chomp
					</a>
				</li>
				<li>
					<a href="//www.win.tue.nl/~aeb/games/chomp.html">Interesting variants, open questions</a>
				</li>
				<li>
					<a href="//www.kurims.kyoto-u.ac.jp/EMIS/journals/INTEGERS/papers/fg7/fg7.pdf">
						More variants, work on \(3\times n\) boards
					</a>
				</li>
				<li>
					<a href="//citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.718.8493&rep=rep1&type=pdf">
						General poset games and \(3\times n\) chomp
					</a>
				</li>
			</ul>
		</Card>
	</React.Fragment>
);

export default Chomp;

/**
 * Builds the Card containing the Chomp board
 * @returns The Card with the board, selection buttons, etc.
 */
const ChompCard: React.FC = function (): JSX.Element {
	const [numRows, setNumRows] = useState(3);
	const [numCols, setNumCols] = useState(4);
	const [board, setBoard] = useState<number[]>(new Array(numCols).fill(numRows));

	return (
		<Card>
			<p>What size chocolate bar would you like to play on?</p>
			<div className="centered">
				<select
					id="colSelect"
					defaultValue={numCols}
					onChange={(event) => {
						const newCols = parseInt(event.target.value);
						resetBoard(numRows, newCols, setNumRows, setNumCols, setBoard);
					}}
				>
					{buildOptions(MAX_COLS)}
				</select>
				<TeX>\times</TeX>
				<select
					id="rowSelect"
					defaultValue={numRows}
					onChange={(event) => {
						const newRows = parseInt(event.target.value);
						resetBoard(newRows, numCols, setNumRows, setNumCols, setBoard);
					}}
				>
					{buildOptions(MAX_ROWS)}
				</select>
				&nbsp;&nbsp;
				<button
					onClick={() => {
						const rows = parseInt(
							(document.querySelector("#rowSelect") as HTMLSelectElement)?.value ?? "2",
						);
						const cols = parseInt(
							(document.querySelector("#colSelect") as HTMLSelectElement)?.value ?? "2",
						);
						resetBoard(rows, cols, setNumRows, setNumCols, setBoard);
					}}
				>
					Go!
				</button>
			</div>
			<p />
			{buildChocolateBar(board, setBoard, numRows, numCols)}
			<div className="centered p">
				<div ref={loadingDiv} className="loader centered hidden" />
			</div>
			<p className="hidden" ref={messageSpace}>
				{NULL_MSG}
			</p>
		</Card>
	);
};

/**
 * Resets the board to its completely un-eaten state
 * @param rows Number of rows
 * @param cols Number of columns
 * @param setNumRows Function to set the number of rows
 * @param setNumCols Function to set the number of columns
 * @param setBoard Function to set the board object
 */
function resetBoard(
	rows: number,
	cols: number,
	setNumRows: React.Dispatch<React.SetStateAction<number>>,
	setNumCols: React.Dispatch<React.SetStateAction<number>>,
	setBoard: React.Dispatch<React.SetStateAction<number[]>>,
): void {
	setNumRows(rows);
	setNumCols(cols);
	setBoard(new Array(cols).fill(rows));
	setMessage(NULL_MSG);
	toggleLoadingDiv(false);
}

/**
 * Build the dropdown list for choosing the number of rows or columns
 * @param maxSize Maximum selectable option
 * @returns The <option>s to go inside the <select> node
 */
function buildOptions(maxSize: number): JSX.Element {
	const children: JSX.Element[] = [];
	for (let i = 2; i <= maxSize; i++) {
		children.push(
			<option key={i} value={i}>
				{i}
			</option>,
		);
	}
	return <React.Fragment>{...children}</React.Fragment>;
}

/**
 * Builds the chocolate bar table to be used as game board
 * @param board The board array: [a_1, a_2, ..., a_c], where there are c columns total and a_i chocolate squares in column i
 * @param setBoard Function to set the board object
 * @param numRows Number of rows
 * @param numCols Number of columns
 * @returns The (possibly partly-eaten) chocolate bar 😋
 */
function buildChocolateBar(
	board: number[],
	setBoard: React.Dispatch<React.SetStateAction<number[]>>,
	numRows: number,
	numCols: number,
): JSX.Element {
	const rowList: JSX.Element[] = [];
	for (let row = numRows; row >= 1; row--) {
		const colList: JSX.Element[] = [];
		for (let col = 1; col <= numCols; col++) {
			if (board[col - 1] < row) {
				colList.push(<td key={col}></td>);
			} else {
				colList.push(
					<td
						onClick={() => {
							playerMove(board, setBoard, col, row);
						}}
						key={col}
						className="chomp_square"
						style={{
							backgroundImage:
								(row === 1 && col === 1 ? "url(" + sansPng + ")," : "") +
								"url(" +
								chocoJpg +
								")",
						}}
					></td>,
				);
			}
		}
		rowList.push(<tr key={row}>{...colList}</tr>);
	}
	return (
		<div className="table_container">
			<table className="chocolate">
				<tbody>{...rowList}</tbody>
			</table>
		</div>
	);
}

/**
 * Called when the player clicks a chocolate square
 * @param board The board array
 * @param setBoard Function to set the board object
 * @param c Clicked column
 * @param r Clicked row
 */
function playerMove(
	board: number[],
	setBoard: React.Dispatch<React.SetStateAction<number[]>>,
	c: number,
	r: number,
): void {
	if (canMove) {
		canMove = false;
		board = monch(board, c, r);
		setBoard(board);

		if (isGameOver(board)) {
			setMessage("The computer won! Rats!");
			canMove = true;
		} else {
			toggleLoadingDiv(true);
			setTimeout(() => cpuMove(board, setBoard), 100);
		}
	}
}

/**
 * Monches off the top-right portion of the chocolate bar and returns the new chocolate bar
 * @param board The board array
 * @param c Column to start the monch at
 * @param r Row to start the monch at
 * @returns The new board, post-monch
 */
function monch(board: number[], c: number, r: number): number[] {
	const newBoard = board.slice();
	for (let col = c - 1; col < newBoard.length; col++) {
		newBoard[col] = Math.min(r - 1, newBoard[col]);
	}
	return newBoard;
}

/**
 * Whether the game is over (no more chocolate ☹️)
 * @param board The board array
 * @returns True iff the game is over
 */
function isGameOver(board: number[]): boolean {
	return board.indexOf(0) === 0;
}

/**
 * Makes a move for the computer
 * @param board The board array
 * @param setBoard Function to set the board object
 */
async function cpuMove(
	board: number[],
	setBoard: React.Dispatch<React.SetStateAction<number[]>>,
): Promise<void> {
	const time = Date.now();
	const move = getBestMove(board);
	// Wait a second if necessary to avoid user confusion
	if (Date.now() - time < 1000) {
		await sleep(1000);
	}
	board = monch(board, move[0], move[1]);
	setBoard(board);
	toggleLoadingDiv(false);
	canMove = true;
	if (isGameOver(board)) {
		setMessage("You won! Congrats!");
	}
}

/**
 * Get the best move for the computer to make (if there is one)
 * @param board The board array
 * @returns The best [column, row] to monch next
 */
function getBestMove(board: number[]): [number, number] {
	// We try to move to a losing position
	for (let c = 1; c <= board.length; c++) {
		for (let r = 1; r <= board[c - 1]; r++) {
			const nextPos = monch(board, c, r);
			// If human has to move from a losing position, we can force a win
			if (isLosingPosition(nextPos)) {
				return [c, r];
			}
		}
	}
	// Otherwise, play mostly randomly
	const numSquares = board.reduce((a, b) => a + b);
	let n = Math.floor(Math.random() * numSquares) + 1;
	if (numSquares > 3) {
		// Don't obviously lose if we can help it
		while (n === 1 || n === 2 || n === board[0] + 1) {
			n = Math.floor(Math.random() * numSquares) + 1;
		}
	}
	// Find corresponding row & col
	let c = 0;
	while (n > board[c]) {
		n -= board[c];
		c += 1;
	}
	c += 1;
	return [c, n];
}

/**
 * Determines whether the entered board is a "losing position"
 * (a position where, if you must move from it, you can be forced
 * into a loss if your opponent plays optimally)
 * @param pos Board state to check
 * @returns True iff the board is a losing position
 */
function isLosingPosition(pos: number[]): boolean {
	if (pos.reduce((a, b) => a + b) === 0) {
		return false;
	}
	// Give pos max length for comparison
	const posCopy = pos.slice();
	if (posCopy.length < 10) {
		posCopy.push(...new Array(10 - posCopy.length).fill(0));
	}
	// Search for losing position
	if (LPS[getIndexString(posCopy)]) {
		return true;
	} else if (WPS[getIndexString(posCopy)]) {
		return false;
	}
	for (let c = 1; c <= posCopy.length; c++) {
		for (let r = 1; r <= posCopy[c - 1]; r++) {
			// If you can reach a losing position, you're not at one now
			if (isLosingPosition(monch(posCopy, c, r))) {
				WPS[getIndexString(posCopy)] = true;
				return false;
			}
		}
	}
	// If none of the possible moves got us to a losing position, then we're at a losing position now
	LPS[getIndexString(posCopy)] = true;
	return true;
}

/**
 * Get the string used to index the position tables
 * @param pos Board state
 * @returns The standard string used for indexing
 */
function getIndexString(pos: number[]): string {
	return "[" + pos.toString() + "]";
}

/**
 * Wait for an amount of time
 * @param ms Milliseconds
 * @returns Promise that resolves after ms milliseconds
 */
function sleep(ms: number): Promise<void> {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * Show a message in the message <div>
 * @param msg Message to show
 */
function setMessage(msg: string): void {
	if (messageSpace.current) {
		messageSpace.current.innerText = msg;
		if (msg === NULL_MSG) {
			messageSpace.current.classList.add("hidden");
		} else {
			messageSpace.current.classList.remove("hidden");
		}
	}
}

/**
 * Toggle whether the loading animation is visible
 * @param loading True if we're loading something (and should show the animation)
 */
function toggleLoadingDiv(loading: boolean): void {
	if (loadingDiv.current) {
		if (!loading) {
			loadingDiv.current.classList.add("hidden");
		} else {
			loadingDiv.current.classList.remove("hidden");
		}
	}
}

/* table of winning positions */
const WPS: { [key: string]: boolean } = {
	"[0,0,0,0,0,0,0,0,0,0]": true,
};

/* table of losing positions */
const LPS: { [key: string]: boolean } = {
	"[1,0,0,0,0,0,0,0,0,0]": true,
	"[2,1,0,0,0,0,0,0,0,0]": true,
	"[2,2,1,0,0,0,0,0,0,0]": true,
	"[2,2,2,1,0,0,0,0,0,0]": true,
	"[2,2,2,2,1,0,0,0,0,0]": true,
	"[3,1,1,0,0,0,0,0,0,0]": true,
	"[3,2,0,0,0,0,0,0,0,0]": true,
	"[3,3,1,1,0,0,0,0,0,0]": true,
	"[3,3,2,1,1,0,0,0,0,0]": true,
	"[3,3,3,2,2,0,0,0,0,0]": true,
	"[4,1,1,1,0,0,0,0,0,0]": true,
	"[4,2,1,1,1,0,0,0,0,0]": true,
	"[4,2,2,0,0,0,0,0,0,0]": true,
	"[4,3,0,0,0,0,0,0,0,0]": true,
	"[4,4,2,2,2,0,0,0,0,0]": true,
	"[4,4,3,1,1,0,0,0,0,0]": true,
	"[5,1,1,1,1,0,0,0,0,0]": true,
	"[5,2,1,1,0,0,0,0,0,0]": true,
	"[5,3,2,0,0,0,0,0,0,0]": true,
	"[5,3,3,2,0,0,0,0,0,0]": true,
	"[5,4,0,0,0,0,0,0,0,0]": true,
	"[5,5,2,2,0,0,0,0,0,0]": true,
	"[5,5,3,0,0,0,0,0,0,0]": true,
	"[6,2,2,1,1,0,0,0,0,0]": true,
	"[6,2,2,2,0,0,0,0,0,0]": true,
	"[6,3,1,1,1,0,0,0,0,0]": true,
	"[6,3,3,0,0,0,0,0,0,0]": true,
	"[6,4,2,0,0,0,0,0,0,0]": true,
	"[6,4,3,3,2,0,0,0,0,0]": true,
	"[6,4,4,3,3,0,0,0,0,0]": true,
	"[6,5,0,0,0,0,0,0,0,0]": true,
	"[6,6,3,3,3,0,0,0,0,0]": true,
	"[6,6,4,3,2,0,0,0,0,0]": true,
	"[6,6,5,4,2,0,0,0,0,0]": true,
	"[6,6,6,5,2,0,0,0,0,0]": true,
	"[2,2,2,2,2,1,0,0,0,0]": true,
	"[3,3,2,2,1,1,0,0,0,0]": true,
	"[3,3,3,1,1,1,0,0,0,0]": true,
	"[4,4,1,1,1,1,0,0,0,0]": true,
	"[5,2,2,1,1,1,0,0,0,0]": true,
	"[5,3,1,1,1,1,0,0,0,0]": true,
	"[5,5,4,2,1,1,0,0,0,0]": true,
	"[5,5,5,3,1,1,0,0,0,0]": true,
	"[6,1,1,1,1,1,0,0,0,0]": true,
	"[3,3,2,2,2,1,1,0,0,0]": true,
	"[3,3,3,2,1,1,1,0,0,0]": true,
	"[4,4,2,1,1,1,1,0,0,0]": true,
	"[4,4,3,2,2,1,1,0,0,0]": true,
	"[4,4,3,3,1,1,1,0,0,0]": true,
	"[4,4,4,3,2,1,1,0,0,0]": true,
	"[4,4,4,4,3,1,1,0,0,0]": true,
	"[5,2,2,2,1,1,1,0,0,0]": true,
	"[5,3,3,1,1,1,1,0,0,0]": true,
	"[5,5,1,1,1,1,1,0,0,0]": true,
	"[6,2,1,1,1,1,1,0,0,0]": true,
	"[6,3,2,1,1,1,1,0,0,0]": true,
	"[6,4,3,1,1,1,1,0,0,0]": true,
	"[6,4,4,2,2,1,1,0,0,0]": true,
	"[6,4,4,3,1,1,1,0,0,0]": true,
	"[6,6,2,2,1,1,1,0,0,0]": true,
	"[6,6,3,3,2,1,1,0,0,0]": true,
	"[6,6,4,1,1,1,1,0,0,0]": true,
};
