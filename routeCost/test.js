const Estimator = require("./estimator");

test('should estimate distance/cost', () => {
  let inputs = [
    {
        id: 0,
        latitude: 34.0316504,
        longitude: -118.3804753
    },
    {
        id: 1,
        latitude: 34.0268537,
        longitude: -118.3932306
    },
    
  ];
  // .97 miles as the crow flys
  let est = new Estimator(inputs);
  let dist = est.nodeDistance();
  let cost_seconds = Math.round(est.estimateTime());
  expect(Math.round(cost_seconds)).toEqual(53);
  let start_time = 8.0;
  let end_time = parseFloat((start_time + ((cost_seconds / 60) / 60)).toFixed(5));
  expect(end_time).toEqual(8.01472);
});