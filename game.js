(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      Game = Asteroids.Game = function (ctx) {
        this.ctx = ctx;
        this.asteroids = [];
        this.bullets = []
      };

  Game.DIM_X = 900;
  Game.DIM_Y = 900;
  Game.FPS = 30;

  Game.prototype.draw = function () {
    // use clearRect to clear the rectangle
    // draw each asteroid
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  }

  Game.prototype.move = function () {
    this.ship.move();
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

  Game.prototype.checkCollisions = function () {
    // iterate through asteroids and see if any collide
  }

  Game.prototype.stop = function () {
    // save timer id returned by setinterval
    clearInterval(); // pause the game
  }

  Game.prototype.step = function () {
    // perform one step
    this.move();
    this.draw();
  }

  Game.prototype.start = function () {
    var self = this,
        start = null;

    this.bindKeyHandlers();
    this.ship = new Asteroids.Ship(
      { x: (Game.DIM_X / 2), y: (Game.DIM_Y / 2) },
      { x: 0, y: 0 }
    );
    this.addAsteroids(10);

    function step(timestamp) {
      self.step()
      if (start === null) start = timestamp;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  }

  Game.prototype.bindKeyHandlers = function () {
    var self = this;
    key("w", function () { console.log("up") });
    key("a", function () { console.log("left") });
    key("d", function () { console.log("right") });

    key("space", function () { self.fireBullet() });
  }

})(this);
