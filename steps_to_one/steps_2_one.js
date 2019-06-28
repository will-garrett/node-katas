
function minimumStepsToOne(num) {
  let memo = {};
  function step(current_num, depth = 0) {
      if (memo.hasOwnProperty(current_num)) {
          return memo[current_num];
      }
      if (current_num == 1) {
          return depth;
      }
      else {
          console.log("Current: ", current_num, "d:", depth);
          let three = Infinity;
          let two = Infinity;
          let minus = Infinity;
          if (current_num % 3 == 0) {
              three = step(current_num / 3, depth + 1);
          }
          if (current_num % 2 == 0) {
              two = step(current_num / 2, depth + 1);
          }
          minus = step(current_num - 1, depth + 1);

          console.log(three, two, minus);
          memo[current_num] = Math.min(three, two, minus);
          console.log(`Memo:${current_num}`, memo[current_num]);
          return memo[current_num];
      }
  }
  step(num);
  return memo[num];
}
module.exports = minimumStepsToOne