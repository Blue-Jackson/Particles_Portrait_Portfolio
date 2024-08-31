// Initialize PIXI.js Application
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true, // Make the canvas transparent if needed
  resolution: window.devicePixelRatio || 1,
  autoDensity: true
});

// Append PIXI.js canvas to the .content-canvas div
document.querySelector('.content-canvas').appendChild(app.view);

// Handle window resize to prevent cropping
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  // Optionally, adjust any PIXI.js content here
});

// Example: Add a PIXI.js graphic (e.g., a rotating sprite)
const graphics = new PIXI.Graphics();
graphics.beginFill(0xffffff);
graphics.drawCircle(0, 0, 50);
graphics.endFill();
graphics.x = app.renderer.width / 2;
graphics.y = app.renderer.height / 2;
app.stage.addChild(graphics);

// Optional: Animate the graphic
app.ticker.add((delta) => {
  graphics.rotation += 0.01 * delta;
});

// Custom Cursor Movement
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  // Update CSS variables for cursor position
  cursor.style.setProperty('--mouse-x', `${e.clientX - 8}px`); // Subtract half the cursor size to center
  cursor.style.setProperty('--mouse-y', `${e.clientY - 8}px`);
});

// Hide cursor when the mouse leaves the window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

// Show cursor when the mouse enters the window
document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});
