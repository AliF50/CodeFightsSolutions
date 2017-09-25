// Given the positions of a white bishop and a black pawn on the standard chess board,
// determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
//  Check out the example below to see how it can move:
function bishopAndPawn(cell1, cell2) {
  var getX = function(pos) {
      return pos.charCodeAt() - 'A'.charCodeAt();
    }
    var getY = function(pos) {
        return pos.charCodeAt() - '1'.charCodeAt();
    }
      var x1 = getX(cell1[0]),
        y1 = getY(cell1[1]),
        x2 = getX(cell2[0]),
        y2 = getY(cell2[1]);
      if (x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2) {
        return true;
      }
      return false;
}
