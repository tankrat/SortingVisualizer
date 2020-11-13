function swap(div1, div2, j) {
    let tdiv1 = $("#" + div1.id).clone();
    let tdiv2 = $("#" + div2.id).clone();
    $("#" + div1.id).replaceWith(tdiv2);
    $("#" + div2.id).replaceWith(tdiv1);
    if (j == maxIndex) {
      tdiv2.addClass("margin");
      tdiv1.removeClass("margin");
    }
    let temp = array[j];
    array[j] = array[j-1];
    array [j-1] = temp;
  }