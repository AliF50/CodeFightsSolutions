// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically
// and one square horizontally away from it. The complete move therefore looks like the letter L.
// Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
function chessKnight(cell) {
    var count = 0;
    cell = cell.split('');
    getCoordinatesIn2DFormat(cell);
    function getCoordinatesIn2DFormat(cell){
        switch(cell[0]) {
          case 'a':
            cell[0] = 0;
            break;
          case 'b':
            cell[0] = 1;
            break;
          case 'c':
            cell[0] = 2;
            break;
          case 'd':
            cell[0] = 3;
            break;
          case 'e':
            cell[0] = 4;
            break;
          case 'f':
            cell[0] = 5;
            break;
          case 'g':
            cell[0] = 6;
            break;
          case 'h':
            cell[0] = 7;
            break;
          default:
            console.log('invalid');
        }
        switch(cell[1]) {
          case '1':
            cell[1] = 0;
            break;
          case '2':
            cell[1] = 1;
            break;
          case '3':
            cell[1] = 2;
            break;
          case '4':
            cell[1] = 3;
            break;
          case '5':
            cell[1] = 4;
            break;
          case '6':
            cell[1] = 5;
            break;
          case '7':
            cell[1] = 6;
            break;
          case '8':
            cell[1] = 7;
            break;
          default:
            console.log('invalid');
        }

    }
    function checkIfBetweenZeroAnd7(number1, number2){
      if(number1 >= 0 && number1 <= 7 && number2 >=0 && number2 <=7){
        return true;
      }else{
        return false;
      }
    }

    if(checkIfBetweenZeroAnd7(cell[0] - 2, cell[1] - 1)){

      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] - 1, cell[1] - 2)){

      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] + 1,cell[1] - 2)){
      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] + 2,cell[1] - 1)){
      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] + 2,cell[1] + 1)){
      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] + 1,cell[1] + 2)){
      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] - 2,cell[1] + 1)){
      count++;
    }
    if(checkIfBetweenZeroAnd7(cell[0] - 1,cell[1] + 2)){
      count++;
    }
    return count;
}

chessKnight('g6');
