
window.onload = function() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const quads = [];
  const numQuads = 10;
  const LINE_WIDTH = 5;

  canvas.width = 600;
  canvas.height = 600;

  for (let i = 0; i < numQuads; i ++) {
    const _size = i * 20;
    const _color = "#"+((1<<24) * Math.random()|0).toString(16);

    quads.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: _size,
      height: _size,
      color: _color,
      speed: Math.random() * 4,
    });
  }

  const draw = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    quads.forEach(quad => {
      context.strokeStyle = quad.color;
      context.lineWidth = LINE_WIDTH;
      quad.speed += 0.1;
      const factor = Math.cos(quad.speed);
      context.strokeRect(quad.x - quad.width / 2 * factor, quad.y - quad.height / 2, quad.width, quad.height);
      context.stroke();
    });
  };

  const frame = function() {
    draw();
    requestAnimationFrame(frame);
  };
  frame();
};