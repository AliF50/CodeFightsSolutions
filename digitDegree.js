// Let's define digit degree of some positive integer as the number of times
// we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.
function digitDegree(n) {
    var number = n.toString();
    var count = 0;
    if(number.length === 1){
        return 0;
    }else{
        do{
            number = reduceToSum(number);
            count++;
        }while(number.length > 1);
    }
    function reduceToSum(n){
        var total = 0;
        n = n.toString();
        var array = n.split('');
        for(var i = 0; i < array.length; i++){
            total += parseInt(array[i], 10);
        }
        return total.toString();
    }
    return count;
}
