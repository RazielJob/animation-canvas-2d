const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// El canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "#ff9";

class Circle {
  constructor(x, y, radius, color, text, speed) {
    this.posx = x;
    this.posy = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.lineWidth = 5;
    context.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update(context) {
    context.clearRect(0, 0, window_width, window_height);
    this.draw(context);
    if (this.posx + this.radius > window_width) {
      this.dx = -this.dx;
    }
    if (this.posx - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.posy - this.radius < 0) {
      this.dy = -this.dy;
    }
    if (this.posy + this.radius > window_height) {
      // Cambio aquí
      this.dy = -this.dy;
    }
    this.posx += this.dx;
    this.posy += this.dy;
  }
}

let randomX = Math.random() * window_height;
let randomY = Math.random() * window_height; // Cambio aquí
let randomRadious = Math.floor(Math.random() * 100 + 30);
let miCirculo = new Circle(100, 100, 50, "blue", "tec", 3);
miCirculo.draw(ctx);

let updateCicle = function () {
  requestAnimationFrame(updateCicle);
  miCirculo.update(ctx);
};
updateCicle();
