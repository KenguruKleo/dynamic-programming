
const canSum = (targetSum = 0, arr = []) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let j = 0; j < arr.length; j++) {
        const newSum = i + arr[j];
        if (newSum <= table.length) {
          table[newSum] = true;
        }
      }
    }
  }
  return table[targetSum];
}

console.log(canSum(0, [])); //true
console.log(canSum(7, [3, 4])); //true
console.log(canSum(7, [3, 3])); //false
console.log(canSum(7, [3, 3, 7])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [1])); //true
console.log(canSum(7, [3, 3, 10])); //false
console.log(canSum(7, [3, 3, 10, 2])); //true
console.log(canSum(300, [7, 14])); //false

