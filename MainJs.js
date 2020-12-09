var maxIndex = 100;
var widthIndex = 0;
var widthContainer = 0;
var array = [];
var ms = 1;

$(document).ready(function () {
  widthContainer = $(".array-box").width() - 5;
  widthIndex = (widthContainer / maxIndex / widthContainer) * 100;
  console.log(widthIndex);
  generateArray();
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function prova() {
  let tdiv1 = $("#0").clone();
  let tdiv2 = $("#1").clone();
  $("#0").replaceWith(tdiv2);
  $("#1").replaceWith(tdiv1);
  let temp = array[0];
  array[0] = array[1];
  array[1] = temp;
}
