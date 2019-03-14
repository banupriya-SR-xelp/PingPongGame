var context;
var dx = 3;
var dy = 3;
var y = 400;
var x = 10;
function draw() {
  context = myCanvas.getContext("2d");
  context.clearRect(0, 0, 800, 800);
  context.beginPath();
  context.fillStyle = "#212121";
  context.arc(x, y, 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  //   if (x == y) {
  //     x = 400;
  //     y = 400;
  //   } else
  if (x < 0) {
    console.log(x);
    dx = -dx;
    dy = +dy;
  } else if (x > 800) {
    dx = -dx;
  }
  if (y < 0) {
    console.log(y);
    dy = -dy;
    dx = +dx;
  } else if (y > 800) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
setInterval(draw, 10);
