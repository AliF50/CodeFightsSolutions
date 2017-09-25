// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
    var length = 0;
    var toReturn = [];
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > length){
            length = inputArray[i].length;
        }
    }
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length === length){
            toReturn.push(inputArray[i]);
        }
    }
    return toReturn;
}
