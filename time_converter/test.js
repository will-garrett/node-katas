var time_convert = require("./time_converter");

test('should convert time', () => {
    expect(time_convert("07:05:45PM")).toEqual("19:05:45");
});