'use strict';

window.onload = function () {

  var inputs = document.querySelectorAll('.control-container input');

  function handleUpdate() {
    var suffix = this.dataset.sizing || '';
    if (this.name == "spacing" || this.name == "blur") {
      document.documentElement.style.setProperty('--' + this.name, this.value + 'px');
      console.log(this.value);
    } else if (this.name == "color") {
      document.documentElement.style.setProperty('--' + this.name, '' + this.value);
      console.log(this.value);
    }
  }

  inputs.forEach(function (input) {
    return input.addEventListener('change', handleUpdate);
  });
  //inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

};
