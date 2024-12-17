let blockSize = 32;  
let blocks = [];    

function setup() {
  createCanvas(640, 480); 
  noStroke();
}

function draw() {
  background(200, 230, 255);

  
  fill(100, 200, 100); 
  rect(0, height - blockSize * 2, width, blockSize * 2); 

 
  for (let block of blocks) {
    fill(150); 
    rect(block.x, block.y, blockSize, blockSize); 
  }

  
  drawGrid(); 
}


function drawGrid() {
  stroke(200); 
  for (let x = 0; x < width; x += blockSize) { 
    for (let y = 0; y < height; y += blockSize) { 
      noFill(); 
      rect(x, y, blockSize, blockSize); 
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
