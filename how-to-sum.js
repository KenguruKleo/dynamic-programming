let limit = 1e10;
const howToSum = (sum = 0, arr = [], cache = {}) => {
  if (sum === 0) return [];
  if (sum < 0) return null;
  if (sum in cache) {
    return cache[sum];
  }
  limit--;
  if (limit < 0) throw new Error("recurse limit");

  let res =  null;
  for (const item of arr) {
    const newSum = sum - item;
    const newArr = howToSum(newSum, arr, cache); // return new arr ot null
    if (newArr) {
      res = [...newArr, item];
      break;
    }
  }
  cache[sum] = res;

  return res;
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

