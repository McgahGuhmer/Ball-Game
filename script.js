// WHERE: x/y
// HOW BIG: diameter or height/width
// HOW FAST: speed

// Variables for the ball
var ballX = Math.floor(Math.random() * 300)+ 50;
var ballY = 50;
var ballDiameter = 50;
var ballXSpeed = 5;
var ballYSpeed = 5;

// Variables for the paddle
var paddleX;
var paddleY;
var paddleWidth = 100;
var paddleHeight = 25;
var paddleSpeed = 10;

var arenaWidth = 200;
var arenaHeight = 200;


function setup() {
  arenaHeight = windowHeight-100;
  arenaWidth = windowWidth-50;
  createCanvas(arenaWidth, arenaHeight);
  
  // Initial paddle location
  paddleX = arenaWidth / 2;
  paddleY = arenaHeight - 100;
}


function draw() {
  // Calculate new Paddle Position
  if (keyIsDown(LEFT_ARROW)) {
    paddleX = paddleX - paddleSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    paddleX = paddleX + paddleSpeed;
  }
  // RULES for moving paddle
  if (paddleX < 0) {
    paddleX = 0;
  } else if (paddleX + paddleWidth> arenaWidth) {
    paddleX = arenaWidth - paddleWidth;
  }

  // Draw paddle
  fill(0, 255, 255);
  noStroke();
  rect(paddleX, paddleY, 
      paddleWidth, paddleHeight);
  }
}