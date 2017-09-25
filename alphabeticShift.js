// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
function alphabeticShift(inputString) {
    inputString = inputString.split('');
    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] === 'z'){
            inputString[i] = 'a';
        }else{
            inputString[i] = String.fromCharCode(inputString[i].charCodeAt(0) + 1);
        }
    }
    return inputString.join('');
}
