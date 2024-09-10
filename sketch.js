let blockSize = 32;  // Define the size of each block in pixels
let blocks = [];     // Array to store the positions of placed blocks

function setup() {
  createCanvas(640, 480); // Set up a canvas of size 640x480 pixels
  noStroke(); // Disable outlines around shapes
}

function draw() {
  background(200, 230, 255); // Set the background color to sky blue

  // Draw the ground at the bottom of the canvas
  fill(100, 200, 100); // Set the fill color to green for the ground
  rect(0, height - blockSize * 2, width, blockSize * 2); // Draw a green rectangle for the ground, spanning the full width and a height of 2 blocks

  // Loop through the array of blocks and draw each one
  for (let block of blocks) {
    fill(150); // Set the fill color to gray for the blocks
    rect(block.x, block.y, blockSize, blockSize); // Draw a block at the specified (x, y) position
  }

  // Draw the grid on top of everything for block placement guidance
  drawGrid(); // Call the function to display the grid
}

// Function to draw a grid of lines across the canvas to guide block placement
function drawGrid() {
  stroke(200); // Set the stroke color for the grid lines to light gray
  for (let x = 0; x < width; x += blockSize) { // Loop over the width in steps of blockSize
    for (let y = 0; y < height; y += blockSize) { // Loop over the height in steps of blockSize
      noFill(); // Ensure there's no fill for the grid
      rect(x, y, blockSize, blockSize); // Draw a square grid cell
    }
  }
}

// Function to place a block at the mouse click position
function mousePressed() {
  // Calculate the grid-aligned x and y position based on the mouse click
  let x = Math.floor(mouseX / blockSize) * blockSize;
  let y = Math.floor(mouseY / blockSize) * blockSize;

  // Ensure blocks cannot be placed on the ground or below
  if (y < height - blockSize * 2) {
    blocks.push({x: x, y: y}); // Add the block's (x, y) position to the blocks array
  }
}
