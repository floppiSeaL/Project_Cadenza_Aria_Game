
class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.size = random(0, 15);

  }

  move() {
    let speedVal = -0.03
    speedVal++
    this.speedX += (random(speedVal) - 0.5) / 5;
    this.speedY += (random() - 0.57) / 2;
    this.x += this.speedX;
    this.y += this.speedY;

  }

  display() {
    let color1 = color(101, 89, 112);
    let color2 = color(64, 15, 110);

    if (this.size > 1) {
      pg.noStroke()
      pg.fill(color2);
      pg.ellipse(this.x + 2, this.y + 2, this.size, this.size);
      pg.fill(color1);
      pg.ellipse(this.x, this.y, this.size, this.size);
    }
  }
  displayForestScene() {
    let color1 = color(101, 89, 112);
    let color2 = color(64, 15, 110);

    if (this.size > 1) {
      pg1.noStroke()
      pg1.fill(color2);
      pg1.ellipse(this.x + 2, this.y + 2, this.size, this.size);
      pg1.fill(color1);
      pg1.ellipse(this.x, this.y, this.size, this.size);
    }
  }
}