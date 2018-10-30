//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
    let min = 0;
    let max = 0;
    let min_record = 0;
    let max_record = 0;
    for(let i in scores){
        if(i == 0){
            min = scores[i];
            max = scores[i];
        }
        else{
            if(scores[i] > max){
                max = scores[i];
                max_record++;
            }
            if(scores[i] < min){
                min = scores[i];
                min_record++;
            }
        }
    }
    return [max_record, min_record];
}
module.exports = breakingRecords;