var cipher = require("./cipher");

let my_cipher = new cipher("aes","secret_pass_key");

test('should return something encrypt and decrypt `Hello World!`', () => {
    expect(my_cipher.encrypt("Hello World!")).toEqual("fdcff29657926c109a037864");
    expect(my_cipher.decrypt("fdcff29657926c109a037864")).toEqual("Hello World!");
});
test('should be able to set a new passkey using the old pass key', () => {
    expect(my_cipher.setKey("not the secret passkey", "new pass key")).toEqual(false);
    expect(my_cipher.setKey("secret_pass_key", "new pass key")).toEqual(true);
});
test('should be able to encrypt `Hello World!` with different passkey', ()=>{
    expect(my_cipher.encrypt("Hello World!")).toEqual("b01b47f2e3ab760ac8bc04e0");
    expect(my_cipher.decrypt("b01b47f2e3ab760ac8bc04e0")).toEqual("Hello World!");
});