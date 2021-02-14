// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.

const stairsWaysCount = (stairs, maxSteps, memo = {}) => {
  if (stairs in memo) return memo[stairs];
  if (stairs === 0) return 1;
  if (stairs < 0) return 0;
  let ways = 0;
  for (let step = 1; step <= maxSteps; step++) {
    ways += stairsWaysCount(stairs - step, maxSteps, memo);
  }
  memo[stairs] = ways;
  return ways;
}

console.log(stairsWaysCount(3, 3)); //24
console.log(stairsWaysCount(4, 3)); //24
console.log(stairsWaysCount(6, 3)); //24
console.log(stairsWaysCount(6, 4)); //29

// use tabulator
const stairsWaysCountWithTabulator = (stairs, maxSteps) => {
  // to tell the truth - we do not need table, we need only 1 dimension vector
  const table = Array(maxSteps + 1)
    .fill(0)
    .map(() => Array(stairs + 1).fill(0));
  for (let i = 1; i <= maxSteps; i++) {
    table[i][0] = 1;

    for (let j = 1; j <= stairs; j++) {
      // table [i][j] - sum all previous possible steps
      let ways = 0;
      for (let step = 1; step <= i; step++) {
        const k = j - step;
        if (k < 0) continue; // skip negative
        ways += table[i][k];
      }
      table[i][j] = ways;
    }
  }
  return table[maxSteps][stairs];
}

console.log(stairsWaysCountWithTabulator(3, 3)); //24
console.log(stairsWaysCountWithTabulator(4, 3)); //24
console.log(stairsWaysCountWithTabulator(6, 3)); //24
console.log(stairsWaysCountWithTabulator(6, 4)); //29
