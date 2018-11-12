var caesar_cipher = require("./cipher");
//abcdefghijklmnopqrstuvwxyz
test('should return "Mjqqt Btwqi" from "Hello World" with a shift of 5', () => {
    expect(caesar_cipher("Hello World", 5)).toEqual("Mjqqt Btwqi");
});