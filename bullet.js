(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos, dir) {
    var velocity = {
      x: Bullet.VELOCITY.x * Math.cos(dir),
      y: Bullet.VELOCITY.y * Math.sin(dir)
    }
    Asteroids.MovingObject.call(this,
                                pos,
                                velocity,
                                Bullet.RADIUS,
                                Bullet.COLOR,
                                false);
  }

  Bullet.RADIUS = 5;
  Bullet.COLOR = 'yellow';
  Bullet.VELOCITY = { x: 10, y: 10 };

  Bullet.inherits = function (ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
  }

  Bullet.inherits(Asteroids.MovingObject);

})(this);
