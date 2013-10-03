(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      Asteroid = Asteroids.Asteroid = function (pos, vel) {
        return Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
      }
  Asteroid.RADIUS = 50;
  Asteroid.COLOR = "blue";

  Asteroid.inherits = function (ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
  }
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function (dimX, dimY) {
    var x = Math.random() * dimX,
        y = Math.random() * dimY,
        vel = Asteroids.MovingObject.randomVec();

    return new Asteroids.Asteroid({ x: x, y: y }, vel)
  };

  Asteroid.prototype.draw = function (ctx) {
    // draw circle of this.radius around this.pos on ctx
    ctx.strokeStyle = Asteroid.COLOR;
    ctx.beginPath();

    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.stroke();
  }


})(this);
