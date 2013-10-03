(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
      };

  MovingObject.prototype.move = function () {
    this.pos.x = (Asteroids.Game.DIM_X + this.pos.x + this.vel.x) % Asteroids.Game.DIM_X;
    this.pos.y = (Asteroids.Game.DIM_Y + this.pos.y + this.vel.y) % Asteroids.Game.DIM_Y;
  }

  MovingObject.prototype.draw = function (ctx) {
    // draw circle of this.radius around this.pos on ctx
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    // compute dist between two centers
    // if sum of radii is greater than this, collision boom!
  }

  MovingObject.randomVec = function () {
    return { x: ((Math.random() * 2) - 1), y: ((Math.random() * 2) - 1) };
  }




})(this);
