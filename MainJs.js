var maxIndex = 50;
var widthIndex = 0;
var widthContainer = 0;
var array = [];
var ms = 1;

$(document).ready(function () {
  widthContainer = $(".array-box").width() - 5;
  widthIndex = (widthContainer / maxIndex / widthContainer) * 100;
  generateArray();
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
