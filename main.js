const canvas = document.getElementById("canvas");
let ctx = canvas.getcontext("2D");

//obtiene las dimensiones de la pantalla actual
const window_heigth = window.innerHeight;
const window_width = window.innerWidth;

//El canvas tiene las mismas dimensiones que la pantalla
canvas.heigth = window_heigth;
canvas.width = window_width;

canvas.style.background = "#ff9";

class Circle {
  constructor(x, y, radius, color, text) {
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
    context.strokeStylen = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.lineWidth = 5;

    context.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

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
    context.font = `${this.radius * 0.4}px Arial`; // Tamaño del texto proporcional al radio
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
      this.dy = -this.dy;
    }
    this.posx += this.dx;
    this.posy += this.dy;
  }
}

// Crear un arreglo para almacenar los círculos
let circles = [];

// Función para generar círculos aleatorios
function generateRandomCircle() {
  let randomX = Math.random() * window_width;
  let randomY = Math.random() * window_height;
  let randomRadius = Math.floor(Math.random() * 100 + 20); // Radio aleatorio entre 20 y 120
  let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  let randomSpeed = Math.random() * 3 + 1;
  let newCircle = new Circle(randomX, randomY, randomRadius, randomColor, "", randomSpeed);
  circles.push(newCircle);
}

// Generar algunos círculos iniciales
for (let i = 0; i < 10; i++) {
  generateRandomCircle();
}

// Función para actualizar y dibujar todos los círculos
function updateCircles() {
  requestAnimationFrame(updateCircles);
  ctx.clearRect(0, 0, window_width, window_height);
  for (let circle of circles) {
    circle.update(ctx);
  }
}

updateCircles();(270,270,50,'black', "Pachuca");
miCirculo.draw(ctx) */
