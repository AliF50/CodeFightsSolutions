//Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
function arrayMaximalAdjacentDifference(inputArray) {
    var max = 0;
    for(var i = 0; i < inputArray.length; i++){
        if(i === 0){
            continue;
        }
        if(Math.abs(inputArray[i] - inputArray[i - 1]) > max){
            max = Math.abs(inputArray[i] - inputArray[i - 1]);
        }
    }
    return max;
}
