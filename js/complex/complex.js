import {ComNum} from "/js/complex/complexNumbers.js";
import {strToFunc} from "/js/complex/funcTrees.js";


document.addEventListener('keydown', onKeyPressed)
var input = document.getElementById('input');
var canvas = document.getElementById('myCanvas');
canvas.onwheel = onWheel;

var image = new Image(window.innerWidth, window.innerHeight);
image.src = "../photos/black.jpg";
var ctx = canvas.getContext('2d');
var imageData;
var data;
image.onload = function() {
  ctx.drawImage(image, 0, 0);
  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imageData.data;
}

var view = {
  center: [0, 0],
  height: 5,
  width: 5
};

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
    case "Tab":
      e.preventDefault();
      input.focus();
      break;
    case "Enter":
      e.preventDefault();
      onEnterPressed();
      break;
    default:
      break;
  }

}

// Draw what they entered
function onEnterPressed() {
  var f;
  let str = input.value;
  if (typeof str !== "string" || str == ""){ return; }
  try {
    f = strToFunc(str);
  } catch (e) {
    console.log(e); // TODO: better logging errors
    return;
  }
  draw(f);
}

// todo delet
function drawTest() {
  let pixelWidth = imageData.width;
  let pixelHeight = imageData.height;
  for (var i = 0; i < pixelWidth; i++) {
    for (var j = 0; j < pixelHeight; j++) {
      let ind = pixelWidth * 4 * j + 4 * i;
      let [r,g,b] = hl2rgb((i/pixelWidth)*2*Math.PI, j/pixelHeight);
      data[ind] = r;
      data[ind+1] = g;
      data[ind+2] = b;
      data[ind+3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}
//canvas.addEventListener('click', drawTest);


function draw(f) {
  let pixelWidth = imageData.width;
  let pixelHeight = imageData.height;
  let toCoords = getPixelToCoords(pixelWidth, pixelHeight);
  let [avgMod, maxMod] = averageModulus(f, toCoords, pixelWidth, pixelHeight);
  let scaleMod = getScaleMod(avgMod, maxMod);
  let ind,x,y,res,r,g,b;
  for (var i = 0; i < pixelWidth; i++) {
    for (var j = 0; j < pixelHeight; j++) {
      ind = pixelWidth * 4 * j + 4 * i;
      [x, y] = toCoords(i, j);
      res = f(new ComNum(x, y));
      [r, g, b] = hl2rgb(res.θ, scaleMod(res.r));
      data[ind] = r;
      data[ind+1] = g;
      data[ind+2] = b;
      //data[ind+3] = 255; // Always 255
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

// gets function to turn modulus into a Lightness from [0,1]
function getScaleMod(avgMod, maxMod) {
  return function(x) {
    if (x >= avgMod) {
      return 1/(1 + Math.E**(-(x-avgMod)/maxMod));
    } else {
      return Math.sqrt(avgMod**2 - (Math.max(x, 0)-avgMod)**2) / (2*avgMod);
    }
  }
}

// get the avg & max modulus out of 16 points
function averageModulus(f, toCoords, width, height) {
  let mods = [];
  let samples = 4;
  let x,y,res;
  for (var i = 0; i < width; i += Math.floor(width/samples)) {
    for (var j = 0; j < height; j += Math.floor(height/samples)) {
      [x, y] = toCoords(i, j);
      res = f(new ComNum(x, y));
      mods.push(res.r);
    }
  }
  // remove too large numbers
  mods = mods.map((x) => Math.sign(x)*Math.min(Math.abs(x), 2**48));
  let avg = mods.reduce((x, y) => x+y) / samples**2;
  let sd = Math.sqrt(mods.map((x) => (x-avg)**2).reduce((x, y) => x+y) / (samples**2 - 1));
  let max = Math.max(...mods.filter((x) => (Math.abs(x - avg) <= 2*sd))) // max within 2 standard deviations
  return [avg, max];
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

//testing

var cl = console.log;

cl(hl2rgb(0*Math.PI/180, 0.5));
cl(hl2rgb(120*Math.PI/180, 0.5));
cl(hl2rgb(240*Math.PI/180, 0.5));


cl(hl2rgb(0*Math.PI/180, 1));
cl(hl2rgb(120*Math.PI/180, 1));
cl(hl2rgb(240*Math.PI/180, 1));


cl(hl2rgb(0*Math.PI/180, 0));
cl(hl2rgb(120*Math.PI/180, 0));
cl(hl2rgb(240*Math.PI/180, 0));
