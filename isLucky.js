// Ticket numbers usually consist of an even number of digits.
//A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.
function isLucky(n) {
    var digits = ("" + n).split('');
    var sumForward = 0, sumBackward = 0;
    if(digits % 2 === 1){
        return false;
    }else{
        for(var i = 0; i < digits.length; i++){
            if(i < digits.length/2){
                sumForward += parseInt(digits[i]);
            }else{
                sumBackward += parseInt(digits[i]);
            }
        }
    }
    return sumForward === sumBackward;
}
