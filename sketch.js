let ballX = 100; // Initial x-position of the ball
let ballY = 200; // Initial y-position of the ball
let ballDiameter = 50; // Size of the ball
let speedX = 5; // Speed of the ball in the x-direction

function setup() {
  createCanvas(600, 400); // Create a canvas of 600x400 pixels
  noStroke(); // No outline for the ball
}

function draw() {
  background(200, 225, 200); // Set a light gray background

  // Move the ball by adding the speed to its x-position
  ballX = ballX + speedX;

  // Check if the ball hits the right edge of the canvas
  if (ballX + ballDiameter / 2 > width) {
    speedX = speedX * -1; // Reverse the x-direction
  }

  // Check if the ball hits the left edge of the canvas
  if (ballX - ballDiameter / 2 < 0) {
    speedX = speedX * -1; // Reverse the x-direction
  }

  // Draw the ball
  fill('yellow'); //yellow color for the ball
  ellipse(ballX, ballY, ballDiameter, ballDiameter); // Draw the circle
}
