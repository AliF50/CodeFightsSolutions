// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}
