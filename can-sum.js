let limit = 1e10;
const canSum = (sum = 0, arr = [], cache = {}) => {
  if (sum === 0) return true;
  if (sum < 0) return false;
  if (sum in cache) {
    return cache[sum];
  }
  limit--;
  if (limit < 0) throw new Error("recurse limit");

  // const newArr = arr.filter(item => item <= sum);
  const res =  arr.some(item => {
    const newSum = sum - item;
    // const newArr = arr.filter(arrItem => arrItem <= newSum);
    // return canSum(newSum, newArr);
    return canSum(newSum, arr, cache);
  });
  cache[sum] = res;

  return res;
}

console.log(canSum(0, []));
console.log(canSum(7, [3, 4]));
console.log(canSum(7, [3, 3]));
console.log(canSum(7, [3, 3, 7]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [1]));
console.log(canSum(7, [3, 3, 10]));
console.log(canSum(7, [3, 3, 10, 2]));
console.log(canSum(300, [7, 14]));

