// Sudoku is a number-placement puzzle.
//  The objective is to fill a 9 × 9 grid with digits
//   so that each column, each row, and each of the nine 3 × 3
//   sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
function sudoku(grid) {
  //check horizontal
  function checkRows(){
    var numberArray = [];
    for(var i = 0; i < grid.length; i++){
      for(var j = 0; j < grid[i].length; j++){
        if(numberArray.indexOf(grid[i][j]) >= 0){
          return false;
        }else{
          numberArray.push(grid[i][j]);
        }
      }
      numberArray = [];
    }
    return true;
  }
  //check vertical
  function checkColumns(){
    var numberArray = [];
    for(var i = 0; i < grid.length; i++){
      for(var j = 0; j < grid[i].length; j++){
        if(numberArray.indexOf(grid[j][i]) >= 0){
          return false;
        }else{
          numberArray.push(grid[j][i]);
        }
      }
      numberArray = [];
    }
    return true;
  }
  //check 3 x 3
  function checkThreeByThree(){
    var numberArray = [];
    for(var i = 0; i < grid.length; i += 3){
      for(var j = 0; j < grid[i].length; j += 3){
        for(var k = j; k < j + 3; k++){
          for(var l = i; l < i + 3; l++){
            if(numberArray.indexOf(grid[k][l]) >= 0){
              return false;
            }else{
              numberArray.push(grid[k][l]);
            }
          }
        }
        numberArray = [];
      }
    }
    return true;
  }
  return checkRows() && checkColumns() && checkThreeByThree();
}
