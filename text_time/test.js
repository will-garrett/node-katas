var textTime = require("./text_time");
test('Should return time as three O\'clock', ()=>{

    var test0 = new Date('03 Nov 2018 15:02:20');
    expect(textTime(test0)).toEqual("It is three O'clock");
    var test1 = new Date('03 Nov 2018 15:00:00');
    expect(textTime(test1)).toEqual("It is three O'clock");
});

test('Should return time as almost five minutes past three', ()=>{
    var test = new Date('03 Nov 2018 15:02:30');
    expect(textTime(test)).toEqual("It is almost five minutes past three");
    var test1 = new Date('03 Nov 2018 15:03:00');
    expect(textTime(test1)).toEqual("It is almost five minutes past three");

});

test('Should return time as almost five minutes past three', ()=>{
    var test = new Date('03 Nov 2018 15:05:00');
    expect(textTime(test)).toEqual("It is five minutes past three");
});

test('Should return time as five minutes past three', ()=>{
    var test = new Date('03 Nov 2018 15:07:29');
    expect(textTime(test)).toEqual("It is five minutes past three");    
});

test('Should return time as almost ten minutes past three', ()=>{
    var test = new Date('03 Nov 2018 15:07:30');
    expect(textTime(test)).toEqual("It is almost ten minutes past three");    
});

test('Should return time as ten minutes past three', ()=>{
    var test = new Date('03 Nov 2018 15:10:00');
    expect(textTime(test)).toEqual("It is ten minutes past three");    
});

test('Should return time as quarter to twelve', ()=>{
    var test = new Date('03 Nov 2018 23:45:00');
    expect(textTime(test)).toEqual("It is quarter to twelve");    
});

test('Should return time as five minutes to twelve', ()=>{
    var test = new Date('03 Nov 2018 23:55:00');
    expect(textTime(test)).toEqual("It is five minutes to twelve");    

    var test1 = new Date('03 Nov 2018 23:57:29');
    expect(textTime(test1)).toEqual("It is five minutes to twelve");    
});

test('Should return time as almost twelve o\'clock', ()=>{
    var test = new Date('03 Nov 2018 23:57:30');
    expect(textTime(test)).toEqual("It is almost twelve O'clock");    
    var test1 = new Date('03 Nov 2018 23:59:59');
    expect(textTime(test1)).toEqual("It is almost twelve O'clock");    
});

test('Should return time as half past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:30:00');
    expect(textTime(test)).toEqual("It is half past eleven");    
});
test('Should return time as twenty five minutes past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:25:00');
    expect(textTime(test)).toEqual("It is twenty five minutes past eleven");    
});

test('Should return time as twenty five minutes to twelve', ()=>{
    var test = new Date('03 Nov 2018 23:35:00');
    expect(textTime(test)).toEqual("It is twenty five minutes to twelve");    
});

test('Should return time as almost half past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:29:00');
    expect(textTime(test)).toEqual("It is almost half past eleven");    
});
test('Should return time as almost half past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:27:30');
    expect(textTime(test)).toEqual("It is almost half past eleven");    
});
test('Should return time as quarter past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:15:00');
    expect(textTime(test)).toEqual("It is quarter past eleven");    
});

test('Should return time as almost quarter past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:14:00');
    expect(textTime(test)).toEqual("It is almost quarter past eleven");    
});

test('Should return time as ten minutes past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:12:29');
    expect(textTime(test)).toEqual("It is ten minutes past eleven");    
});

test('Should return time as almost quarter past eleven', ()=>{
    var test = new Date('03 Nov 2018 23:09:29');
    expect(textTime(test)).toEqual("It is almost ten minutes past eleven");    
});

