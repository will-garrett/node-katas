var student_grader = require("./grader");

test('Should accurately round students - test 1', () => {
    expect(student_grader([71,72,73,67,38,33,75,84])).toEqual([71,72,75,67,40,33,75,85]);
});