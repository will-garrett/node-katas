// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    var rounded_grades = [];
    for(let grade of grades){
        let next_five = Math.ceil(grade/5)*5;
        if(grade < 38){
            rounded_grades.push(grade);
        }
        else if(next_five - grade < 3){
            rounded_grades.push(next_five);
        }
        else{
            rounded_grades.push(grade);
        }
    }
    return rounded_grades;

}
module.exports = gradingStudents;