import {ComNum} from '/js/complex/complexNumbers.js';
import {strToFunc} from '/js/complex/funcTrees.js';

// Pretty functions:
// 1/x ln(x-1)^2
// -i + 1/x^3
// exp(1/(x^3/9))
// i x^2/((x-1)(x-(-1/2+3^(1/2)i/2))(x-(-1/2-3^(1/2)i/2)))
// (1/((x/1)^5)-i)(1/((x/4)^5)+i)
// (1/((x/1)^5)-i)(1/((x/4)^5)+i)(1/(x/2)^5-1)(1/(x/3)^5+1)

document.addEventListener('keydown', onKeyPressed)
var input = document.getElementById('input');
var canvas = document.getElementById('myCanvas');
canvas.onwheel = onWheel;
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

var ctx = canvas.getContext('2d');
var imageData = new ImageData(canvas.width, canvas.height);
var data = imageData.data;
// ctx.putImageData(imageData, 0, 0);
var lastTimeoutID;
var view = {
  center: [0, 0],
  width: 10,
  height: (window.innerHeight / window.innerWidth)*10,
  setHeight: function(width){
    this.height = (window.innerHeight / window.innerWidth)*width;
  },
  manuallySet: 0,
  hasChanged: 0
};



//========================//
//   onAction functions   //
//========================//

const MAX_SPEED = 600; //approx

function onWheel(e) {
  e.preventDefault(); // don't navigate back/forward

  let speed = Math.sqrt(e.deltaX**2 + e.deltaY**2);
  // if(speed > maxSpeed) {
  //   console.log(speed);
  //   maxSpeed = speed;
  // }

}

function onKeyPressed(e) {
  if (e.isComposing || e.keyCode === 229) {
    return;
  }

  switch (e.code) {
    case 'Tab':
      e.preventDefault();
      input.focus();
      break;
    case 'Enter':
      e.preventDefault();
      onEnterPressed();
      break;
    default:
      break;
  }

}

// Draw what they entered
function onEnterPressed() {
  let f;
  let str = input.value;
  if (typeof str !== 'string' || str == ''){ return; }
  try {
    f = strToFunc(str);
  } catch (e) {
    logError(e);
    return;
  }
  draw(f);
}

// Hash is something like
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
  draw(f);
}

// TODO: actually show errors
function logError(e) {
  console.log(e);
}



//=======================//
//   Drawing functions   //
//=======================//

function draw(f) {
  if (view.hasChanged) {
    if (!view.manuallySet) {
      view.setHeight(view.width);
    }
    imageData = new ImageData(canvas.width, canvas.height);
    data = imageData.data;
    view.hasChanged = 0;
  }
  if (lastTimeoutID !== undefined) {
    clearTimeout(lastTimeoutID);
  }
  let pixelWidth = imageData.width;
  let pixelHeight = imageData.height;
  let toCoords = getPixelToCoords(pixelWidth, pixelHeight);
  let scaleMod = getScaleMod(f, toCoords, pixelWidth, pixelHeight)

  let ind,x,y,res,r,g,b;
  lastTimeoutID = setTimeout(drawTimeout, 0, f, 0, toCoords, scaleMod, pixelWidth, pixelHeight);
}

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

// median
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
