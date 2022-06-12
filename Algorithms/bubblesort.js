const unsortedArray = [6, 5, 31, 1, 8, 74, 2, 41];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let current = arr[i];
        arr[i] = arr[j];
        arr[j] = current;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(unsortedArray));
