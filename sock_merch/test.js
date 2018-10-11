const sock_merchant = require('./sock_merchant');

test('Sock Merchant Problem - test 1', () => {
    expect(sock_merchant(9, [10,20,20,10,10,30,50,10,20])).toEqual(3);
});
test('Sock Merchant Problem - test 2', ()=>{
    expect(sock_merchant(5, [1, 2, 3, 4, 5])).toEqual(0);
});
test('Sock Merchant Problem - test 3', ()=>{
    expect(sock_merchant(7, [1, 1, 1, 1, 1, 1, 5])).toEqual(3);
})