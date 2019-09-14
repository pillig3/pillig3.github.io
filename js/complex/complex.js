import {ComNum} from '/js/complex/complexNumbers.js';
import {strToFunc} from '/js/complex/funcTrees.js';

// Pretty functions:
// 1/x ln(x-1)^2
// -i + 1/x^3
// exp(1/(x^3/9))
// i x^2/((x-1)(x-(-1/2+3^(1/2)i/2))(x-(-1/2-3^(1/2)i/2)))
// (1/((x/1)^5)-i)(1/((x/4)^5)+i)
// (1/((x/1)^5)-i)(1/((x/4)^5)+i)(1/(x/2)^5-1)(1/(x/3)^5+1)
// sin(ln(exp(x^2)))sin(ln(exp(x^3-pi/2)))

function dgebi(e) { return document.getElementById(e); }
var input = dgebi('mainInput');
var widthInput = dgebi('widthInput');
var heightInput = dgebi('heightInput');
var allInputDiv = dgebi('allInputDiv');
var inputBoxes = ['mainInput', 'widthInput', 'heightInput'];
var otherDivs = ['plusDiv', 'minusDiv'];
var canvas = dgebi('myCanvas');
var ctx = canvas.getContext('2d');
var imageData = new ImageData(canvas.width, canvas.height);
var data = imageData.data;
var plusButton = dgebi('plusDiv');
var minusButton = dgebi('minusDiv');
var originButton = dgebi('originDiv');
var errorDiv = dgebi('errorDiv');
var chevronDiv = dgebi('chevronDiv');
var lastTimeoutID;
var view = {
  center: [0, 0],
  width: 10,
  height: (window.innerHeight / window.innerWidth)*10,
  setHeight: function(width){
    this.height = (window.innerHeight / window.innerWidth)*width;
  },
  manuallySet: 0,
  hasChanged: 0,
  lastFunc: ((x) => 0)
};

for (var name of ['inputDiv', 'widthDiv', 'heightDiv']) {
  dgebi(name).addEventListener('click', onInputDivClick);
}
plusButton.addEventListener('click', (e) => { zoomIn(); });
minusButton.addEventListener('click', (e) => { zoomOut(); });
originButton.addEventListener('click', (e) => { center(); });

allInputDiv.addEventListener('keydown', onInputKey);
canvas.addEventListener('keydown', onCanvasKey);

window.onresize = (() => {view.hasChanged = 1;});
window.onload = function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  var hash = window.location.hash;
  if (hash !== '' && hash !== '#') {
    setTimeout(() => {
      drawFromHash(hash.replace(/%20/g, ' '));
    });
  }
  view.hasChanged = 1;
}


// Drag and drop
var dragStart;
canvas.onmousedown = function(e) {
  canvas.onmousemove = dragCanvas;
  dragStart = [e.pageX, e.pageY];
  if (lastTimeoutID !== undefined) {
    clearTimeout(lastTimeoutID);
  }
}

canvas.onmouseup = function(e) {
  canvas.onmousemove = undefined;
  // if (Math.abs(e.pageX-dragStart[0]) < 2 && Math.abs(e.pageY-dragStart[1]) < 2) {
  //   // user probs wasn't trying to drag
  //   return;
  // }
  let dx = ((e.pageX-dragStart[0])/canvas.width)*view.width;
  let dy = -((e.pageY-dragStart[1])/canvas.height)*view.height;
  view.center = [view.center[0]-dx, view.center[1]-dy];
  imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
  data = imageData.data;

  draw(view.lastFunc);
}

function dragCanvas(e) {
  let [dx, dy] = [e.pageX-dragStart[0], e.pageY-dragStart[1]];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imageData, dx, dy);
}

// Origin button
function center() {
  view.center = [0, 0];
  view.width = 10;
  view.setHeight(view.width);
  view.hasChanged = 1;
  view.manuallySet = 0;
  draw(view.lastFunc);
}


//========================//
//          ZOOM          //
//========================//

const MAX_SPEED = 600;
const floor = Math.floor;

// Zoom in to half the current window size
function zoomIn(){
  // Make quick pixellated version to show while loading
  let [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
  imageData = ctx.getImageData(Math.ceil(pixelWidth/4), Math.ceil(pixelHeight/4), floor(3*pixelWidth/4), floor(3*pixelHeight/4));
  data = imageData.data;
  let newData = new Uint8ClampedArray(pixelWidth*pixelHeight*4);
  let ind = 0;
  for (var row = 0; row < pixelHeight; row++) {
    let dataInd = floor(row/2)*imageData.width*4;
    for (var col = 0; col < pixelWidth; col++) {
      newData[ind] = data[dataInd];
      newData[ind+1] = data[dataInd+1];
      newData[ind+2] = data[dataInd+2];
      newData[ind+3] = data[dataInd+3];
      ind += 4;
      if (col%2 == 1) {
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

// Zoom out to twice the current window size
function zoomOut(){
  // Make quick pixellated version to show while loading
  let [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
  imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
  data = imageData.data;
  let newData = new Uint8ClampedArray(floor(pixelWidth/2)*floor(pixelHeight/2)*4);
  let dataInd = 0, ind = 0;
  for (var row = 0; row < floor(pixelHeight/2); row++) {
    dataInd = pixelWidth*2*row*4;
    for (var col = 0; col < floor(pixelWidth/2); col++) {
      newData[ind] = data[dataInd];
      newData[ind+1] = data[dataInd+1];
      newData[ind+2] = data[dataInd+2];
      newData[ind+3] = data[dataInd+3];
      ind += 4;
      dataInd += 8;
    }
  }
  ctx.fillRect(0, 0, pixelWidth, pixelHeight);
  ctx.putImageData(new ImageData(newData, floor(pixelWidth/2)), floor(pixelWidth/4), floor(pixelHeight/4));
  imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
  data = imageData.data;
  // Now draw more detailed image
  view.width *= 2;
  view.height *= 2;
  draw(view.lastFunc);
}



//========================//
//       keypresses       //
//========================//

// when focus is on the canvas
function onCanvasKey(e) {
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  switch (e.code) {
    case 'Tab':
      e.preventDefault();
      input.focus();
      break;
    case 'Equal':
      zoomIn();
      break;
    case 'Minus':
      zoomOut();
      break;
  }
}

// Since the <textarea>s are padded, sets focus from the containing
// div to the <textarea> if user clicks div outside of textarea
function onInputDivClick(e) {
  if (e.path[0].children.length>0 && e.path[0].children[0]) {
    e.path[0].children[0].focus();
  }
}

// When button pressed in one of the input boxes
function onInputKey(e) {
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  let elem = e.path[0].id;
  // console.log(elem);
  switch (e.code) {
    case 'Enter':
      e.preventDefault();
      if (inputBoxes.includes(elem)) {
        drawOnEnter();
        break;
      }
      // Otherwise see if it's plus or minus
    case 'Space':
      if (elem === 'plusDiv') {
        zoomIn();
      } else if (elem === 'minusDiv') {
        zoomOut();
      }
      break;
  }
}

// Draw what they entered
function drawOnEnter() {
  let f;
  let str = input.value;
  if (typeof str !== 'string' || str == ''){ return; }
  setViewHW('width', widthInput.value);
  setViewHW('height', heightInput.value);
  try {
    f = strToFunc(str);
  } catch (e) {
    logError(e);
    return;
  }
  draw(f, (view.lastFuncStr === str ? false : true));
  view.lastFuncStr = str;
}

// Set height or width
function setViewHW(prop, val) {
  if (val === '') {
    return;
  }
  let newVal = parseFloat(val);
  if (typeof newVal !== 'number' || newVal <= 0 || [NaN, Infinity].includes(newVal)) {
    logError(prop[0].toUpperCase() + prop.slice(1) + ' should be a positive number')
  } else if (newVal !== view[prop]) {
    view[prop] = newVal;
    view.hasChanged = true;
    view.manuallySet = true;
  }
}

function logError(e) {
  errorDiv.innerHTML = '❗&nbsp;&nbsp;&nbsp;&nbsp;' + e + '&nbsp;&nbsp;&nbsp;&nbsp;❗';
  errorDiv.classList.add('visible');
  setTimeout((ed) => { ed.classList.remove('visible'); }, 4000, errorDiv);
}



//=======================//
//   Drawing functions   //
//=======================//

function draw(f, showLowRes) {
  view.lastFunc = f;
  let pixelWidth = canvas.width;
  let pixelHeight = canvas.height;
  if (view.hasChanged) {
    if (!view.manuallySet) {
      view.setHeight(view.width);
    }
    imageData = new ImageData(pixelWidth, pixelHeight);
    data = imageData.data;
    showLowRes = true;
    view.hasChanged = 0;
  }
  widthInput.value = view.width;
  heightInput.value = view.height;
  if (lastTimeoutID !== undefined) {
    clearTimeout(lastTimeoutID);
  }
  let toCoords = getPixelToCoords(pixelWidth, pixelHeight);
  let scaleMod = getScaleMod(f, toCoords, pixelWidth, pixelHeight)

  if (showLowRes) {
    drawLowRes(f, toCoords, scaleMod, pixelWidth, pixelHeight);
  }
  lastTimeoutID = setTimeout(drawTimeout, 0, f, 0, toCoords, scaleMod, pixelWidth, pixelHeight);
}

// Draw a low resolution version of the image while full image loads
const NUM_PIXELS = 20;
function drawLowRes(f, toCoords, scaleMod, width, height) {
  let ind;
  for (var row = 0; row < Math.ceil(height / NUM_PIXELS); row++) {
    for (var col = 0; col < Math.ceil(width / NUM_PIXELS); col++) {
      let i = col*NUM_PIXELS;
      let j = row*NUM_PIXELS;
      let [x, y] = toCoords(i + NUM_PIXELS/2, j + NUM_PIXELS/2);
      let res = f(new ComNum(x, y));
      let [r, g, b] = hl2rgb(res.θ, scaleMod(res.r));
      let baseInd = ind = width*4*j + 4*i;
      for (j = 0; j < NUM_PIXELS; j++) {
        ind = baseInd + width*4*j
        for (i = 0; i < NUM_PIXELS; i++) {
          data[ind] = r;
          data[ind+1] = g;
          data[ind+2] = b;
          data[ind+3] = 255; // Always 255
          ind += 4;
        }
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
}


//Draw image & update screen every handful of columns
function drawTimeout(f, i, toCoords, scaleMod, width, height) {
  if (i >= width) {
    return;
  }
  let ind,x,y,res,r,g,b;
  for (var k=0; k < 5 && i < width; k++) {
    for (var j = 0; j < height; j++) {
      ind = width * 4 * j + 4 * i;
      [x, y] = toCoords(i, j);
      res = f(new ComNum(x, y));
      [r, g, b] = hl2rgb(res.θ, scaleMod(res.r));
      data[ind] = r;
      data[ind+1] = g;
      data[ind+2] = b;
      data[ind+3] = 255; // Always 255
    }
    i++;
  }
  ctx.putImageData(imageData, 0, 0);
  lastTimeoutID = setTimeout(() => {drawTimeout(f, i, toCoords, scaleMod, width, height);});
}

// Get func to turn modulus\in[0,\infty) into Lightness\in[0,1]
function getScaleMod(f, toCoords, width, height) {
  let mods = [];
  let samples = 6;
  let x,y,mod;
  for (var i = 0; i < width; i += Math.floor(width/samples)) {
    for (var j = 0; j < height; j += Math.floor(height/samples)) {
      [x, y] = toCoords(i, j);
      mod = f(new ComNum(x, y)).r;
      if (![NaN, Infinity, undefined].includes(mod)) {
        mods.push(mod);
      }
    }
  }
  if (mods.length === 0) {
    return ((x) => 0); // give up.
  }
  // let avg = mods.reduce((x, y) => x+y) / samples**2;
  let avg = getMedian(mods);
  let max = Math.max(...mods);
  // max = Math.max(...mods.filter((x) => (x < max))); // ?
  let count=0;
  let sd = Math.sqrt(mods.map((x) => (x-avg)**2).reduce(((x, y) => {
    if (y === Infinity) {
      return x;
    } else {
      count++;
      return x+y;
    }
  }), 0));
  if (count !== 0) {
    sd = sd / count;
  }
  // finally the actual function
  // https://www.desmos.com/calculator/ef7xcjgqtn
  return function(x) {
    if (x >= avg) {
      if (x === Infinity) {
        return 1;
      }
      return 1/(1 + Math.E**(-(x-avg)/(2**(max))));
    }
    return Math.sqrt(avg**2 - ((Math.max(x, 0)*avg)**(1/2) - avg)**2) / (2*avg);
  }
}

// Returns f such that f(i, j) = [x, y]
// where i,j are the pixel coordinates
// and x, y are real and imaginary parts
function getPixelToCoords(pixelWidth, pixelHeight) {
  let centerX = view.center[0];
  let centerY = view.center[1];
  let width = view.width;
  let height = view.height;
  return function(i, j) {
    return [
      centerX - width/2 + (i/pixelWidth)*width,
      centerY + height/2 - (j/pixelHeight)*height
    ];
  }
}

// get median
function getMedian(ary) {
  ary.sort((x,y) => y-x);
  if (ary.length % 2 === 0) {
    return (ary[Math.floor(ary.length/2)] + ary[Math.floor(ary.length/2)+1])/2;
  }
  return ary[Math.floor(ary.length/2)];
}

// turns Hue \in [0,2\pi] and Lightness \in [0,1] into RGB color
// Input is an HSL color with S = 1
// Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
// Returns [r, g, b] \in {0, 1, ..., 255}^3
function hl2rgb(h, l) {
  h = realMod(h, 2*Math.PI);
  let h1 = h / (Math.PI/3);
  let c = 1 - Math.abs(2*l - 1);
  let x = c*(1 - Math.abs(h1%2 - 1));
  let r,g,b;
  if (c === 0) {
    [r,g,b] = [0,0,0];
  } else if (h1 <= 1) {
    [r,g,b] = [c,x,0];
  } else if (h1 <= 2) {
    [r,g,b] = [x,c,0];
  } else if (h1 <= 3) {
    [r,g,b] = [0,c,x];
  } else if (h1 <= 4) {
    [r,g,b] = [0,x,c];
  } else if (h1 <= 5) {
    [r,g,b] = [x,0,c];
  } else { // h1 <= 6
    [r,g,b] = [c,0,x];
  }
  let m = l-c/2;
  return [r,g,b].map((x) => Math.floor((x+m)*255));
}

function realMod(x, y) {
  if (x < 0) {
    return Math.abs(y) + x%y;
  } else {
  return x%y;
  }
}

// For when the url has a hash -
// #function&centerX,centerY&width,height
function drawFromHash(hash) {
  let p = hash.indexOf('&');
  if (p === -1) {
    input.value = hash.slice(1);
  } else {
    input.value = hash.slice(1, p);
  }
  let [f, center, wh] = hash.slice(1).split('&');
  if (center !== undefined && center !== '') {
    view.center = center.split(',').map((x) => parseFloat(x));
  }
  if (wh !== undefined && wh !== '') {
    let [width, height] = wh.split(',').map((x) => parseFloat(x));
    view.width = width;
    if (height !== undefined) {
      view.height = height;
      view.manuallySet = 1;
    } else {
      view.setHeight(width);
    }
    view.hasChanged = 1;
  }
  try {
    f = strToFunc(f);
  } catch (e) {
    logError(e);
    return;
  }
  draw(f, true);
}
