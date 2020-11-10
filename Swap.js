function swap(div1, div2, j) {
    var a = div1;
    var temp = a;
    var b = div2;
    a = b;
    b = temp;
    let tdiv1 = $("#" + div1.id).clone();
    let tdiv2 = $("#" + div2.id).clone();
    $("#" + div1.id).replaceWith(tdiv2);
    $("#" + div2.id).replaceWith(tdiv1);
    if (j == maxIndex) {
      tdiv2.addClass("margin");
      tdiv1.removeClass("margin");
    }
  }