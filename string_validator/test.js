
const Stack = require('./stack');
const string_validator = require('./index');

test('Validates a valid string ', () => {
    const n = "([{}]([]){()})";
    expect(string_validator(n)).toEqual(true);
});
test('Invalidates an invalid string ', () => {
    const n = "([{}][{()}][)";
    expect(string_validator(n)).toEqual(false);
});
test('Stack class test', ()=>{
    var my_stack = new Stack();
    my_stack.push("ABBA");
    expect(my_stack.empty()).toEqual(false);
    my_stack.pop();
    expect(my_stack.empty()).toEqual(true);
});