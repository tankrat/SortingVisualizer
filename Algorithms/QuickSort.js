async function quickSort(arr, start, end) {
  if (start >= end) return;
  console.log(arr);
  let index = await partition(arr, start, end);
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end),
  ]);
}

async function partition(arr, start, pivot) {
  let index = start;
  for (var i = start; i < pivot; i++) {
    if (arr[i].value < arr[pivot].value) {
      await sleep(1000);
      await swap2(arr, arr[i], arr[index]);
      index++;
    }
  }
  await sleep(1000);
  await swap2(arr, arr[i], arr[index]);
  return index;
}
