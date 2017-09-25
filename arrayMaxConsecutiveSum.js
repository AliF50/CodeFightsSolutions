//Given array of integers, find the maximal possible sum of some of its k consecutive elements.
function arrayMaxConsecutiveSum(inputArray, k) {
  var result = 0,
    currentSum = 0;
  for (var i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k + 1];
  }
  return result;
}
