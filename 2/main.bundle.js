"use strict";

window.onload = function () {

  var hourHand = document.getElementById("hour-hand");
  var minuteHand = document.getElementById("minute-hand");
  var secondHand = document.getElementById("second-hand");

  var tickClock = function tickClock() {
    var date = new Date();

    secondHand.setAttribute("style", "transform: rotate(" + (date.getSeconds() * 6 + 90) + "deg);");
    minuteHand.setAttribute("style", "transform: rotate(" + ((date.getMinutes() + date.getSeconds() / 60) * 6 + 90) + "deg);");
    hourHand.setAttribute("style", "transform: rotate(" + (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600 + 90) + "deg);");
  };

  tickClock();

  setInterval(function () {
    tickClock();
  }, 100);
};
