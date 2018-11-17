//https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, arr) {
    let ontime_students = 0;
    for(let student of arr){
        if(student <= 0){
            ontime_students++;
        }
    }
    return (ontime_students < k) ? "YES" : "NO";
}

module.exports = angryProfessor;