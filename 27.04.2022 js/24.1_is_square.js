function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  return this.a === this.d && this.a === this.c && this.a === this.d;
};
const area1 = new Square(1, 1, 1, 1);
const area2 = new Square(2, 1, 1, 1);
console.log(area1.isSquare());
console.log(area2.isSquare());
