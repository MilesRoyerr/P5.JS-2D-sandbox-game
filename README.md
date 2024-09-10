# P5.JS-Minecraft-Clone
Simple Block Placement Game

This project is a basic block placement game built with JavaScript and the p5.js library. The program allows users to place gray blocks on a grid by clicking on the canvas. It also includes a simple visual representation of the ground, similar to the ground level in Minecraft, with a grid overlay to guide block placement.

Features

Block Placement: Click anywhere on the grid to place a block. Blocks are aligned to the grid, so they will snap to the nearest grid cell.
Grid Overlay: A visible grid is drawn to assist with block alignment.
Ground Representation: A green "ground" is displayed at the bottom of the canvas, where blocks cannot be placed.
How It Works

Canvas Setup: The game initializes a canvas of 640x480 pixels using p5.js.
Grid Drawing: A 32x32 pixel grid is drawn across the canvas.
Mouse Interaction: When the user clicks within the canvas, a block is placed at the nearest grid position, as long as it's above the "ground" level.
Block Storage: Blocks are stored in an array, and their positions are redrawn every frame to ensure they persist on the canvas.
Ground Level: Blocks cannot be placed on the bottom two rows, which are reserved to represent the ground.
