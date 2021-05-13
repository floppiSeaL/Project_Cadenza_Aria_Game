class Jitter {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.speed = 0.7;

  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    if (scene == 1) {

      if (mouseIsPressed) {
        image(Ariacries, this.x, this.y)
      }
      else { image(Ariasits, this.x, this.y) }
    }

    if (scene == 6) {
      image(ariano, this.x, this.y)
    }
  }
}
