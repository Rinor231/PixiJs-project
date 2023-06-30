window.addEventListener('DOMContentLoaded', () => {
  // Create Pixi.js application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: 400,
    backgroundColor: 0x000000,
    view: document.getElementById('slider'),
  });

  // News item photos
  const newsPhotos = [
    { image: '/news1/zidane.jpg', link:'news1.html' },
    { image: '/news2/nicolasjohnson.jpg', link: 'news2.html' },
    { image: '/news3/dominik.jpg', link: 'news3.html' }
  ];

  // Add slider images
  newsPhotos.forEach((photo) => {
    const texture = PIXI.Texture.from(photo.image);
    const sprite = new PIXI.Sprite(texture);
    sprite.interactive = true; // Enable interactivity
    sprite.buttonMode = true; // Change cursor to pointer on hover

    // Handle click event
    sprite.on('click', () => {
      window.location.href = photo.link; // Redirect to news item
    });

    // Resize sprite to fit the container
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;

    app.stage.addChild(sprite);
  });
});
