//Find the leftmost digit that occurs in a given string.
function firstDigit(inputString) {
    inputString = inputString.split('');
    for(var i = 0; i < inputString.length; i++){
        if(!isNaN(inputString[i]) ){
            return inputString[i];
        }
    }
}
