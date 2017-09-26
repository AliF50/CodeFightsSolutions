//Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
/*strategy is to loop through array and delete each number 1 at a time and store each result into an array.
Find the max from this array*/
function deleteDigit(n) {
  n = n.toString();
  n = n.split('');
  var deepCopy = [];
  for(var i = 0; i < n.length; i++){ //deep copy of array
    deepCopy[i] = n[i];
  }
  var arrayHoldingTheNumbers = [];
  for(var i = 0; i < deepCopy.length; i++){
    n.splice(i, 1); //get rid of one element
    arrayHoldingTheNumbers.push(n.join('')); //push this number and join it as a string into all numbers array
    for(var j = 0; j < deepCopy.length; j++){ //store n back to original
      n[j] = deepCopy[j];
    }
  }
  return Math.max(...arrayHoldingTheNumbers); //spread array into numbers for max function
}
