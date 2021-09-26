import * as React from "react";
import { useRef } from "react";
import { Dispatch } from "react";
import { MouseEventHandler } from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import BefungeExamples from "./BefungeExamples";
import Card from "./Card";
import Menu from "./Menu";

const ZERO = BigInt(0);
const ONE = BigInt(1);
// If running without showing state, this is the number of steps we should run before setting a timeout
const STEPS_BTWN_CALLBACKS = 1500;
// Number of times we should try to move a pointer over whitespace before setting a timeout
const STEPS_OVER_WHITESPACE = 10000;

var HALT_EXECUTION = false;
var PAUSE_EXECUTION = false;
var DARKMODE = false;
var PAUSE_STATE: PauseState | null = null;

type Point = {
	x: number;
	y: number;
};

class Pointer {
	public ip: Point;
	public delta: Point;

	constructor(ip: Point, delta: Point) {
		this.ip = ip;
		this.delta = delta;
	}
}

type PointerIndex = {
	[x: number]: {
		[y: number]: boolean;
	};
};

/**
 * Main Befunge component
 * @returns Befunge component
 */
const Befunge: React.FC = function (): JSX.Element {
	const [stateShown, toggleStateShown] = useState(true);
	const [pauseInterval, setPauseInterval] = useState("20");
	const [inputText, setInputText] = useState("");
	const [wordWrap, toggleWordWrap] = useState(false);
	const [codeArray, setCodeArray] = useState<(string | bigint)[][]>([]);
	const [stateContent, setStateContent] = useState<JSX.Element>(<React.Fragment />);
	const [stackContent, setStackContent] = useState("");
	const [isRunning, setIsRunning] = useState(false);
	const [paused, setPaused] = useState(false);

	const befungeOutput = useRef<HTMLDivElement>(null);

	const setInputTextAndState = function (text: string) {
		const ary = text.split("\n").map((line) => line.split(""));
		setInputText(text);
		setCodeArray(ary);
		if (stateShown) {
			setStateContent(buildStateContent(ary, {}));
		}
	};

	return (
		<React.Fragment>
			<Menu />
			<div className="title">Befunge 93&ndash;&infin;</div>
			<Card>
				An interpreter for <a href="/befunge-info.html">Befunge 93&ndash;&infin;</a>. <br />
				<BefungeExamples setInputTextAndState={setInputTextAndState} />
			</Card>
			<Card>
				<div className="centered fit_content flex">
					{buildButton("run", isRunning ? "Stop" : "Run", () => {
						if (isRunning) {
							setIsRunning(false);
							setPaused(false);
							HALT_EXECUTION = true;
							PAUSE_EXECUTION = false;
							if (stateShown) {
								setStateContent(buildStateContent(codeArray, {}));
								setStackContent("");
							}
						} else {
							setIsRunning(true);
							setPaused(false);
							runBefunge(
								inputText,
								stateShown,
								parseInt(pauseInterval),
								setCodeArray,
								befungeOutput,
								setStateContent,
								setStackContent,
								setIsRunning,
								false,
							);
						}
					})}
					{buildButton("displayButton", stateShown ? "Hide State" : "Show State", () => {
						if (!isRunning) {
							if (!stateShown) {
								setColors(
									DARKMODE ? "#343434" : "white",
									DARKMODE ? "lightgray" : "black",
									true,
								);
								setStateContent(buildStateContent(codeArray, {}));
							}
							toggleStateShown(!stateShown);
						}
					})}
					{buildButton(
						"step",
						"Step",
						() => {
							if (!isRunning) {
								// First step
								setIsRunning(true);
								setPaused(true);
								runBefunge(
									inputText,
									stateShown,
									parseInt(pauseInterval),
									setCodeArray,
									befungeOutput,
									setStateContent,
									setStackContent,
									setIsRunning,
									true,
								);
							} else {
								// Subsequent step - we should have PAUSE_STATE populated
								if (PAUSE_STATE !== null) {
									setPaused(true);
									PAUSE_EXECUTION = false;
									step(
										PAUSE_STATE.codeArray,
										PAUSE_STATE.pointers,
										PAUSE_STATE.pointerIndex,
										PAUSE_STATE.stacks,
										PAUSE_STATE.stateShown,
										PAUSE_STATE.stateWidth,
										PAUSE_STATE.stateHeight,
										parseInt(pauseInterval),
										PAUSE_STATE.pointersStringmode,
										PAUSE_STATE.outputContent,
										PAUSE_STATE.outputElement,
										PAUSE_STATE.setStateContent,
										PAUSE_STATE.setStackContent,
										PAUSE_STATE.setIsRunning,
										true,
									);
								}
							}
						},
						stateShown,
					)}
					{buildButton(
						"pause",
						paused ? "Resume" : "Pause",
						() => {
							if (!isRunning) {
								return;
							}
							setPaused(!paused);
							onPauseClicked(parseInt(pauseInterval));
						},
						stateShown,
					)}
					<div className={"options_container" + (!stateShown ? " hidden" : "")}>
						<span id="pauseOptions">
							<label htmlFor="pauseInterval">Wait:</label>&nbsp;
							<input
								id="pauseInterval"
								type="number"
								value={pauseInterval}
								onChange={(event) => {
									setPauseInterval(event.target.value);
								}}
							/>
							&nbsp;ms
						</span>
					</div>
				</div>
				{/* End button section / Begin input and output areas */}
				<br />
				<span>
					<label htmlFor="befungeCode">Input</label>
				</span>
				<span className="right_aligned">
					<label htmlFor="dm">Darkmode</label>
					<input
						id="dm"
						type="checkbox"
						checked={DARKMODE}
						onChange={(event) => {
							changeDarkmode(event.target.checked, stateShown, setStateContent, codeArray);
						}}
					/>
				</span>
				<div id="befungeCodeWrapper">
					<textarea
						readOnly={isRunning}
						id="befungeCode"
						placeholder="Write some code here, or choose an example above!"
						rows={10}
						autoFocus={true}
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						spellCheck={false}
						value={inputText}
						onChange={(event) => {
							const text = event.target.value;
							setInputTextAndState(text);
						}}
					/>
				</div>

				<div id="display" className={stateShown ? "" : "nodisp"}>
					<label htmlFor="befungeState">State</label>
					<div className="code_output" id="befungeState">
						{stateContent}
					</div>
					<label htmlFor="befungeStack">Stack</label>
					<div className="code_output" id="befungeStack">
						{stackContent}
					</div>
				</div>

				<div id="output">
					<span>
						<label htmlFor="befungeOutput">Output</label>
					</span>
					<span className="right_aligned">
						<label htmlFor="wrap">Wrap Text</label>
						<input
							id="wrap"
							type="checkbox"
							checked={wordWrap}
							onChange={() => toggleWordWrap(!wordWrap)}
						></input>
					</span>
					<div
						className={"code_output" + (wordWrap ? " word_wrap" : "")}
						id="befungeOutput"
						ref={befungeOutput}
					/>
					<br />
				</div>
			</Card>
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Befunge;

function onPauseClicked(pauseInterval: number): void {
	if (PAUSE_STATE === null) {
		if (PAUSE_EXECUTION === true) {
			// Wait for PAUSE_STATE to be populated
			setTimeout(onPauseClicked);
			return;
		} else {
			PAUSE_EXECUTION = true;
		}
	} else {
		// Resume
		PAUSE_EXECUTION = false;
		step(
			PAUSE_STATE.codeArray,
			PAUSE_STATE.pointers,
			PAUSE_STATE.pointerIndex,
			PAUSE_STATE.stacks,
			PAUSE_STATE.stateShown,
			PAUSE_STATE.stateWidth,
			PAUSE_STATE.stateHeight,
			pauseInterval,
			PAUSE_STATE.pointersStringmode,
			PAUSE_STATE.outputContent,
			PAUSE_STATE.outputElement,
			PAUSE_STATE.setStateContent,
			PAUSE_STATE.setStackContent,
			PAUSE_STATE.setIsRunning,
			false,
		);
		PAUSE_STATE = null;
	}
}

/******************************************************************
 *                                                                *
 *                         Visual functions                       *
 *                                                                *
 ******************************************************************/

/**
 * Change whether darkmode is currently enabled
 * @param newDarkmode New value of darkmode
 * @param setDarkmode Function to set the value of darkmode
 * @param stateShown Whether the state is currently shown
 * @param setStateContent Function to set the state content
 * @param codeArray Current code
 */
function changeDarkmode(
	newDarkmode: boolean,
	stateShown: boolean,
	setStateContent: Dispatch<SetStateAction<JSX.Element>>,
	codeArray: (string | bigint)[][],
): void {
	DARKMODE = newDarkmode;
	document.body.style.backgroundColor = newDarkmode ? "darkgrey" : "#d3eded";
	setColors(newDarkmode ? "#343434" : "white", newDarkmode ? "lightgray" : "black", stateShown);
	if (stateShown) {
		setStateContent(buildStateContent(codeArray, {}));
	}
}

/**
 * Set the colors of the main displayed elements when toggling darkmode
 * @param bkgColor New background color
 * @param txtColor New text color
 * @param stateShown Whether the state is currently shown
 */
function setColors(bkgColor: string, txtColor: string, stateShown: boolean): void {
	const ids = ["befungeOutput", "befungeCode"];
	if (stateShown) {
		ids.push("befungeState", "befungeStack", "pauseInterval");
	}
	for (const id of ids) {
		const el = document.getElementById(id);
		if (el !== null) {
			el.style.backgroundColor = bkgColor;
			el.style.color = txtColor;
		}
	}
}

/**
 * Builds a button to display at the top of befunge
 * @param id ID for the button
 * @param text Display text
 * @param callback onClick function for the button
 * @returns The button element
 */
function buildButton(
	id: string,
	text: string,
	callback?: MouseEventHandler<HTMLButtonElement>,
	stateShown?: boolean,
): JSX.Element {
	return (
		<div className={"button_container" + (stateShown === false ? " hidden" : "")}>
			<button id={id} onClick={callback}>
				{text}
			</button>
		</div>
	);
}

function buildStackContent(curStack: bigint[][]): string {
	let str = "";
	for (let i = curStack.length - 1; i >= 0; i--) {
		const stack = curStack[i];
		str += "[";
		for (const item of stack) {
			str += item.toString() + " ";
		}
		str += "\n";
	}
	return str;
}

/**
 * Builds the content for the "State" section displaying the current program state
 * @param codeArray Current code
 * @param pointerIndex Index of the existing pointers
 * @param darkMode Whether we're currently in dark mode
 * @returns The content to put in the state section
 */
function buildStateContent(codeArray: (string | bigint)[][], pointerIndex: PointerIndex): JSX.Element {
	let childArray: JSX.Element[] = [];
	let key = 0;
	for (const y in codeArray) {
		for (const x in codeArray[y]) {
			const bordered = pointerIndex[x] !== undefined && pointerIndex[x][y] === true;
			let color = "white";
			let title = "";
			let content = "";
			const curItem = codeArray[y][x];
			if (typeof curItem === "string") {
				color = instructionColorTable[curItem];
				if (typeof color === "undefined") {
					if (curItem === " ") {
						title = "32";
						content = curItem;
					} else {
						color = DARKMODE ? "darkgrey" : "lightgrey";
						title = curItem.charCodeAt(0).toString();
						content = curItem;
					}
				} else {
					if (DARKMODE) {
						if (color === "black") {
							color = "lightgrey";
						} else if (color === colorOp) {
							color = "#00abff";
						}
					}
					title = curItem.charCodeAt(0).toString();
					content = curItem;
				}
			} else if (typeof curItem === "undefined") {
				title = "32";
				content = " ";
			} else {
				color = DARKMODE ? "darkgrey" : "lightgrey";
				title = curItem.toString();
				content = "Ø";
			}
			childArray.push(
				<span
					className={bordered ? (DARKMODE ? "bordered_char_darkmode" : "bordered_char") : ""}
					style={{ color: color }}
					title={title}
					key={key++}
				>
					{content === " " ? "\u00A0" : content}
				</span>,
			);
		}
		childArray.push(<br />);
	}

	return <React.Fragment>{...childArray}</React.Fragment>;
}

function printOutput(newString: string | null, curOutput: string, outputElement: HTMLElement): string {
	let newOutput = "";
	if (newString === null) {
		// Signal for backspace (char 8)
		newOutput = curOutput.substring(0, curOutput.length - 1);
	} else {
		newOutput = curOutput + newString;
	}

	outputElement.innerHTML = newOutput;
	outputElement.scrollTop = outputElement.scrollHeight;
	return newOutput;
}

/******************************************************************
 *                                                                *
 *             Functions to actually run the befunge code         *
 *                                                                *
 ******************************************************************/

function runBefunge(
	inputText: string,
	stateShown: boolean,
	pauseInterval: number,
	setCodeArray: Dispatch<SetStateAction<(string | bigint)[][]>>,
	outputRef: React.RefObject<HTMLDivElement>,
	setStateContent: React.Dispatch<React.SetStateAction<JSX.Element>>,
	setStackContent: React.Dispatch<React.SetStateAction<string>>,
	setIsRunning: Dispatch<SetStateAction<boolean>>,
	stepOnce?: boolean,
): void {
	if (isNaN(pauseInterval) || pauseInterval < 0) {
		pauseInterval = 0;
	}
	const codeArray = inputText.split("\n").map((line) => line.split(""));
	setCodeArray(codeArray);
	if (outputRef.current) {
		outputRef.current.innerHTML = "";
	}
	const outputElement = outputRef.current!;
	const stateWidth = codeArray.reduce((x, row) => Math.max(x, row.length), -99);
	const stateHeight = codeArray.length;
	const pointers: Pointer[] = [{ ip: { x: 0, y: 0 }, delta: { x: 1, y: 0 } }];
	const pointerIndex: PointerIndex = { 0: { 0: true } };
	const stacks: bigint[][][] = [[[]]];
	const pointersStringmode = [false];
	if (stateShown) {
		setStateContent(buildStateContent(codeArray, pointerIndex));
	}
	HALT_EXECUTION = false;
	PAUSE_EXECUTION = false;
	PAUSE_STATE = null;

	// Run
	if (stateShown) {
		setTimeout(() => {
			step(
				codeArray,
				pointers,
				pointerIndex,
				stacks,
				stateShown,
				stateWidth,
				stateHeight,
				pauseInterval,
				pointersStringmode,
				"",
				outputElement,
				setStateContent,
				setStackContent,
				setIsRunning,
				stepOnce,
			);
		}, 0);
	} else {
		setTimeout(() => {
			step(
				codeArray,
				pointers,
				pointerIndex,
				stacks,
				false,
				stateWidth,
				stateHeight,
				pauseInterval,
				pointersStringmode,
				"",
				outputElement,
				setStateContent,
				setStackContent,
				setIsRunning,
				false,
			);
		});
	}
}

//This should be the same as the args to step
type PauseState = {
	codeArray: (string | bigint)[][];
	pointers: Pointer[];
	pointerIndex: PointerIndex;
	stacks: bigint[][][];
	stateShown: boolean;
	stateWidth: number;
	stateHeight: number;
	pauseInterval: number;
	pointersStringmode: boolean[];
	outputContent: string;
	outputElement: HTMLElement;
	setStateContent: Dispatch<SetStateAction<JSX.Element>>;
	setStackContent: Dispatch<SetStateAction<string>>;
	setIsRunning: Dispatch<SetStateAction<boolean>>;
};

function step(
	codeArray: (string | bigint)[][],
	pointers: Pointer[],
	pointerIndex: PointerIndex,
	stacks: bigint[][][],
	stateShown: boolean,
	stateWidth: number,
	stateHeight: number,
	pauseInterval: number,
	pointersStringmode: boolean[],
	outputContent: string,
	outputElement: HTMLElement,
	setStateContent: Dispatch<SetStateAction<JSX.Element>>,
	setStackContent: Dispatch<SetStateAction<string>>,
	setIsRunning: Dispatch<SetStateAction<boolean>>,
	stepOnce: boolean = false,
): void {
	if (PAUSE_EXECUTION) {
		PAUSE_STATE = {
			codeArray: codeArray,
			pointers: pointers,
			pointerIndex: pointerIndex,
			stacks: stacks,
			stateShown: stateShown,
			stateWidth: stateWidth,
			stateHeight: stateHeight,
			pauseInterval: pauseInterval,
			pointersStringmode: pointersStringmode,
			outputContent: outputContent,
			outputElement: outputElement,
			setStateContent: setStateContent,
			setStackContent: setStackContent,
			setIsRunning: setIsRunning,
		};
		return;
	}
	if (HALT_EXECUTION) {
		haltExecution(codeArray, stateShown, setStateContent, setStackContent, setIsRunning);
		return;
	}

	const numIters = stateShown ? 1 : STEPS_BTWN_CALLBACKS;
	for (let ctr = 0; ctr < numIters && !HALT_EXECUTION; ctr++) {
		for (let i = 0; i < pointers.length; i++) {
			const ip = pointers[i].ip;
			const delta = pointers[i].delta;
			const toss = stacks[i][stacks[i].length - 1];
			const curCommand = codeArray[ip.y][ip.x];
			let flag = InstructionResult.Continue;
			// If we are currently in string mode
			if (pointersStringmode[i]) {
				if (typeof curCommand === "string") {
					if (curCommand === '"') {
						pointersStringmode[i] = false;
					} else {
						toss.push(BigInt(curCommand.charCodeAt(0)));
					}
				} else if (curCommand === undefined) {
					toss.push(BigInt(32)); // Space
				} else {
					toss.push(curCommand);
				}
			}
			// Not currently in string mode
			else if (typeof curCommand === "bigint") {
				// Do nothing - character out of instruction range
				// (characters in instruction range always saved as strings)
			} else {
				[flag, outputContent, stateWidth, stateHeight] = doInstruction(
					codeArray,
					curCommand,
					stateShown,
					ip,
					delta,
					pointers,
					pointerIndex,
					i,
					pointersStringmode,
					stacks,
					outputContent,
					stateWidth,
					stateHeight,
					outputElement,
				);

				if (flag === InstructionResult.DeletedPointer) {
					i--;
				} else {
					if (flag === InstructionResult.NewPointer) {
						// Update position of new pointer
						updatePosition(
							pointers[i].ip,
							pointers[i].delta,
							stateWidth,
							stateHeight,
							stateShown,
							codeArray,
							pointersStringmode,
							i,
							pointerIndex,
						);
						i++;
					} else if (flag === InstructionResult.Stopped) {
						HALT_EXECUTION = true;
					}
				}
			}
			if (HALT_EXECUTION) {
				break;
			} else if (flag !== InstructionResult.DeletedPointer) {
				updatePosition(
					ip,
					delta,
					stateWidth,
					stateHeight,
					stateShown,
					codeArray,
					pointersStringmode,
					i,
					pointerIndex,
				);
			}
		}
		if (HALT_EXECUTION) {
			break;
		}
	}

	if (stateShown) {
		setStateContent(buildStateContent(codeArray, pointerIndex));
		setStackContent(buildStackContent(stacks[stacks.length - 1]));
	}

	if (HALT_EXECUTION) {
		haltExecution(codeArray, stateShown, setStateContent, setStackContent, setIsRunning);
		return;
	}

	if (stepOnce) {
		PAUSE_STATE = {
			codeArray: codeArray,
			pointers: pointers,
			pointerIndex: pointerIndex,
			stacks: stacks,
			stateShown: stateShown,
			stateWidth: stateWidth,
			stateHeight: stateHeight,
			pauseInterval: pauseInterval,
			pointersStringmode: pointersStringmode,
			outputContent: outputContent,
			outputElement: outputElement,
			setStateContent: setStateContent,
			setStackContent: setStackContent,
			setIsRunning: setIsRunning,
		};
	} else {
		setTimeout(() => {
			step(
				codeArray,
				pointers,
				pointerIndex,
				stacks,
				stateShown,
				stateWidth,
				stateHeight,
				pauseInterval,
				pointersStringmode,
				outputContent,
				outputElement,
				setStateContent,
				setStackContent,
				setIsRunning,
				stepOnce,
			);
		}, pauseInterval);
	}
}

function haltExecution(
	codeArray: (string | bigint)[][],
	stateShown: boolean,
	setStateContent: Dispatch<SetStateAction<JSX.Element>>,
	setStackContent: Dispatch<SetStateAction<string>>,
	setIsRunning: Dispatch<SetStateAction<boolean>>,
): void {
	if (stateShown) {
		setStateContent(buildStateContent(codeArray, {}));
		setStackContent("");
	}
	setIsRunning(false);
	PAUSE_STATE = null;
	PAUSE_EXECUTION = false;
}

const enum InstructionResult {
	NewPointer,
	DeletedPointer,
	Stopped,
	Continue,
}

function updatePointerIndex(pointerIndex: PointerIndex, x: number, y: number, value: boolean): void {
	if (pointerIndex[x] === undefined) {
		pointerIndex[x] = {};
	}
	pointerIndex[x][y] = value;
}

function updatePosition(
	ip: Point,
	delta: Point,
	stateWidth: number,
	stateHeight: number,
	stateShown: boolean,
	codeArray: (string | bigint)[][],
	pointersStringmode: boolean[],
	pointerId: number,
	pointerIndex: PointerIndex,
): void {
	if (stateShown) {
		updatePointerIndex(pointerIndex, ip.x, ip.y, false);
	}
	var ctr = 0;
	do {
		ip.x = (ip.x + delta.x) % stateWidth;
		ip.y = (ip.y + delta.y) % stateHeight;
		if (ip.x < 0) {
			ip.x = stateWidth + ip.x;
		}
		if (ip.y < 0) {
			ip.y = stateHeight + ip.y;
		}
		ctr++;
	} while (
		(codeArray[ip.y] === undefined ||
			codeArray[ip.y][ip.x] === undefined ||
			codeArray[ip.y][ip.x] === " ") &&
		!pointersStringmode[pointerId] &&
		ctr < STEPS_OVER_WHITESPACE
	);
	if (ctr === STEPS_OVER_WHITESPACE) {
		// Likely infinite loop, set timeout so user can quit
		setTimeout(() => {
			updatePosition(
				ip,
				delta,
				stateWidth,
				stateHeight,
				stateShown,
				codeArray,
				pointersStringmode,
				pointerId,
				pointerIndex,
			);
		}, 0);
	} else {
		if (stateShown) {
			updatePointerIndex(pointerIndex, ip.x, ip.y, true);
		}
	}
}

/******************************************************************
 *                                                                *
 *                   YOU SHALL NOT PASS                           *
 *                                                                *
 *                        ,---.                                   *
 *                        /    |                                  *
 *                       /     |                                  *
 *  -Gandalf            /      |                                  *
 *                     /       |                                  *
 *                ___,'        |                                  *
 *              <  -'          :                                  *
 *               `-.__..--'``-,_\_                                *
 *                  |o/ ` :,.)_`>                                 *
 *                  :/ `     ||/)                                 *
 *                  (_.).__,-` |\                                 *
 *                  /( `.``   `| :                                *
 *                  \'`-.)  `  ; ;                                *
 *                  | `       /-<                                 *
 *                  |     `  /   `.                               *
 *  ,-_-..____     /|  `    :__..-'\                              *
 * /,'-.__\\  ``-./ :`      ;       \                             *
 * `\ `\  `\\  \ :  (   `  /  ,   `. \                            *
 *   \` \   \\   |  | `   :  :     .\ \                           *
 *    \ `\_  ))  :  ;     |  |      ): :                          *
 *   (`-.-'\ ||  |\ \   ` ;  ;       | |                          *
 *    \-_   `;;._   ( `  /  /_       | |                          *
 *     `-.-.// ,'`-._\__/_,'         ; |                          *
 *        \:: :     /     `     ,   /  |                          *
 *         || |    (        ,' /   /   |                          *
 *         ||                ,'   /    |                          *
 ******************************************************************
 */

function doInstruction(
	codeArray: (string | bigint)[][],
	curCommand: string | bigint,
	stateShown: boolean,
	ip: Point,
	delta: Point,
	pointers: Pointer[],
	pointerIndex: PointerIndex,
	pointerId: number,
	pointersStringmode: boolean[],
	stacks: bigint[][][],
	outputContent: string,
	stateWidth: number,
	stateHeight: number,
	outputElement: HTMLElement,
): [InstructionResult, string, number, number] {
	const toss = stacks[pointerId][stacks[pointerId].length - 1];
	switch (curCommand) {
		case "q":
			return [InstructionResult.Stopped, outputContent, stateWidth, stateHeight];
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			// Push the number
			toss.push(BigInt(curCommand));
			break;
		case "a":
		case "b":
		case "c":
		case "d":
		case "e":
		case "f":
			// Push 10 through 15
			toss.push(BigInt(curCommand.charCodeAt(0) - 87));
			break;
		case '"':
			// Enter stringmode
			pointersStringmode[pointerId] = true;
			break;
		case "$":
			// Pop
			toss.pop();
			break;
		case ":":
			// Duplicate
			if (toss.length > 0) {
				toss.push(toss[toss.length - 1]);
			}
			break;
		case "\\":
			// Swap
			if (toss.length > 1) {
				const temp = toss[toss.length - 1];
				toss[toss.length - 1] = toss[toss.length - 2];
				toss[toss.length - 2] = temp;
			}
			break;
		case "+":
			// Add
			handleArithmetic(toss, (a, b) => a + b);
			break;
		case "*":
			// Multiply
			handleArithmetic(toss, (a, b) => a * b);
			break;
		case "-":
			// Subtract
			handleArithmetic(toss, (a, b) => a - b);
			break;
		case "/":
			// Divide
			handleArithmetic(toss, (a, b) => (b === ZERO ? ZERO : a / b));
			break;
		case "%":
			// Mod
			handleArithmetic(toss, (a, b) => (b === ZERO ? ZERO : a % b));
			break;
		case ".":
			// Output number
			if (toss.length > 0) {
				outputContent = printOutput(toss.pop()!.toString() + " ", outputContent, outputElement);
			}
			break;
		case ",":
			// Output character
			if (toss.length > 0) {
				const num = bigIntAsInt(toss.pop()!);
				if (num === 8) {
					outputContent = printOutput(null, outputContent, outputElement);
				} else {
					outputContent = printOutput(String.fromCharCode(num), outputContent, outputElement);
				}
			}
			break;
		case "&":
			// Input integer
			const num = prompt("Enter an integer");
			let ints: string[] = [];
			if (num === null) {
				ints = ["0"];
			} else {
				ints = num.match(/-?[0-9]+/) ?? ["0"];
			}
			toss.push(BigInt(ints[0]));
			break;
		case "~":
			// Input character
			const char = prompt("Enter a character");
			if (char === "" || char === null) {
				toss.push(BigInt(10));
			} else {
				toss.push(BigInt(char.charCodeAt(0)));
			}
			break;
		case "!":
			// Not - changes 0 to 1 and nonzero to 0
			if (toss.length > 0) {
				toss[toss.length - 1] = toss[toss.length - 1] === ZERO ? ONE : ZERO;
			}
			break;
		case "#":
			// Skip over next command
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, false);
			}
			ip.x = (ip.x + delta.x) % stateWidth;
			ip.y = (ip.y + delta.y) % stateHeight;
			if (ip.x < 0) {
				ip.x = stateWidth + ip.x;
			}
			if (ip.y < 0) {
				ip.y = stateHeight + ip.y;
			}
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, true);
			}
			break;
		case "<":
			// Left
			delta.x = -1;
			delta.y = 0;
			break;
		case "^":
			// Up
			delta.x = 0;
			delta.y = -1;
			break;
		case ">":
			// Right
			delta.x = 1;
			delta.y = 0;
			break;
		case "v":
			// Down
			delta.x = 0;
			delta.y = 1;
			break;
		case "?":
			// Go away!
			let rand = Math.floor(Math.random() * 4);
			switch (rand) {
				case 0:
					delta.x = -1;
					delta.y = 0;
					break;
				case 1:
					delta.x = 0;
					delta.y = -1;
					break;
				case 2:
					delta.x = 1;
					delta.y = 0;
					break;
				default:
					// 3
					delta.x = 0;
					delta.y = 1;
					break;
			}
			break;
		case "‽":
			// Go away‽
			let rand1 = 0,
				rand2 = 0;
			while (rand1 === 0 && rand2 === 0) {
				rand1 = Math.floor(Math.random() * 2 * codeArray.length + 1) - codeArray.length;
				rand2 = Math.floor(Math.random() * 2 * codeArray[0].length + 1) - codeArray[0].length;
			}
			delta.x = rand1;
			delta.y = rand2;
			break;
		case "`":
			// Greater than
			handleArithmetic(toss, (a, b) => (a > b ? ONE : ZERO));
			break;
		case "|":
			// Up if nonzero
			if (toss.length > 0 && toss.pop() !== ZERO) {
				delta.x = 0;
				delta.y = -1;
			} else {
				delta.x = 0;
				delta.y = 1;
			}
			break;
		case "_":
			// Left if nonzero
			if (toss.length > 0 && toss.pop() !== ZERO) {
				delta.x = -1;
				delta.y = 0;
			} else {
				delta.x = 1;
				delta.y = 0;
			}
			break;
		case "g":
			// Get
			if (toss.length > 1) {
				const y = bigIntAsInt(toss.pop()!);
				const x = bigIntAsInt(toss.pop()!);
				pushItemAtLocation(toss, x, y, codeArray);
			}
			break;
		case "p":
			// Put
			if (toss.length > 2) {
				const y = bigIntAsInt(toss.pop()!);
				const x = bigIntAsInt(toss.pop()!);
				const item = toss.pop()!;
				if (31 < item && item < 127) {
					// If item is a number with a corresponding ASCII character, put that character
					[stateWidth, stateHeight] = putItemOnBoard(
						String.fromCharCode(bigIntAsInt(item)),
						x,
						y,
						codeArray,
						stateWidth,
						stateHeight,
					);
				} else {
					[stateWidth, stateHeight] = putItemOnBoard(
						item,
						x,
						y,
						codeArray,
						stateWidth,
						stateHeight,
					);
				}
			}
			break;
		case "@":
			// Remove current pointer
			if (pointers.length === 1) {
				return [InstructionResult.Stopped, outputContent, stateWidth, stateHeight];
			} else {
				if (stateShown) {
					updatePointerIndex(pointerIndex, ip.x, ip.y, false);
				}
				pointers.splice(pointerId, 1);
				pointersStringmode.splice(pointerId, 1);
				stacks.splice(pointerId, 1);
				return [InstructionResult.DeletedPointer, outputContent, stateWidth, stateHeight];
			}
		case "n":
			// Clear TOSS
			toss.splice(0);
			break;
		case "{":
			// Begin block
			const newToss: bigint[] = [];
			if (toss.length > 0) {
				const n = bigIntAsInt(toss.pop()!);
				// Move the top n items to the new TOSS
				if (toss.length >= n) {
					newToss.push(...toss.splice(toss.length - n));
				} else {
					newToss.push(...new Array<bigint>(n - toss.length).fill(ZERO).concat(toss.splice(0)));
				}
			}
			stacks[pointerId].push(newToss);
			break;
		case "}":
			// End block
			if (stacks[pointerId].length > 1) {
				// Transfer to SOSS
				if (toss.length > 0) {
					const soss = stacks[pointerId][stacks[pointerId].length - 2];
					const n = bigIntAsInt(toss.pop()!);
					if (toss.length >= n) {
						soss.splice.apply(soss, [soss.length, 0, ...toss.splice(toss.length - n)]);
					} else {
						soss.splice.apply(soss, [
							soss.length,
							0,
							...new Array<bigint>(n - toss.length).fill(ZERO).concat(toss),
						]);
					}
				}
				stacks[pointerId].pop();
			}
			break;
		case "u":
			// Stack under stack
			if (toss.length > 0) {
				let n = bigIntAsInt(toss.pop()!);
				for (let j = 0; j < n; j++) {
					const item = stacks[pointerId][stacks[pointerId].length - 2].pop();
					toss.push(item === undefined ? ZERO : item);
				}
			}
			break;
		case "x":
			if (toss.length > 1) {
				delta.y = bigIntAsInt(toss.pop()!);
				delta.x = bigIntAsInt(toss.pop()!);
			}
			break;
		case "[": {
			// Turn left
			const x = delta.x;
			const y = delta.y;
			delta.x = -y;
			delta.y = x;
			break;
		}
		case "]": {
			// Turn right
			const x = delta.x;
			const y = delta.y;
			delta.x = y;
			delta.y = -x;
			break;
		}
		case "w":
			// Compare and turn
			if (toss.length > 1) {
				const b = toss.pop()!;
				const a = toss.pop()!;
				if (a < b) {
					const x = delta.x;
					const y = delta.y;
					delta.x = -y;
					delta.y = x;
				} else if (a > b) {
					const x = delta.x;
					const y = delta.y;
					delta.x = y;
					delta.y = -x;
				}
				// If they're the same, continue straight
			}
			break;
		case "t":
			// New pointer
			const newSOSS: bigint[][] = [];
			for (const stack of stacks[pointerId]) {
				newSOSS.push(stack.slice());
			}
			pointers.splice(pointerId, 0, {
				ip: { x: ip.x, y: ip.y },
				delta: { x: -delta.x, y: -delta.y },
			});
			pointersStringmode.splice(pointerId, 0, false);
			stacks.splice(pointerId, 0, newSOSS);
			return [InstructionResult.NewPointer, outputContent, stateWidth, stateHeight];
		case "'":
			// Fetch character
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, false);
			}
			ip.x = (ip.x + delta.x) % stateWidth;
			ip.y = (ip.y + delta.y) % stateHeight;
			if (ip.x < 0) {
				ip.x = stateWidth + ip.x;
			}
			if (ip.y < 0) {
				ip.y = stateHeight + ip.y;
			}
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, true);
			}
			pushItemAtLocation(toss, ip.x, ip.y, codeArray);
			break;
		case "s":
			// Store character
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, false);
			}
			ip.x = (ip.x + delta.x) % stateWidth;
			ip.y = (ip.y + delta.y) % stateHeight;
			if (ip.x < 0) {
				ip.x = stateWidth + ip.x;
			}
			if (ip.y < 0) {
				ip.y = stateHeight + ip.y;
			}
			if (toss.length > 0) {
				const item = toss.pop()!;
				if (31 < item && item < 127) {
					[stateWidth, stateHeight] = putItemOnBoard(
						String.fromCharCode(bigIntAsInt(item)),
						ip.x,
						ip.y,
						codeArray,
						stateWidth,
						stateHeight,
					);
				} else {
					[stateWidth, stateHeight] = putItemOnBoard(
						item,
						ip.x,
						ip.y,
						codeArray,
						stateWidth,
						stateHeight,
					);
				}
			}
			if (stateShown) {
				updatePointerIndex(pointerIndex, ip.x, ip.y, true);
			}
			break;
		case "r":
			// Reflect
			delta.x *= -1;
			delta.y *= -1;
			break;

		// End of the main cases

		case " ":
			// Should only happen at the very beginning, otherwise we'd have skipped this position
			break;
		default:
			break;
	}

	// If we made it out of the switch statement, continue
	return [InstructionResult.Continue, outputContent, stateWidth, stateHeight];
}

function pushItemAtLocation(toss: bigint[], x: number, y: number, codeArray: (bigint | string)[][]): void {
	if (codeArray[y] === undefined || codeArray[y][x] === undefined) {
		// Push a space
		toss.push(BigInt(32));
	} else {
		const item = codeArray[y][x];
		if (typeof item === "string") {
			toss.push(BigInt(item.charCodeAt(0)));
		} else {
			toss.push(item);
		}
	}
}

function putItemOnBoard(
	item: bigint | string,
	x: number,
	y: number,
	codeArray: (bigint | string)[][],
	stateWidth: number,
	stateHeight: number,
): [number, number] {
	if (x < 0 || y < 0) {
		return [stateWidth, stateHeight];
	}
	if (codeArray[y] === undefined) {
		// Add more rows
		for (let i = 0; i <= y - stateHeight; i++) {
			codeArray.push([]);
		}
		stateHeight = codeArray.length;
	}
	if (codeArray[y][x] === undefined) {
		// Add more columns to current row
		codeArray[y].push(...new Array<string | bigint>(x - codeArray[y].length + 1).fill(" "));
		stateWidth = Math.max(stateWidth, codeArray[y].length);
	}
	codeArray[y][x] = item;
	return [stateWidth, stateHeight];
}

function bigIntAsInt(n: bigint) {
	if (n < -Number.MAX_SAFE_INTEGER) {
		return -Number.MAX_SAFE_INTEGER;
	} else if (n > Number.MAX_SAFE_INTEGER) {
		return Number.MAX_SAFE_INTEGER;
	} else {
		return parseInt(n.toString(10));
	}
}

function handleArithmetic(toss: bigint[], op: (a: bigint, b: bigint) => bigint): void {
	if (toss.length > 1) {
		const b = toss.pop()!;
		const a = toss.pop()!;
		toss.push(op(a, b));
	}
}

// Colors to display instructions
const colorConst = "black";
const colorOp = "blue";
const colorMove = "limegreen";
const colorIO = "#cc00ff";
const colorStack = "orange";
const colorQuit = "red";
const colorStorage = "cyan";

const instructionColorTable: { [char: string]: string } = {
	// Constants
	"0": colorConst,
	"1": colorConst,
	"2": colorConst,
	"3": colorConst,
	"4": colorConst,
	"5": colorConst,
	"6": colorConst,
	"7": colorConst,
	"8": colorConst,
	"9": colorConst,
	a: colorConst,
	b: colorConst,
	c: colorConst,
	d: colorConst,
	e: colorConst,
	f: colorConst,
	// pop -> operation -> push
	"+": colorOp,
	"-": colorOp,
	"*": colorOp,
	"/": colorOp,
	"%": colorOp,
	"!": colorOp,
	"`": colorOp,
	// Movement
	"<": colorMove,
	"^": colorMove,
	">": colorMove,
	v: colorMove,
	"?": colorMove,
	"‽": colorMove,
	_: colorMove,
	"|": colorMove,
	"#": colorMove,
	r: colorMove,
	x: colorMove,
	"[": colorMove,
	"]": colorMove,
	w: colorMove,
	// Stack instructions
	":": colorStack,
	"\\": colorStack,
	$: colorStack,
	n: colorStack,
	"{": colorStack,
	"}": colorStack,
	u: colorStack,
	// I/O(-ish)
	".": colorIO,
	",": colorIO,
	"&": colorIO,
	"~": colorIO,
	'"': colorIO,
	"'": colorIO,
	s: colorIO,
	// Quit
	q: colorQuit,
	"@": colorQuit,
	// Storage
	g: colorStorage,
	p: colorStorage,
	// Misc
	t: "magenta",
};
