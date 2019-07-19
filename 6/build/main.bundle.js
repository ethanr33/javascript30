'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.onload = function () {

  var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  var input = document.getElementById("main-input");
  var output = document.getElementById('output');

  var cities = [];

  fetch(endpoint).then(function (blob) {
    return blob.json();
  }).then(function (data) {
    return cities.push.apply(cities, _toConsumableArray(data));
  });

  function findMatches(toMatch, list) {
    return list.filter(function (place) {
      var regex = new RegExp(toMatch, 'gi');
      return place.city.match(regex);
    });
  }

  var matches = void 0;

  input.addEventListener('input', function () {
    output.innerHTML = "";
    matches = findMatches(input.value, cities);
    if (input.value !== '') {
      matches.forEach(function (place) {
        output.innerHTML += '<p class="text output-text">' + place.city + ' with a population of ' + place.population + '</p>';
      });
    } else {
      output.innerHTML = "";
    }
  });
};
