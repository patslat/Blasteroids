(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color, wraps) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
        this.wraps = wraps;
      };

  MovingObject.prototype.move = function () {
    if (this.wraps) {
      this.pos.x = (Asteroids.Game.DIM_X + this.pos.x + this.vel.x) % Asteroids.Game.DIM_X;
      this.pos.y = (Asteroids.Game.DIM_Y + this.pos.y + this.vel.y) % Asteroids.Game.DIM_Y;
    } else {
      this.pos.x += this.vel.x
      this.pos.y += this.vel.y
    }
  }

  MovingObject.prototype.draw = function (ctx) {
    // draw circle of this.radius around this.pos on ctx
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
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

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    // compute dist between two centers
    // if sum of radii is greater than this, collision boom time!
    var distance = MovingObject._calculateDistance(this, otherObject);
    return (distance < (this.radius + otherObject.radius))
  }

  MovingObject.prototype.offScreen = function () {
    console.log(this);
    return (this.pos.x > Asteroids.Game.DIM_X ||
            this.pos.x < 0                    ||
            this.pos.y > Asteroids.Game.DIM_Y ||
            this.pos.y < 0)
  }

  MovingObject.randomVec = function () {
    return { x: ((Math.random() * 2) - 1), y: ((Math.random() * 2) - 1) };
  }

  MovingObject._calculateDistance = function (thisObject, otherObject) {
    return Math.sqrt(
      Math.pow((thisObject.pos.x - otherObject.pos.x), 2) +
      Math.pow((thisObject.pos.y - otherObject.pos.y), 2)
    )
  }

})(this);
