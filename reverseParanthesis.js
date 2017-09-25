// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets.
// It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.
// The results string should not contain any parentheses.

function reverseParentheses(s) {
    while(s.indexOf('(') !== -1){
        var start = s.lastIndexOf('(');
        var end = s.indexOf(')', start);
        var toReverse = s.slice(start + 1, end);
        var left = s.slice(0, start);
        var right = s.slice(end + 1, s.length);
        var toAdd = toReverse.split('').reverse().join('');
        s = left + toAdd + right;
    }
    return s;
}
