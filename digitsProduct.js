// Given an integer product,
// find the smallest positive (i.e. greater than 0) integer the product
// of whose digits is equal to product. If there is no such integer, return -1 instead.
function digitsProduct(product) {
    var numberString = '';
    var numberSplit = [];
    if (!product) {
        return 10;
    }
    if(product < 10){
        return product;
    }

    for(var i = 10; i <= 99999; i++){
        numberString = i.toString(); //convert to string
        numberSplit = numberString.split('');
        var calcProduct = numberSplit.reduce(function(product, value) {
          return product * value;
      });
      if(calcProduct === product){
        return parseInt(numberSplit.join(''));
      }
    }
    return -1;
}

digitsProduct(10);

