var quicksort = require("./quicksort");

test('should sort [5,3,13,9,22,6,9,9,4]', () => {
  let result = quicksort.will([5,3,13,9,7,6,22,9,4]);
  let result2 = quicksort.outco([5,3,13,9,7,6,22,9,4]);
  expect(result).toEqual([3,4,5,6,7,9,9,13,22]);
  expect(result2).toEqual([3,4,5,6,7,9,9,13,22]);
});

test('should sort 100 items', () => {
  let ray = [];
  for(let i = 0; i < 100; i++){
    ray.push(Math.floor(Math.random()*100))
  }
  let comp = [...ray];
  comp.sort(function(a,b){
    return a-b;
  });
  let outco = [...ray];
  let will = [...ray];
  expect(quicksort.outco(outco)).toEqual(comp);
  expect(quicksort.will(will)).toEqual(comp);
  
});