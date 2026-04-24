# DNA Preloader

![Preview](./Screenshot%202024-07-02%20092938.png)

DNA Preloader — a lightweight HTML/CSS/JavaScript preloader animation inspired by a DNA double-helix. Perfect for splash screens, loading states, or small portfolio projects.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [How it works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Demo
Open `index.html` in your browser to see the preloader in action.

(If you host the repo with GitHub Pages or another static host, you can point the demo link to that page.)

## Features
- Pure HTML & CSS core animation (no heavy libraries).
- Optional JavaScript to control show/hide behavior.
- Small footprint — ideal for fast-loading sites and prototypes.
- Easy to customize colors, size, and timing.

## Installation
1. Clone the repository:
   git clone https://github.com/BinaryVortex/DNA-Preloader.git

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Serve the folder with a simple static server:
     npx http-server . -c-1
     (or use any static-file server / GitHub Pages)

## Usage
If you want to embed the preloader into another project, copy the relevant files from this repo (HTML snippet, `style.css`, and any JS file used to toggle the loader). A minimal example:

1. Include the CSS in your page:
   <link rel="stylesheet" href="path/to/style.css">

2. Add the preloader markup to your HTML (example):
   <div id="preloader" class="dna-preloader">
     <!-- Preloader structure used by the repo -->
   </div>

3. Optionally use the provided JavaScript to hide the preloader once your content is ready:
   <script src="path/to/script.js"></script>

(Adjust file names/paths to match the ones in this repository.)

## Customization
You can easily tweak the look and behaviour:

- Colors: change the CSS color values (or CSS variables if provided).
- Size: adjust width/height on the container and shape sizes.
- Speed: edit animation-duration values in the CSS.

Example (CSS variables):
:root {
  --dna-color-1: #00bcd4;
  --dna-color-2: #8bc34a;
  --preloader-speed: 1.2s;
}

## How it works
- The visual DNA effect is produced using layered elements and CSS animations (transforms, keyframes, opacity).
- JavaScript (if present) listens for the page load or your app-ready event and removes/hides the preloader container.

## Contributing
Contributions are welcome! If you have:
- improvements to animation performance,
- additional themes (color presets),
- a JS toggle API or examples for frameworks (React/Vue),
please open an issue or submit a pull request.

When opening a PR:
- Describe the change and include screenshots or GIFs if the UI/animation changed.
- Keep changes small and focused.

## License
No license specified. If you want to allow others to reuse your work, add a LICENSE file (for example, the MIT license).

## Author
BinaryVortex
