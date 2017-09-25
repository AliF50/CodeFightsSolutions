// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
function arrayChange(inputArray) {
    var count = 0;
    var increment;
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i + 1] > inputArray[i]){
            continue;
        }else if(inputArray[i] >= inputArray[i + 1]){
            increment = (inputArray[i] - inputArray[i + 1] + 1);
            inputArray[i + 1] = inputArray[i] + 1;
            count += increment;
        }
    }
    return count;
}
