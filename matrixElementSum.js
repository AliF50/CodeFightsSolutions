
// After they became famous, the CodeBots
// all decided to move to a new building and live together.
// The building is represented by a rectangular matrix of rooms.
// Each cell in the matrix contains an integer that represents the price of the room.
// Some rooms are free (their cost is 0),
// but that's probably because they are haunted, so all the bots are afraid of them.
// That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable
// for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.
function matrixElementsSum(matrix) {
    var total = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(i >= 1 && matrix[i-1][j] === 0  ){
                matrix[i][j] = 0;
            }
            total += matrix[i][j];
        }
    }
    return total;
}
