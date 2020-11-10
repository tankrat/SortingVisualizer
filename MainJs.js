var maxIndex = 5;
var widthIndex = 0;
var widthContainer = 0;
var array = [];
var ms = 1000;

$(document).ready(function () {
  widthContainer = $(".array-box").width() - 5;
  widthIndex = (widthContainer / maxIndex / widthContainer) * 100;
  generateArray();
  console.log(array[0+1].id);
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
