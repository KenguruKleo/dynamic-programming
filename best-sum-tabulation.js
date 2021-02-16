const bestSum = (targetSum = 0, arr = []) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of arr) {
        const newIndex = i + num;
        if (newIndex <= targetSum) { // prevent overflow array index
          const newCandidate = [...table[i], num];
          const oldValue = table[newIndex];
          if (oldValue === null || oldValue.length > newCandidate) {
            table[newIndex] = newCandidate;
          }
        }
      }
    }
  }
  return table[targetSum];
}

console.log(bestSum(0, []));
console.log(bestSum(7, [3, 4]));
console.log(bestSum(7, [3, 3]));
console.log(bestSum(7, [3, 3, 7]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [1]));
console.log(bestSum(7, [3, 3, 10]));
console.log(bestSum(7, [3, 3, 10, 2]));
console.log(bestSum(300, [7, 14]));

