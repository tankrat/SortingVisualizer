arr = [
  { id: 0, value: 19 },
  { id: 1, value: 90 },
  { id: 2, value: 34 },
  { id: 3, value: 92 },
  { id: 4, value: 45 },
];
quickSort(arr, 0, arr.length - 1);

function quickSort(arr, start, end) {
  if (end <= start) return;
  console.log(arr);
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function partition(arr, start, pivot) {
  let index = start;
  for (var i = start; i < pivot; i++) {
    if (arr[i].value < arr[pivot].value) {
      //swap2(arr[i], arr[index]);
      // let tdiv1 = $("#" + arr[pivot].id).clone();
      // let tdiv2 = $("#" + arr[i].id).clone();
      // $("#" + arr[pivot].id).replaceWith(tdiv2);
      // $("#" + arr[i].id).replaceWith(tdiv1);
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      index++;
    }
  }
  // swap2(arr[index], arr[pivot]);
  // let tdiv1 = $("#" + arr[pivot].id).clone();
  // let tdiv2 = $("#" + arr[index].id).clone();
  // $("#" + arr[pivot].id).replaceWith(tdiv2);
  // $("#" + arr[index].id).replaceWith(tdiv1);
  let temp = arr[index];
  arr[index] = arr[pivot];
  arr[pivot] = temp;
  return index;
}
