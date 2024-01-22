function findMaxNumber(arr) {
  let largestNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

module.exports = findMaxNumber;
