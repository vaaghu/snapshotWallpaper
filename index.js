const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');


console.log(process.argv)
if (process.argv.length < 4) {
  console.log('Please provide both width and height as command-line arguments.');
  process.exit(1);
}

// Retrieve width and height from command-line arguments
let width = parseInt(process.argv[2]);
let height = parseInt(process.argv[3]);
// width = 250;
// height = 250

console.log(width,height) 
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

for (let i = 0;i<10;i++){
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 100, 100);
}


// Save the canvas as a PNG file
const out = fs.createWriteStream('Default.png');
const stream = canvas.createPNGStream();

stream.pipe(out);
out.on('finish', () => {
  console.log('The PNG file was created.');
});