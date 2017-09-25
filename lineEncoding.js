
// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
function lineEncoding(s) {
  var tempString = '';
  var resultingArray = [];
  s = s.split('');
  for(var i = 0; i < s.length; i++){
    if(i === 0){
      tempString += s[i];
    }else if(i === s.length - 1){ //treating edge case
      if(s[i] === tempString[0]){
        tempString += s[i];
        resultingArray.push(tempString);
      }else{
        resultingArray.push(tempString);
        tempString = s[i];
        resultingArray.push(tempString);
      }
    }else if(s[i] === s[i - 1]){
      tempString += s[i];
    }else{
      resultingArray.push(tempString);
      tempString = s[i];
    }
  }
  var stringToReturn = '';
  for(var i = 0; i < resultingArray.length; i++){
    if(resultingArray[i].length > 1)
      stringToReturn += resultingArray[i].length + resultingArray[i][0];
    else
      stringToReturn += resultingArray[i][0];
  }

  console.log(stringToReturn);
  return stringToReturn;
}

