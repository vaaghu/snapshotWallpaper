# Snapshot Wallpaper

This project is a simple tool that generates an image using JavaScript (utilizing a canvas) and sets it as the system wallpaper on Ubuntu 20.04. The process runs in a loop at regular intervals (default: every 15 minutes, configurable).

## How It Works

The project consists of:

- **`main.sh`:** This shell script triggers the generation of a PNG image using the JavaScript code and sets it as the system wallpaper. It's designed to loop and repeat this process at specified intervals.
- **`index.js`:** Contains the code responsible for generating the image using the canvas.
- **Startup Configuration:** The `main.sh` script can be configured to run at system startup by adding it to the startup applications list manually.

## Prerequisites

To run this project, ensure the following:

- Ubuntu 20.04 or a compatible system.
- nodejs 18.17.1 or similar
- npm 10.2.5 or similar

## Getting Started

1. **Clone the Repository:**
  ```bash
   git clone https://github.com/vaaghu/snapshot_wallpaper.git
   cd snapshot_wallpaper
  ```
2. **Install dependiences:**
  ```bash
  npm install
  ```
3. **Permissions:**
  ```bash
  chmod +x main.sh
  ```
4. **Run:**
  ```bash
  ./main.sh
  ```