
//Given array of integers, remove each kth element from it.
function extractEachKth(inputArray, k) {
    var humanIndex = 1;
    for(var i = 0; i < inputArray.length; i++){
        if(humanIndex++ % k === 0){
            inputArray.splice(i, 1);
            i--; //subtract 1 to keep up with the splice
        }
    }
    return inputArray;
}
