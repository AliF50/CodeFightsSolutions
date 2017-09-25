// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far,
//  and an integer k equal to the number of voters who haven't
//  cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate.
//  If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
function electionsWinners(votes, k) {
    var countM = 0;
    var count = 0;

    votes = votes.sort(function(a, b){
       return b - a;
    });
    var max = votes[0];
    if(k === 0 && votes[0] === votes[1]){
        return 0;
    }else if(k === 0){
        return 1;
    }else{
        for(var i = 0; i < votes.length; i++){
            if(max < (votes[i] + k)){
                count++;
            }
        }
        return count;
    }
}
