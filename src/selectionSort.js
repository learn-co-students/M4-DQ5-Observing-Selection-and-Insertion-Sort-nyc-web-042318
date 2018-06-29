// function selectionSort(arr) {
//   // your code here!
//   // arr is an array of unsorted integers (i.e. [3, 5, 1])
//   for (let i = 0; i < arr.length; i++) {
//     for (let n = 0; n < arr.length; n++) {
//       if (arr[n] > arr[i]) {
//         swap(arr, i, n)
//       }
//     }
//   }
//
// return arr
// }
//
//
//
//
// function swap(array, i, n) {
//   var temp = array[i];
//   array[i] = array[n];
//   array[n] = temp;
// }

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}
