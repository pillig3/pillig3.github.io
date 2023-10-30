import * as React from "react";
import { Arg, Mod } from "../scripts/complex/complexNumbers";
import { ComplexFunction, strToFunc, strToNum } from "../scripts/complex/parse";
import oWebp from "../images/mathcalO.webp";
import oPng from "../images/mathcalO.png";
import chevronWebp from "../images/chevron.webp";
import chevronPng from "../images/chevron.png";
import iWebp from "../images/i.webp";
import iPng from "../images/i.png";
import linkWebp from "../images/link.webp";
import linkPng from "../images/link.png";
import arWebp from "../images/lockAspectRatio.webp";
import arPng from "../images/lockAspectRatio.png";
import magnifierWebp from "../images/magnifier.webp";
import magnifierPng from "../images/magnifier.png";

const ComplexPlotter: React.FC = (): JSX.Element => (
	<React.Fragment>
		<canvas id="myCanvas" width={1440} height={900} tabIndex={0}></canvas>
		<div id="allInputDiv">
			<div className="input" id="inputDiv">
				<textarea
					id="mainInput"
					contentEditable
					suppressContentEditableWarning={true}
					autoFocus
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck={false}
				/>
				<label htmlFor="mainInput">
					<span className="hoverText">function</span>
				</label>
			</div>
			<div className="input" id="widthDiv">
				<textarea
					id="widthInput"
					contentEditable
					suppressContentEditableWarning={true}
					autoFocus
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck={false}
				/>
				<label htmlFor="widthInput">
					<span className="hoverText">width</span>
				</label>
			</div>
			<div className="input" id="heightDiv" hidden>
				<textarea
					id="heightInput"
					contentEditable
					suppressContentEditableWarning={true}
					autoFocus
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck={false}
				/>
				<label htmlFor="heightInput">
					<span className="hoverText">height</span>
				</label>
			</div>
			<div className="input" id="centerDiv">
				<textarea
					id="centerInput"
					contentEditable
					suppressContentEditableWarning={true}
					autoFocus
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck={false}
				/>
				<label htmlFor="centerInput">
					<span className="hoverText">center</span>
				</label>
			</div>
			{/* Buttons */}
			<div id="plusMinusDiv">
				<div className="input" id="minusDiv" tabIndex={0}>
					<div className="horiz"></div>
				</div>
				<div className="input" id="plusDiv" tabIndex={0}>
					<div className="horiz"></div>
					<div className="vert"></div>
				</div>
				<div className="input" id="chevronDiv" tabIndex={0}>
					<picture style={{ verticalAlign: "middle" }}>
						<source type="image/webp" srcSet={chevronWebp} />
						<img src={chevronPng} height="100%" width="100%" alt="" />
					</picture>
				</div>
				<br />
				<div id="menuBox" hidden>
					<div className="input" id="originDiv" tabIndex={0}>
						<picture style={{ verticalAlign: "middle" }}>
							<source type="image/webp" srcSet={oWebp} />
							<img src={oPng} height="100%" width="100%" alt="" />
						</picture>
					</div>
					<div className="input" id="ARButton" tabIndex={0}>
						<picture style={{ verticalAlign: "middle" }}>
							<source type="image/webp" srcSet={arWebp} />
							<img src={arPng} height="100%" width="100%" alt="" />
						</picture>
					</div>
					<div className="input" id="rslnButt" tabIndex={0}>
						<picture style={{ verticalAlign: "middle" }}>
							<source type="image/webp" srcSet={magnifierWebp} />
							<img src={magnifierPng} height="100%" width="100%" alt="" />
						</picture>
					</div>
					<br />
					<div className="input" id="copyButt" tabIndex={0}>
						<picture style={{ verticalAlign: "middle" }}>
							<source type="image/webp" srcSet={linkWebp} />
							<img src={linkPng} height="100%" width="100%" alt="" />
						</picture>
					</div>
					<div className="input" id="infoButt" tabIndex={0}>
						<picture style={{ verticalAlign: "middle" }}>
							<source type="image/webp" srcSet={iWebp} />
							<img src={iPng} height="100%" width="100%" alt="" />
						</picture>
					</div>
					<br />
				</div>
			</div>
		</div>

		<div id="errorDiv"></div>
	</React.Fragment>
);

export default ComplexPlotter;

const MIN_PIXELS = 20;
function dgebi(id: string): HTMLElement {
	return document.getElementById(id)!;
}
const floor = Math.floor;

var lastTimeout: NodeJS.Timeout | undefined;

interface IHTMLInputWithMemory extends HTMLInputElement {
	lastValue: string;
}

var input: IHTMLInputWithMemory;
var widthInput: IHTMLInputWithMemory;
var heightInput: IHTMLInputWithMemory;
var centerInput: IHTMLInputWithMemory;
var inputBoxes = ["mainInput", "widthInput", "heightInput", "centerInput"];
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var imageData: ImageData;
var data: Uint8ClampedArray;

window.onresize = () => {
	view.hasChanged = true;
};

function onWindowLoad(): void {
	input = dgebi("mainInput") as IHTMLInputWithMemory;
	widthInput = dgebi("widthInput") as IHTMLInputWithMemory;
	heightInput = dgebi("heightInput") as IHTMLInputWithMemory;
	centerInput = dgebi("centerInput") as IHTMLInputWithMemory;
	inputBoxes = ["mainInput", "widthInput", "heightInput", "centerInput"];
	canvas = dgebi("myCanvas") as HTMLCanvasElement;
	ctx = canvas.getContext("2d")!;
	imageData = new ImageData(canvas.width, canvas.height);
	data = imageData.data;

	dgebi("allInputDiv").addEventListener("keydown", onInputKey);
	dgebi("plusMinusDiv").addEventListener("click", onButtonClick);
	canvas.addEventListener("keydown", onCanvasKey);
	for (let name of ["inputDiv", "widthDiv", "heightDiv"]) {
		dgebi(name).addEventListener("click", onInputDivClick);
	}

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	let hash = window.location.hash;
	if (hash !== "" && hash !== "#") {
		setTimeout(drawFromHash, 0, hash.replace(/%20/g, " "));
	} else {
		setCenter(0, 0);
	}
	view.hasChanged = true;

	/**
	 * Begin the drag
	 */
	canvas.onmousedown = function (e: MouseEvent): void {
		if (e.buttons === 2) {
			// right-click
			return;
		}
		canvas.onmousemove = dragCanvas;
		canvas.addEventListener("keydown", abortIfEsc);
		dragStart = [e.pageX, e.pageY];
	};
	/**
	 * When the mouse button is released
	 */
	canvas.onmouseup = function (e: MouseEvent): void {
		canvas.onmousemove = null;
		canvas.removeEventListener("keydown", abortIfEsc);
		if (dragStart === undefined) {
			return;
		}
		if (Math.abs(e.pageX - dragStart[0]) < 5 && Math.abs(e.pageY - dragStart[1]) < 5) {
			// probs wasn't trying to drag
			ctx.putImageData(imageData, 0, 0);
			if (lastTimeout === undefined) {
				draw(view.lastFunc);
			}
			dragStart = undefined;
			return;
		}
		let ratio = imageData.width / window.innerWidth;
		let dx = ((e.pageX - dragStart[0]) / canvas.width) * view.width * ratio;
		let dy = -((e.pageY - dragStart[1]) / canvas.height) * view.height * ratio;
		view.center = [view.center[0] - dx, view.center[1] - dy];
		setCenter(view.center[0], view.center[1]);
		imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		data = imageData.data;

		draw(view.lastFunc);
		dragStart = undefined;
	};
}

window.addEventListener("load", onWindowLoad, false);

//#region View
type Point = [number, number];

interface IView {
	center: Point;
	width: number;
	height: number;
	setHeight: (width: number) => void;
	setWidth: (height: number) => void;
	manuallySet: boolean;
	hasChanged: boolean;
	lastFunc: ComplexFunction | null;
	lastFuncStr: string | null;
	fixAspectRatio: boolean;
}

/**
 * Contains information about the current view
 */
const view: IView = {
	center: [0, 0],
	width: 10,
	height: (window.innerHeight / window.innerWidth) * 10,
	setHeight: function (width: number) {
		this.height = (window.innerHeight / window.innerWidth) * width;
	},
	setWidth: function (height: number) {
		this.width = (window.innerWidth / window.innerHeight) * height;
	},
	manuallySet: false,
	hasChanged: false,
	lastFunc: null,
	lastFuncStr: null,
	fixAspectRatio: true,
};

/**
 * Set the center of the view
 */
function setCenter(x: number, y: number): void {
	view.center = [x, y];
	centerInput.value = x + "+" + y + "i";
	centerInput.lastValue = centerInput.value;
}

//#endregion

//#region Buttons

/**
 * Toggle showing the rest of the buttons
 */
function toggleMenu(): void {
	let menuBox = dgebi("menuBox");
	let chevronDiv = dgebi("chevronDiv");
	if (chevronDiv.classList.contains("upsidedown")) {
		chevronDiv.classList.remove("upsidedown");
		menuBox.hidden = true;
	} else {
		chevronDiv.classList.add("upsidedown");
		menuBox.hidden = false;
	}
}

/**
 * (Un)Fix aspect ratio button
 */
function showOrHideHeight(): void {
	if (view.fixAspectRatio) {
		(dgebi("heightDiv") as HTMLDivElement).hidden = false;
		view.fixAspectRatio = false;
	} else {
		(dgebi("heightDiv") as HTMLElement).hidden = true;
		view.fixAspectRatio = true;
	}
}

/**
 * Origin button - centers at 0 + 0i
 */
function center(): void {
	if (view.center[0] === 0 && view.center[1] === 0) {
		return;
	}
	view.center = [0, 0];
	view.width = 10;
	view.setHeight(view.width);
	setCenter(0, 0);
	view.hasChanged = true;
	view.manuallySet = false;
	draw(view.lastFunc);
}

/**
 * Copy link to clipboard button
 */
function copyLink(): void {
	if (view.lastFuncStr === null) {
		logError("Link could not be copied: no function.");
		return;
	}
	let link = "https://pillig3.github.io/complex.html#";
	link += view.lastFuncStr.replace(/ /g, "%20") + "&"; // Function
	link += view.center[0] + "," + view.center[1] + "&"; // Center
	link += view.width;
	if (!view.fixAspectRatio) {
		link += "," + view.height;
	}
	navigator.clipboard.writeText(link);
}

/**
 * Change resolution button
 */
function changeResolution(): void {
	const pixelWidthStr = prompt(
		"Change resolution:\nEnter a width for the image in pixels",
		canvas.width.toString(),
	);
	if (pixelWidthStr === null || pixelWidthStr === "") {
		return; // Cancel button
	}
	let pixelWidth = parseInt(pixelWidthStr);
	if (isNaN(pixelWidth)) {
		pixelWidth = canvas.width;
	}
	pixelWidth = Math.max(pixelWidth, MIN_PIXELS);

	let pixelHeight = (view.height / view.width) * pixelWidth;
	canvas.width = pixelWidth;
	canvas.height = pixelHeight;
	view.hasChanged = true;

	draw(view.lastFunc, false);
}

//#endregion

//#region Drag 'n' drop

var dragStart: [number, number] | undefined;

/**
 * When the mouse moves while the drag is in progress
 */
function dragCanvas(e: MouseEvent): void {
	if (dragStart === undefined) {
		return;
	}
	const ratio = imageData.width / window.innerWidth;
	const [dx, dy] = [(e.pageX - dragStart[0]) * ratio, (e.pageY - dragStart[1]) * ratio];
	if (lastTimeout !== undefined) {
		clearTimeout(lastTimeout);
		lastTimeout = undefined;
	}
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.putImageData(imageData, dx, dy);
}

/**
 * Abort the drag if user presses the escape button
 */
function abortIfEsc(e: KeyboardEvent): void {
	if (e.code === "Escape") {
		canvas.onmousemove = null;
		dragStart = undefined;
		canvas.removeEventListener("keydown", abortIfEsc);
		ctx.putImageData(imageData, 0, 0);
		if (lastTimeout === undefined) {
			draw(view.lastFunc);
		}
	}
}

//#endregion

//#region Zoom in and out

/**
 * Zoom in to half the current window size
 */
function zoomIn(): void {
	// Make quick pixellated version to show while loading
	const [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
	imageData = ctx.getImageData(
		Math.ceil(pixelWidth / 4),
		Math.ceil(pixelHeight / 4),
		floor((3 * pixelWidth) / 4),
		floor((3 * pixelHeight) / 4),
	);
	data = imageData.data;
	const newData = new Uint8ClampedArray(pixelWidth * pixelHeight * 4);
	let ind = 0;
	for (let row = 0; row < pixelHeight; row++) {
		let dataInd = floor(row / 2) * imageData.width * 4;
		for (let col = 0; col < pixelWidth; col++) {
			newData[ind] = data[dataInd];
			newData[ind + 1] = data[dataInd + 1];
			newData[ind + 2] = data[dataInd + 2];
			newData[ind + 3] = data[dataInd + 3];
			ind += 4;
			if (col % 2 == 1) {
				dataInd += 4;
			}
		}
	}
	imageData = new ImageData(newData, pixelWidth);
	data = imageData.data;
	ctx.putImageData(imageData, 0, 0);
	// Now draw more detailed image
	view.width /= 2;
	view.height /= 2;
	draw(view.lastFunc);
}

/**
 * Zoom out to twice the current window size
 */
function zoomOut(): void {
	// Make quick pixellated version to show while loading
	const [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
	imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
	data = imageData.data;
	const newData = new Uint8ClampedArray(floor(pixelWidth / 2) * floor(pixelHeight / 2) * 4);
	let dataInd = 0,
		ind = 0;
	for (let row = 0; row < floor(pixelHeight / 2); row++) {
		dataInd = pixelWidth * 2 * row * 4;
		for (let col = 0; col < floor(pixelWidth / 2); col++) {
			newData[ind] = data[dataInd];
			newData[ind + 1] = data[dataInd + 1];
			newData[ind + 2] = data[dataInd + 2];
			newData[ind + 3] = data[dataInd + 3];
			ind += 4;
			dataInd += 8;
		}
	}
	ctx.fillRect(0, 0, pixelWidth, pixelHeight);
	ctx.putImageData(
		new ImageData(newData, floor(pixelWidth / 2)),
		floor(pixelWidth / 4),
		floor(pixelHeight / 4),
	);
	imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
	data = imageData.data;
	// Now draw more detailed image
	view.width *= 2;
	view.height *= 2;
	draw(view.lastFunc);
}

//#endregion

//#region Key presses

/**
 * Key pressed when focus is on the canvas
 */
function onCanvasKey(e: KeyboardEvent): void {
	if (e.isComposing) {
		return;
	}
	switch (e.code) {
		case "Tab":
			e.preventDefault();
			input.focus();
			break;
		case "Equal":
			if (!controlKeyHeld(e)) {
				zoomIn();
			}
			break;
		case "Minus":
			if (!controlKeyHeld(e)) {
				zoomOut();
			}
			break;
	}
}

/**
 * Whether one of the 'controlling' keys is held
 */
function controlKeyHeld(e: KeyboardEvent): boolean {
	return e.ctrlKey || e.metaKey || e.altKey;
}

/**
 * Sets focus from the containing div to the <textarea> - otherwise the user could
 * click on a tiny place in the input box and not get to the input field
 */
function onInputDivClick(e: MouseEvent): void {
	if ((e.target as HTMLElement).children.length > 0) {
		(e.target as any).children[0].focus();
	}
}

/**
 * Handler when a button is pressed in one of the input boxes or buttons
 */
function onInputKey(e: KeyboardEvent): void {
	if (e.isComposing) {
		return;
	}
	let elem = (e.target as HTMLElement).id;
	if (inputBoxes.indexOf(elem) >= 0) {
		if (e.code === "Enter") {
			e.preventDefault();
			drawOnEnter();
		}
	} else {
		if (e.code === "Enter" || e.code === "Space") {
			if (elem === "horiz" || elem === "vert") {
				elem = ((e.target as HTMLElement).parentNode as HTMLElement).id;
			}
			doFuncForElem(elem);
		}
	}
}

/**
 * Handler when a button is clicked
 */
function onButtonClick(e: MouseEvent): void {
	let elem = e.target as HTMLElement;
	if (["horiz", "vert"].indexOf((e.target as HTMLElement).classList[0]) >= 0) {
		elem = (e.target as HTMLElement).parentNode as HTMLElement;
	}
	while (
		![
			"plusDiv",
			"minusDiv",
			"originDiv",
			"chevronDiv",
			"copyButt",
			"infoButt",
			"ARButton",
			"rslnButt",
		].includes(elem.id)
	) {
		if (elem.parentNode === null) {
			return;
		} else {
			elem = elem.parentNode as HTMLElement;
		}
	}
	doFuncForElem(elem.id);
}

/**
 * Execute the corresponding function when a doc element is clicked
 */
function doFuncForElem(elem: string) {
	switch (elem) {
		case "plusDiv":
			zoomIn();
			break;
		case "minusDiv":
			zoomOut();
			break;
		case "originDiv":
			center();
			break;
		case "chevronDiv":
			toggleMenu();
			break;
		case "copyButt":
			copyLink();
			break;
		case "infoButt":
			window.open("/complex-info.html");
			break;
		case "ARButton":
			showOrHideHeight();
			break;
		case "rslnButt":
			changeResolution();
			break;
	}
}

//#endregion

//#region Draw

/**
 * Draw what the user entered
 */
function drawOnEnter() {
	let f: ComplexFunction;
	let str = input.value;
	let width = widthInput.value;
	let height = heightInput.value;
	let center = centerInput.value;

	if (center !== centerInput.lastValue) {
		try {
			view.center = strToNum(center);
			centerInput.lastValue = center;
			view.hasChanged = true;
		} catch (e: any) {
			// Just use last valid center
			logError(e, true);
		}
	}
	if (width !== widthInput.lastValue) {
		setViewHW("width", widthInput.value);
		view.manuallySet = true;
	}
	if (height !== heightInput.lastValue) {
		setViewHW("height", heightInput.value);
		view.manuallySet = true;
	}

	if (typeof str !== "string" || str == "") return;
	try {
		f = strToFunc(str);
	} catch (e: any) {
		logError(e);
		return;
	}
	draw(f, view.lastFuncStr !== str);
	view.lastFuncStr = str;
}

/**
 * Set the height or width of the view
 * @returns true if the property was changed
 */
function setViewHW(prop: "width" | "height", val: string): boolean {
	if (val === "") {
		return false;
	}
	let newVal = parseFloat(val);
	if (typeof newVal !== "number" || newVal <= 0 || isNaN(newVal) || newVal === Infinity) {
		logError(prop[0].toUpperCase() + prop.slice(1) + " should be a positive number");
	} else if (newVal !== view[prop]) {
		view[prop] = newVal;
		view.hasChanged = true;
		return true;
	}
	return false;
}

/**
 * Display an error message
 * @param e The error message
 * @param notAnError True if this is more of a 'notification' than an error - the div will be grey rather than yellow
 */
function logError(e: string, notAnError: boolean = false): void {
	let cssClass: string = "";
	let errorDiv = dgebi("errorDiv");
	if (!notAnError) {
		errorDiv.innerHTML = "❗&nbsp;&nbsp;&nbsp;&nbsp;" + e + "&nbsp;&nbsp;&nbsp;&nbsp;❗";
		cssClass = "anError"; // yellow
	} else {
		errorDiv.innerHTML = "❗&nbsp;" + e + "&nbsp;❗";
		cssClass = "notAnError"; // grey
	}

	errorDiv.classList.add("visible");
	errorDiv.classList.add(cssClass);
	setTimeout(
		(ed: HTMLElement) => {
			ed.classList.remove("visible");
			ed.classList.remove(cssClass);
		},
		4000,
		errorDiv,
	);
}

type DrawCallback = () => void;
type PixelToCoordsFunction = (i: number, j: number) => [number, number];
type ScaleModFunction = (arg: number) => number;

/**
 * Draw the entered function
 */
function draw(f: ComplexFunction | null, showLowRes: boolean = false, callback?: DrawCallback): void {
	if (f === null) {
		return;
	}
	view.lastFunc = f;
	let pixelWidth = canvas.width;
	let pixelHeight = canvas.height;
	if (view.hasChanged) {
		if (view.fixAspectRatio || !view.manuallySet) {
			view.setHeight(view.width);
		}
		imageData = new ImageData(pixelWidth, pixelHeight);
		data = imageData.data;
		showLowRes = true;
		view.hasChanged = false;
	}
	widthInput.value = view.width.toString();
	heightInput.value = view.height.toString();
	widthInput.lastValue = widthInput.value;
	heightInput.lastValue = heightInput.value;
	if (lastTimeout !== undefined) {
		clearTimeout(lastTimeout);
	}
	let toCoords = getPixelToCoords(pixelWidth, pixelHeight);
	let scaleMod = getScaleMod(f, toCoords, pixelWidth, pixelHeight);

	if (showLowRes) {
		drawLowRes(f, toCoords, scaleMod, pixelWidth, pixelHeight);
	}
	lastTimeout = setTimeout(() => {
		drawTimeout(f, 0, toCoords, scaleMod, pixelWidth, pixelHeight, callback);
	});
}

/**
 * Draw a low resolution version of the function while the full image loads
 */
function drawLowRes(
	f: ComplexFunction,
	toCoords: PixelToCoordsFunction,
	scaleMod: ScaleModFunction,
	width: number,
	height: number,
): void {
	let ind: number;
	for (let row = 0; row < Math.ceil(height / MIN_PIXELS); row++) {
		for (let col = 0; col < Math.ceil(width / MIN_PIXELS); col++) {
			let i = col * MIN_PIXELS;
			let j = row * MIN_PIXELS;
			let res = f(toCoords(i + MIN_PIXELS / 2, j + MIN_PIXELS / 2));
			let [r, g, b] = hl2rgb(Arg(res)[0], scaleMod(Mod(res)[0]));
			let baseInd = (ind = width * 4 * j + 4 * i);
			for (j = 0; j < MIN_PIXELS; j++) {
				ind = baseInd + width * 4 * j;
				for (i = 0; i < MIN_PIXELS; i++) {
					data[ind] = r;
					data[ind + 1] = g;
					data[ind + 2] = b;
					data[ind + 3] = 255; // Always 255
					ind += 4;
				}
			}
		}
	}
	ctx.putImageData(imageData, 0, 0);
}

/**
 * Draw image and update screen every few columns
 */
function drawTimeout(
	f: ComplexFunction,
	i: number,
	toCoords: PixelToCoordsFunction,
	scaleMod: ScaleModFunction,
	width: number,
	height: number,
	callback: DrawCallback | undefined,
): void {
	if (i >= width) {
		if (callback !== undefined) {
			callback();
		}
		return;
	}

	for (let k = 0; k < 5 && i < width; k++) {
		for (let j = 0; j < height; j++) {
			const ind = width * 4 * j + 4 * i;
			const res = f(toCoords(i, j));
			const [r, g, b] = hl2rgb(Arg(res)[0], scaleMod(Mod(res)[0]));
			data[ind] = r;
			data[ind + 1] = g;
			data[ind + 2] = b;
			data[ind + 3] = 255; // Always 255
		}
		i++;
	}
	ctx.putImageData(imageData, 0, 0);
	lastTimeout = setTimeout(() => {
		drawTimeout(f, i, toCoords, scaleMod, width, height, callback);
	});
}

/**
 * Returns a function that will turn a modulus in [0, Infinity) into a lightness in [0, 1]
 * based on the median & standard deviation of the input function
 */
function getScaleMod(
	f: ComplexFunction,
	toCoords: PixelToCoordsFunction,
	width: number,
	height: number,
): ScaleModFunction {
	let mods = [];
	let samples = 6;
	for (let i = 0; i < width; i += floor(width / samples)) {
		for (let j = 0; j < height; j += floor(height / samples)) {
			const mod = Mod(f(toCoords(i, j)))[0];
			if (!isNaN(mod) && mod !== Infinity && mod !== undefined) {
				mods.push(mod);
			}
		}
	}
	if (mods.length === 0) {
		return (_x) => 0; // give up.
	}
	let avg = getMedian(mods);
	let max = Math.max(...mods);
	let count = 0;
	let sd = Math.sqrt(
		mods
			.map((x) => (x - avg) ** 2)
			.reduce((x, y) => {
				if (y === Infinity) {
					return x;
				} else {
					count++;
					return x + y;
				}
			}, 0),
	);
	if (count !== 0) {
		sd = sd / count;
	}
	// finally the actual function
	// https://www.desmos.com/calculator/ef7xcjgqtn
	return function (x) {
		if (isNaN(x) || x === Infinity) {
			// Color NaN 1 as well so it's not confused with zeros
			return 1;
		}
		if (x >= avg) {
			return 1 / (1 + Math.E ** (-(x - avg) / 2 ** max));
		}
		return Math.sqrt(avg ** 2 - ((Math.max(x, 0) * avg) ** (1 / 2) - avg) ** 2) / (2 * avg);
	};
}

/**
 * Returns a function f such that f(i, j) = [x, y] where i, j are the pixel coordinates and x, y
 * are the real and imaginary parts
 */
function getPixelToCoords(pixelWidth: number, pixelHeight: number): PixelToCoordsFunction {
	const width = view.width;
	const height = view.height;
	return function (i: number, j: number) {
		return [
			view.center[0] - width / 2 + (i / pixelWidth) * width,
			view.center[1] + height / 2 - (j / pixelHeight) * height,
		];
	};
}

/**
 * Get the median value in the array
 */
function getMedian(ary: number[]): number {
	ary.sort((x, y) => y - x);
	if (ary.length % 2 === 0) {
		return (ary[floor(ary.length / 2)] + ary[floor(ary.length / 2) + 1]) / 2;
	}
	return ary[floor(ary.length / 2)];
}

/**
 * Turns a hue in [0, 2pi] and lightness in [0, 1] into an RGB color
 * Input is an HSL color with S = 1
 * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
 */
function hl2rgb(h: number, l: number): number[] {
	if (isNaN(h)) {
		h = 0;
	}
	h = realMod(h, 2 * Math.PI);
	let h1 = h / (Math.PI / 3);
	let c = 1 - Math.abs(2 * l - 1);
	let x = c * (1 - Math.abs((h1 % 2) - 1));
	let r: number, g: number, b: number;
	if (c === 0) {
		[r, g, b] = [0, 0, 0];
	} else if (h1 <= 1) {
		[r, g, b] = [c, x, 0];
	} else if (h1 <= 2) {
		[r, g, b] = [x, c, 0];
	} else if (h1 <= 3) {
		[r, g, b] = [0, c, x];
	} else if (h1 <= 4) {
		[r, g, b] = [0, x, c];
	} else if (h1 <= 5) {
		[r, g, b] = [x, 0, c];
	} else {
		// h1 <= 6
		[r, g, b] = [c, 0, x];
	}
	let m = l - c / 2;
	return [r, g, b].map((x) => floor((x + m) * 255));
}

/**
 * Draw from a hash in the url - this has the form #function&centerX,centerY&width,height
 */
function drawFromHash(hash: string): void {
	let [f, center, wh] = hash.slice(1).split("&");
	if (center !== undefined && center !== "") {
		const viewCenter = center.split(",").map((x) => parseFloat(x));
		if (viewCenter.length === 2) {
			view.center = viewCenter as Point;
		}
	}
	setCenter(view.center[0], view.center[1]);
	if (wh !== undefined && wh !== "") {
		let [width, height] = wh.split(",").map((x) => parseFloat(x));
		view.width = width;
		if (height !== undefined) {
			view.height = height;
			view.manuallySet = true;
			showOrHideHeight();
		} else {
			view.setHeight(width);
		}
		view.hasChanged = true;
	}

	input.value = f;
	view.lastFuncStr = f;

	let func: ComplexFunction;
	try {
		func = strToFunc(f);
	} catch (e: any) {
		logError(e);
		return;
	}
	draw(func, true);
}

/**
 * Gets the real value of x modulo y (none of that 'remainder' stuff)
 */
function realMod(x: number, y: number): number {
	if (x < 0) {
		return Math.abs(y) + (x % y);
	} else {
		return x % y;
	}
}

//#endregion
