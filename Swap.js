function swap(div1, div2, j) {
  console.log(div1);
  console.log(div2);
  let tdiv1 = $("#" + div1.id).clone();
  let tdiv2 = $("#" + div2.id).clone();
  $("#" + div1.id).replaceWith(tdiv2);
  $("#" + div2.id).replaceWith(tdiv1);
  if (j == maxIndex) {
    tdiv2.addClass("margin");
    tdiv1.removeClass("margin");
  }
  let temp = array[j];
  array[j] = array[j - 1];
  array[j - 1] = temp;
  console.log(array);
}

async function swap2(arr, div1, div2) {
  let tdiv1 = $("#" + div1.id).clone();
  let tdiv2 = $("#" + div2.id).clone();
  $("#" + div1.id).replaceWith(tdiv2);
  $("#" + div2.id).replaceWith(tdiv1);
  var div1Index = 0;
  var div2Index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == div1.id) {
      div1Index = i;
    }
    if (arr[i].id == div2.id) {
      div2Index = i;
    }
  }
  let temp = arr[div1Index];
  array[div1Index] = array[div2Index];
  array[div2Index] = temp;
}

