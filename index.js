const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const randomRange = (start,end) => {
  return Math.floor(Math.random() * (end - start)) + start
}
const binary = ()=> Math.random() > 0.5
console.log(process.argv)
if (process.argv.length < 6) {
  console.log('Please provide both width and height as command-line arguments.');
  process.exit(1);
}

// Retrieve width and height from command-line arguments
let DIR = process.argv[2]
let width = parseInt(process.argv[3]);
let height = parseInt(process.argv[4]);
let isDark = parseInt(process.argv[5]);


const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');
let bufferCuberSize = randomRange(0,40)
let cubeSize = 100 
let maxbrightness = (isRemove=false) => { return isRemove?0:randomRange(isDark?20:100,isDark?150:240)}
ctx.fillStyle = isDark?"black":"white"
ctx.fillRect(0,0,width,height)


console.log(maxbrightness())
Red = binary()
Green = binary()
Blue = binary()
// Green = 0
// Blue = 0
// Red = 0
console.log(Red && Green && Blue,Red,Green,Blue)
if (Red && Green && Blue) Red = false
for (let i = 0;i<1000;i++){
  ctx.fillStyle = `rgba(${maxbrightness(Red)},${maxbrightness(Green)},${maxbrightness(Blue)},0.9)`;
  ctx.fillRect((Math.random()*width)-(cubeSize/2), (Math.random()*height)-(cubeSize/2),cubeSize+Math.floor(Math.random()*bufferCuberSize),cubeSize+Math.floor(Math.random()*bufferCuberSize));
}


// Save the canvas as a PNG file
const out = fs.createWriteStream(DIR+'/Default.png');
const stream = canvas.createPNGStream();

stream.pipe(out);
out.on('finish', () => {
  console.log('The PNG file was created.');
});