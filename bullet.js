(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos) {
    Asteroids.MovingObject.call(this, pos, Bullet.VELOCITY, Bullet.RADIUS, Bullet.COLOR);
  }

  Bullet.RADIUS = 1;
  Bullet.COLOR = 'yellow';
  Bullet.VELOCITY = { x: 1, y: 1 };

  Bullet.inherits = function (ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
  }

  Bullet.inherits(Asteroids.MovingObject);

})(this);
