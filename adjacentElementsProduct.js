// Given an array of integers,
// find the pair of adjacent elements
//  that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    var max = -1000000;
    for(var i = 0; i < inputArray.length; i++){
        if(i === inputArray.length - 1){
            break;
        }
        if(inputArray[i] * inputArray[i + 1] > max){
            max = inputArray[i] * inputArray[i + 1];
        }
    }
    return max;
}
