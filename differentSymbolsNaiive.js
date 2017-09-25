//Given a string, find the number of different characters in it.
function differentSymbolsNaive(s) {
    var characterDictionary = {};
    var count = 0;
    s = s.split('');
    for(var i = 0; i < s.length; i++){
        if(characterDictionary[s[i]]){
            continue;
        }else{
            characterDictionary[s[i]] = 1;
            count++;
        }
    }
    return count;
}
