"use strict";

window.onload = function () {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var isHovering = false;
  var curHue = 0;
  var curSize = 5;
  var isSizeDecreasing = false;

  var mousePos = void 0;

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('mouseenter', function (e) {
    isHovering = true;
    mouseEnterEvent = e;
    console.log('is hovering');
  });

  canvas.addEventListener('mousemove', function (e) {
    if (isHovering) {
      console.log('moved');
      mousePos = getMousePos(canvas, e);
      console.log(mousePos.x + " " + mousePos.y);
    }
  });

  canvas.addEventListener('mouseleave', function (e) {
    isHovering = false;
    console.log('isnt hovering');
  });

  setInterval(function () {
    if (isHovering) {
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, curSize, 0, 2 * Math.PI);
      ctx.fillStyle = "hsl(" + curHue % 360 + ", 100%, 50%)";
      ctx.fill();
      ctx.strokeStyle = "hsl(" + curHue % 360 + ", 100%, 50%)";
      ctx.stroke();
      ctx.closePath();
      curHue += 0.4;
      if (Math.round(curSize) == 50.0) {
        isSizeDecreasing = true;
        console.log("decreasing");
      } else if (Math.round(curSize) == 4.0) {
        isSizeDecreasing = false;
      }
      if (isSizeDecreasing) {
        curSize -= 0.075;
      } else {
        curSize += 0.075;
      }
    }
  }, 1);
};
