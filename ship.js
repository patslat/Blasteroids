(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      Ship = Asteroids.Ship = function (pos, vel) {
        this.direction = Math.PI;
        return Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
      };

  Ship.RADIUS = 10;
  Ship.COLOR = "red";

  Ship.inherits = function (ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.vel.x += impulse.x * Math.cos(this.direction);
    this.vel.y += impulse.y * Math.sin(this.direction);
  }
//
  Ship.prototype.draw = function (ctx) {
    var spaceship = document.getElementById("spaceship");

    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.direction - Math.PI/2);
    ctx.translate(-this.pos.x, -this.pos.y);
    ctx.drawImage(spaceship, this.pos.x - 64, this.pos.y - 64);
    ctx.restore();
  }


  Ship.prototype.move = function () {
    this.pos.x = (Asteroids.Game.DIM_X + this.pos.x + (this.vel.x)) % Asteroids.Game.DIM_X;
    this.pos.y = (Asteroids.Game.DIM_Y + this.pos.y + (this.vel.y)) % Asteroids.Game.DIM_Y;
    if (Math.abs(this.vel.x) > 0) this.vel.x = this.vel.x / 1.02;
    if (Math.abs(this.vel.y) > 0) this.vel.y = this.vel.y / 1.02;
  }

  Ship.prototype.turn = function (dir) {
    this.direction += dir
  }

  Ship.prototype.fireBullet = function () {
    return bullet = new Asteroids.Bullet({ x: this.pos.x, y: this.pos.y }, this.direction);
  }

})(this);
