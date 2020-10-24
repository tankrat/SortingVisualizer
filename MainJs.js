var maxIndex = 10;
var widthIndex = 0;
var widthContainer = 0;

$(document).ready(function () {
  widthContainer = $(".array-box").width() - 5;
  widthIndex = (widthContainer / maxIndex / widthContainer) * 100;
  printArray();
});

function printArray() {
  for (var i = 1; i <= maxIndex; i++) {
    let a = randomInteger(1, 100);
    let b = randomInteger(1, 99);
    let randomHeight = a != 100 ? a + "." + b : a;
    if (i == maxIndex) {
      let div =
        "<div id='" +
        i +
        "'class='index' style='width : " +
        widthIndex +
        "%; height : " +
        randomHeight +
        "%'></div>";
      $(".array-box").append(div);
    } else {
      let div =
        "<div id='" +
        i +
        "'class='index margin' style='width : " +
        widthIndex +
        "%; height : " +
        randomHeight +
        "%'></div>";
      $(".array-box").append(div);
    }
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function orderArray() {
  for (var i = 1; i <= maxIndex; i++) {
    for (var j = 1; j <= maxIndex; j++) {
      div1 = $("#" + j);
      j2 = j + 1;
      div2 = $("#" + j2);
      div1.addClass("yellow");
      div2.addClass("yellow");
      await sleep(1000);
      div1.removeClass("yellow");
      div2.removeClass("yellow");
      if (div1.height() > div2.height()) {
        swap(div1, div2, j, j2);
      }
    }
  }
}

function swap(div1, div2, j, j2) {
  tdiv1 = div1.clone();
  tdiv2 = div2.clone();
  div1.replaceWith(tdiv2);
  div2.replaceWith(tdiv1);
  if (j2 == maxIndex) {
    $("#" + j2).addClass("margin");
    $("#" + j).removeClass("margin");
  }
  $("#" + j).attr("id", j2);
  $("#" + j2).attr("id", j);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
