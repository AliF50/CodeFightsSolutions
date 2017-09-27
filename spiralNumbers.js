//Construct a square matrix with a size N × N
// containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

function spiralNumbers(n) {
        var arr = new Array(n);
    for (var i = 0; i < n; i++) {
      arr[i] = new Array(n);
    }
    var i,j,k, number = 1;
    for(i=n-1, j=0; i>0; i--, j++)
    {
        //fill top row
        for(k=j; k<i; k++){
           arr[j][k] = number++;
        }
        //fill last column
        for(k=j; k<i; k++){
          arr[k][i] = number++;
        }
        //fill last row
        for(k=i; k>j; k--){
          arr[i][k] = number++;
        }
        //fill first column
        for(k=i; k>j; k--){
          arr[k][j] = number++;
        }

    }
    //if odd size matrix fill the middle value
     var middle = (n-1)/2;
     if (n % 2 == 1){
       arr[middle][middle] = number++;
     }

     return arr;
}
