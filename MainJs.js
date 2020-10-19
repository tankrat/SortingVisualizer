var maxIndex = 100;
var widthIndex = 0;
var widthContainer = 0;

$(document).ready(function () {
  widthContainer = $(".array-box").width() - 5;
  widthIndex = (widthContainer / maxIndex / widthContainer) * 100;
  printArray();
});

function printArray() {
  for (var i = 1; i <= maxIndex; i++) {
    let randomHeight = randomInteger(1, 100) + "." + randomInteger(1, 99);
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

function orderArray() {
  for (var i = 1; i <= maxIndex; i++) {
    for (var j = 1; j <= maxIndex; j++) {
      div1 = $("#" + j);
      j2 = j + 1;
      div2 = $("#" + j2);
      if (div1.height() > div2.height()) {
        tdiv1 = div1.clone();
        tdiv2 = div2.clone();
        div1.replaceWith(tdiv2);
        div2.replaceWith(tdiv1);
        $("#" + j).attr("id", j2);
        $("#" + j2).attr("id", j);
      }
    }
  }
}
