//Given a string, output its longest prefix which contains only digits.
function longestDigitsPrefix(inputString) {
    var number = '';
    function is_numeric(str){
        return (/^\d+$/).test(str);
    }

    if(is_numeric(inputString[0])){
        var i = 0;
        while(is_numeric(inputString[i])){
            number += inputString[i++];
        }
    }else{
        return '';
    }
    return number;
}
