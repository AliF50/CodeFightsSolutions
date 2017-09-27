// You are given an array of desired filenames
// in the order of their creation. Since two files
// cannot have equal names, the one which comes later
//  will have an addition to its name in a form of (k),
//   where k is the smallest positive integer such that
//   the obtained name is not used yet.

// Return an array of names that will be given to the files.
function fileNaming(names) {
  var namesArray = [];
  var count;
  var temp;
  for(var i = 0; i < names.length; i++){
    count = 0;
    temp = names[i];
    while(namesArray.indexOf(names[i]) > -1){
      count++;
      names[i] = temp + '(' + count + ')';
    }
    namesArray.push(names[i]);
  }
  return namesArray;
}
