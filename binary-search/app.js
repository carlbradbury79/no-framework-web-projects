const sortedArray = [
  'Apple',
  'Banana',
  'Conker',
  'Daisy',
  'Elderflower',
  'Giraffe',
  'Horse',
  'Iris',
  'Jackal'
];

function binarySearch(searchItem, sortedArray) {
  // Get first, mid and end point
  let firstPoint = 0;
  let lastPoint = sortedArray.length - 1;
  let midPoint = Math.floor((sortedArray.length - 1) / 2);

  if (sortedArray[midPoint] == searchItem) {
    //   Comparison of midpoint and item being looked for
    return true;
  } else if (sortedArray.length == 1) {
    //   Arr has one item that isn't the one being looked for
    return false;
  } else {
    if (searchItem < sortedArray[midPoint]) {
      // Remove first half of array
      const arr = sortedArray.splice(firstPoint, midPoint);
      //  Recursive function call
      return binarySearch(searchItem, arr);
    } else {
      // Remove last half of array
      const arr = sortedArray.splice(midPoint + 1, lastPoint);
      // Recursive function call
      return binarySearch(searchItem, arr);
    }
  }
}

console.log(binarySearch('Iris', sortedArray));
