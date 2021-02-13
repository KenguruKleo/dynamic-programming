/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/

const gridTraveler = (m, n, cache = {}) => {
  const key = `m=${m},n=${n}`;
  if (key in cache) return cache[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  const res = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache);
  cache[key] = res;
  return res;
}


console.log(gridTraveler(33, 7));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
