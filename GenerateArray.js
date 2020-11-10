function generateArray() {
  for (var i = 0; i < maxIndex; i++) {
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
      array.push({ id: i, value: randomHeight });
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
      array.push({ id: i, value: randomHeight });
      $(".array-box").append(div);
    }
  }
}
