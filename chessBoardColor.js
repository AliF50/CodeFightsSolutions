// Given two cells on the standard chess board, determine whether they have the same color or not.
function chessBoardCellColor(cell1, cell2) {
    var chessBoardMapped =
        [
         [true, false, true, false, true, false, true, false],
         [false, true, false, true, false, true, false, true],
         [true, false, true, false, true, false, true, false],
         [false, true, false, true, false, true, false, true],
         [true, false, true, false, true, false, true, false],
         [false, true, false, true, false, true, false, true],
         [true, false, true, false, true, false, true, false],
         [false, true, false, true, false, true, false, true]
        ];
    function getCoordinatesFromString(string){
        string = string.split('');
        if(string[0] === "A"){
            string[0] = 0;
        }else if(string[0] === "B"){
            string[0] = 1;
        }else if(string[0] === "C"){
            string[0] = 2;
        }else if(string[0] === "D"){
            string[0] = 3;
        }else if(string[0] === "E"){
            string[0] = 4;
        }else if(string[0] === "F"){
            string[0] = 5;
        }else if(string[0] === "G"){
            string[0] = 6;
        }else if(string[0] === "H"){
            string[0] = 7;
        }else{
            console.log('invalid');
        }

        if(string[1] === "1"){
            string[1] = 0;
        }else if(string[1] === "2"){
            string[1] = 1;
        }else if(string[1] === "3"){
            string[1] = 2;
        }else if(string[1] === "4"){
            string[1] = 3;
        }else if(string[1] === "5"){
            string[1] = 4;
        }else if(string[1] === "6"){
            string[1] = 5;
        }else if(string[1] === "7"){
            string[1] = 6;
        }else if(string[1] === "8"){
            string[1] = 7;
        }else{
            console.log('invalid');
        }
        return string;
    }
    cell1 = getCoordinatesFromString(cell1);
    cell2 = getCoordinatesFromString(cell2);
    return chessBoardMapped[cell1[0]][cell1[1]] === chessBoardMapped[cell2[0]][cell2[1]];
}

console.log(chessBoardCellColor("A1", "C3"));
