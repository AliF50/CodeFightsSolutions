// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.
function absoluteValuesSumMinimization(a) {
    var totalAndIndexObj = [{}];
    var total;
    var x;
    var min = Infinity;
    var toReturn;
    for(var i = 0; i < a.length; i++){
        total = 0;
        for(var j = 0; j < a.length; j++){
            total += Math.abs(a[j] - a[i]);
        }
        x = a[i];
        totalAndIndexObj.push({"total": total, x: x});
    }
    for(i = 0; i < totalAndIndexObj.length; i++){
        if(totalAndIndexObj[i].total === min && totalAndIndexObj[i].x > toReturn){
            continue;
        }
        if(totalAndIndexObj[i].total <= min){
            min = totalAndIndexObj[i].total;
            toReturn = totalAndIndexObj[i].x;
        }
    }
    return toReturn;
}
