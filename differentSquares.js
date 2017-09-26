//Given a rectangular matrix containing only digits,
//calculate the number of different 2 × 2 squares in it.
function differentSquares(matrix) {
  var row = matrix.length;
  var col = matrix[0].length;
  var uniqueMatrices = [];
  var matrix2 = '';

  for(var i = 0; i < row - 1; i++){ //don't go outer edges because it will be out of bounds
    for(var j = 0; j < col - 1; j++){
      matrix2 = (matrix[i][j]).toString() + matrix[i][j + 1] + matrix[i+1][j] + matrix[i+1][j+1]; //store the 2 x 2 matrix as a string
      if(uniqueMatrices.indexOf(matrix2) < 0){
        uniqueMatrices.push(matrix2);
      }
    }
  }
  return uniqueMatrices.length;
}
