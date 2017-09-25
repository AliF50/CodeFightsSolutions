// Two arrays are called similar if one can be obtained from
// another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    var different = [];
    for(var i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            different.push(i);
        }
    }
    if(different.length === 0){
        return true;
    }else{
        if(different.length === 1 || different.length > 2){
            return false;
        }else{
            if((a[different[0]] === b[different[1]]) && (a[different[1]] === b[different[0]])){
                return true;
            }else{
                return false;
            }
        }
    }
}
