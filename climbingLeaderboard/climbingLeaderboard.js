// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
function climbingLeaderboard(scores, alice) {
    let rank = 1;
    for(let i = scores.length-1; i > 0; i--){
       if(scores[i]<scores[i-1]){
           rank++;
       } 
    }
    rank++;
    let j = scores.length-1;
    let alice_ranks = Array(alice.length);
    
    for(let i in alice){
        while(alice[i] >= scores[j]){
            if(rank == 1){
                break;
            }
            if(scores[j] == scores[j-1]){
                j--;
            }
            else{
                j--;
                rank--;
            }
        }
        alice_ranks[i] = rank;
    }
    return alice_ranks;
}
module.exports = climbingLeaderboard;