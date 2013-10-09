(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {}),
      Game = Asteroids.Game = function (ctx) {
        this.ctx = ctx;
        this.ship = null;
        this.asteroids = [];
        this.bullets = [];
      };

  Game.DIM_X = 900;
  Game.DIM_Y = 900;
  Game.FPS = 30;

  Game.prototype.draw = function () {
    // use clearRect to clear the rectangle
    // draw each asteroid

    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.ship.draw(this.ctx);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.ctx);
    }
  }

  Game.prototype.move = function () {
    this.ship.move();
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }

    for (var i = 0; i < this.bullets.length; i++) {
      var bullet = this.bullets[i];
      bullet.move();
      if (bullet.offScreen()) {
        console.log("off screen!");
        this.bullets.splice(i, 1);
      }
    }
  }

  Game.prototype.checkCollisions = function () {
    // iterate through asteroids and see if any collide
    for (var i = 0; i < this.asteroids.length; i++) {
      var asteroid = this.asteroids[i]
      // check if collides with ship
      if (asteroid.isCollidedWith(this.ship)) {
        console.log("WE'VE BEEN HIT!");
      }
      // iterate through bullets and see if any collide
      for (var j = 0; j < this.bullets.length; j++) {
        var bullet = this.bullets[j];
        if (asteroid.isCollidedWith(bullet)) {
          console.log("Shot an Asteroid!");
          this.bullets.splice(j, 1)
          this.asteroids.splice(i, 1)
        }
      }
    }
  }

  Game.prototype.stop = function () {
    // save timer id returned by setinterval
    //clearInterval(); // pause the game
  }

  Game.prototype.step = function () {
    // perform one step
    this.checkCollisions();
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
    key("w", function () { self.ship.power({ x: 5.0, y: 5.0 }) });
    key("a", function () { self.ship.turn(-(Math.PI / 32.0)) });
    key("d", function () { self.ship.turn(Math.PI / 32.0) });
    key("space", function () { self.bullets.push(self.ship.fireBullet()) });
  }

})(this);
