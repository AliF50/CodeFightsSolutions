// Given a string, find the shortest possible string
//  which can be achieved by adding characters to the end of initial string to make it a palindrome.
function buildPalindrome(st) {
    st = st.split('');
    for(var i = 0; i < st.length; i++){
      if(checkPalindrome(st.join(''))){
        continue;
      }else{
        st.splice(st.length - i, 0, st[i]);
      }
      console.log(st);
    }
    return st.join('');

    function checkPalindrome(str){
      str = str.split('');
      for(var i = 0; i < str.length; i++){
        if(str[i] === str[str.length - 1 - i]){
          continue;
        }else{
          return false;
        }
      }
      return true
    }
}
