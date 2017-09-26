//Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
function longestWord(text) {
  text = text.replace(/[^A-Za-z0-9\s]/g, " "); //remove punctuations all together
  console.log(text);
  text = text.split(' ');
  var max = 0;
  var longestWord;
  for(var i = 0; i < text.length; i++){
    if(text[i].length > max){
      longestWord = text[i];
      max = text[i].length;
    }
  }
  return longestWord;
}
