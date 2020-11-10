async function bubbleSort() {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length - i; j++) {
      let div1 = $("#" + array[j-1].id);
      let j2 = j + 1;
      let div2 = $("#" + array[j].id);
      div1.addClass("yellow");
      div2.addClass("yellow");
      await sleep(ms);
      div1.removeClass("yellow");
      div2.removeClass("yellow");
      if (div1.height() > div2.height()) {
        div1.addClass("red");
        div2.addClass("red");
        await sleep(ms);
        swap(array[j], array[j + 1], j);
        $("#" + array[j].id).removeClass("red");
        $("#" + array[j + 1].id).removeClass("red");
        $("#" + array[j].id).addClass("green");
        $("#" + array[j + 1].id).addClass("green");
        await sleep(ms);
        $("#" + array[j].id).removeClass("green");
        $("#" + array[j + 1].id).removeClass("green");
      } else {
        div1.addClass("green");
        div2.addClass("green");
        await sleep(ms);
        div1.removeClass("green");
        div2.removeClass("green");
      }
    }
  }
}
