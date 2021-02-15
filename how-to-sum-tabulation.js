const howToSum = (targetSum = 0, arr = []) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of arr) {
        const newSum = i + num;
        if (newSum <= targetSum) {
          table[newSum] = [...table[i], num]
        }
      }
    }
  }
  return table[targetSum];
}

console.log(howToSum(0, []));
console.log(howToSum(7, [3, 4]));
console.log(howToSum(7, [3, 3]));
console.log(howToSum(7, [3, 3, 7]));
console.log(howToSum(7, [5, 3, 4, 7]));
console.log(howToSum(7, [1]));
console.log(howToSum(7, [3, 3, 10]));
console.log(howToSum(7, [3, 3, 10, 2]));
console.log(howToSum(300, [7, 14]));

