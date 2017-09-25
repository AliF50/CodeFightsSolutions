// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
function sortByHeight(a) {
    var heights = [];

    for(var i = 0; i < a.length; i++){ //if not -1, push value into heights array
        if(a[i] !== -1){
            heights.push(a[i]);
        }
    }

        heights.sort(function(a, b){//sort heights array from smallest to largest
        return a - b;
    });

    for(var i = 0; i < a.length; i++){//if not -1, make element first element of heights
        if(a[i] !== -1){
            a[i] = heights.shift();
        }
    }
    return a;
}
