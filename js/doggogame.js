var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1003;
canvas.height = 620;

var radius = 20;
var ballColor = '#FFFF00';

var urRadius = 10;
var urX = canvas.width/2;
var urY = canvas.height-50;
var maxJumps = 2;var jumpsLeft = maxJumps;var canJump = true;
var grav = 0.05;
var urVel = 0;

var boxList = [[20,30,40,20,getRandomColor()],[800,300,20,20,getRandomColor()]];


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var x = canvas.width/2;
var y = canvas.height/2;
var dx = 2;
var dy = 2;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();

    if(x + dx + radius > canvas.width || x + dx - radius < 0) {
        dx = -dx;
        ballColor = getRandomColor();
    }
    if(y + dy + radius > canvas.height || y + dy -radius < 0) {
        dy = -dy;
        ballColor = getRandomColor();
    }
    if (Math.sqrt((x-urX)**2+(y-urY)**2)<radius+urRadius) {
        dx = -dx;
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function drawBoxes() {
  for (var i = 0; i < boxList.length; i++) {
    box = boxList[i];
    ctx.beginPath();
    ctx.rect(box[0],box[1],box[2],box[3]);
    ctx.fillStyle = box[4];
    ctx.fill();
    ctx.closePath();
  }
}


function drawU() {
    ctx.beginPath();
    ctx.arc(urX, urY, urRadius, 0, Math.PI*2);
    ctx.fillStyle = "#FF00FF";
    ctx.fill();
    ctx.closePath();
    if (rPressed) {urX += 1.5;}
    if (lPressed) {urX -= 1.5;}
    if (uPressed && jumpsLeft > 0 && canJump) {
      urVel = -4;
      jumpsLeft--;
      canJump = false;
    }
    urVel += grav;
    urY += urVel;
    if (urY + urRadius > canvas.height-20) {
      urY = canvas.height-20-urRadius;
      urVel = 0;
      jumpsLeft = maxJumps;
    }
}

function drawGround() {
  ctx.beginPath();
  ctx.rect(0, canvas.height-20, canvas.width, 20)
  ctx.fillStyle = "#0000FF";
  ctx.fill();
  ctx.closePath();
}

var rPressed = false;
var lPressed = false;
var uPressed = false;
var dPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    switch(e.keyCode) {
      case 39:
        rPressed = true;
        break;
      case 37:
        lPressed = true;
        break;
      case 38:
        uPressed = true;
        break;
      case 40:
        dPressed = true;
        break;
    }
}

function keyUpHandler(e) {
  switch(e.keyCode) {
    case 39:
      rPressed = false;
      break;
    case 37:
      lPressed = false;
      break;
    case 38:
      uPressed = false;
      canJump = true;
      break;
    case 40:
      dPressed = false;
      break;
  }
}



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround();
    drawBoxes();
    drawU();
}
setInterval(draw, 5);
