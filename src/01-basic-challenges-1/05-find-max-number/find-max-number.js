function findMaxNumber(arr) {
  let largestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

module.exports = findMaxNumber;
