
// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.
function avoidObstacles(inputArray) {
    var found;
    var jump = 1;
    while(true){
        found = true;
        for(var i = 0; i < inputArray.length; i++){
            if(inputArray[i] % jump === 0){
                found = false;
            }
        }
        if(found){
            return jump;
        }
        jump++;
    }
}
