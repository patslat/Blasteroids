(function (root) {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  root.requestAnimationFrame = requestAnimationFrame;
})(this)
