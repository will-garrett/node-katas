let travelDest = require("./buildItinerary");


test('should return a list of destination cities', () => {
  let travel_list = [
    {src: 'MEX', dest: 'GER'},
    {src: 'UK', dest: 'MEX'},
    {src: 'USA', dest: 'CAN'},
    {src: 'CAN', dest: 'UK'}
  ];
  expect(travelDest(travel_list)).toEqual(['USA', 'CAN', 'UK', 'MEX', 'GER']);
});
test('should return a empty list', () => {
  expect(travelDest([])).toEqual([])
});
test('should return correctly for one source and destination', () => {
  expect(travelDest([{src: 'MEX', dest: 'USA'}])).toEqual(['MEX', 'USA']);
});
test('should return a list of destinations', () => {
  expect(travelDest([
    {src: 'MEX', dest: 'BAH'},
    {src: 'USA', dest: 'MEX'},
    {src: 'BAH', dest: 'CAN'}
  ])).toEqual(['USA', 'MEX', 'BAH', 'CAN']);
});