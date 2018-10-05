
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