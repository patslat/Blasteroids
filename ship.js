(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      Ship = Asteroids.Ship = function (pos, vel) {
        return new Asteroids.MovingObject(pos, vel, this.RADIUS, this.COLOR);
      };

  Ship.RADIUS = 10;
  Ship.COLOR = "yellow";

  Ship.prototype.power = function (impulse) {
    this.vel.x += impulse.x;
    this.vel.y += impulse.y;
  }



})(this);
