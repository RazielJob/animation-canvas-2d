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

  update(context) {
    context.clearRect(0, 0, window_width, window_heigth);

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
    if (this.posy + this.radius > window_width) {
      this.dy = -this.dy;
    }
    this.posx += this.dx;
    this.posy += this.dy;
  }
}

/*let arrayCircle=[];

for (let i=0; i<10;i++){

    let randomX =Math.random()*window_heigth;
    let randomY = Math.random()*window_width;
    let randomRadious = Math.floor(Math_random()*100 + 30);

    let miCirculo = new Circle(randomX, randomY, randomRadious, 'blue', 1+1);

    arrayCircle.push(miCirculo)
    arrayCircle[i].draw(ctx);
}*/

let randomX = Math.random() * window_heigth;
let randomY = Math.random() * window_width;
let randomRadious = Math.floor(Math_random() * 100 + 30);

let miCirculo = new Circle(100, 100, 50, "blue");
miCirculo.draw(ctx);

let updateCicle = function () {
  requestAnimationFrame(updateCicle);
  miCirculo.update(ctx);
};

updateCicle();

/*let miCirculo =new Circle(270,270,50,'black', "Pachuca");
miCirculo.draw(ctx) */
