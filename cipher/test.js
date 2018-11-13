var cipher = require("./cipher");

let my_cipher = new cipher("caesar", 5);

test('should utilize caesar cipher', () => {
    expect(my_cipher.alg).toEqual("caesar");
});
test('should should return ', () => {
    
});

