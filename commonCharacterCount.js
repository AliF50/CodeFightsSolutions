//Given two strings, find the number of common characters between them.
function commonCharacterCount(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    var count = 0;
    for(var i = 0; i < s1.length; i++){
        if(s2.indexOf(s1[i]) > -1){
            count++;
            s2.splice(s2.indexOf(s1[i]), 1);
        }
    }
    return count;
}
