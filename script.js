window.addEventListener('DOMContentLoaded', () => {
  // Create Pixi.js application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: 400,
    backgroundColor: 0x000000,
    view: document.getElementById('slider'),
  });

  // Add slider images
  const sliderImages = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg'];
  sliderImages.forEach((image) => {
    const texture = PIXI.Texture.from(image);
    const sprite = new PIXI.Sprite(texture);

    // Resize sprite to fit the container
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;

    app.stage.addChild(sprite);
  });
});
