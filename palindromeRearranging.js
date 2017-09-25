//Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(inputString) {
    var stillAPalindrome = true, letterToSearch, secondIndex, nonFoundCount   = 0;

    inputString = inputString.split('');
    while(stillAPalindrome){
        if(inputString.length === 0){
            break;
        }
        letterToSearch = inputString[0];
        secondIndex = inputString.indexOf(letterToSearch, 1);
        if(secondIndex > -1){
            inputString.splice(secondIndex, 1);
            inputString.shift();
        }else if(secondIndex === -1){
            inputString.shift();
            nonFoundCount++;
        }
        if(nonFoundCount > 1){
            stillAPalindrome = false;
        }
    }
    return stillAPalindrome;
}
