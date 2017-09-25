// Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
     inputString = inputString.split('');
        for(var i = 0; i < inputString.length; i++){
            if(inputString[i] === inputString[inputString.length - i - 1]){
                continue;
            }else{
                return false;
            }
        }
        return true;
}
