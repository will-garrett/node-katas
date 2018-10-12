const stairs = require('./stairs');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('stairs is a function', () => {
  expect(typeof stairs).toEqual('function');
});

test('stairs called with n = 1', () => {
  stairs(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('stairs called with n = 2', () => {
  stairs(2);
  expect(console.log.mock.calls[0][0]).toEqual(' #');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('stairs called with n = 3', () => {
    stairs(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #');
    expect(console.log.mock.calls[1][0]).toEqual(' ##');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
});