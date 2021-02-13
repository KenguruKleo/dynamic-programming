let limit = 1e10;
const bestSum = (sum = 0, arr = [], cache = {}) => {
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
    const newArr = bestSum(newSum, arr, cache); // return new arr ot null
    if (newArr) {
      const newRes = [...newArr, item];
      if (res === null) {
        res = newRes;
      } else if (newRes.length < res.length) {
        res = newRes;
      }
    }
  }
  cache[sum] = res;

  return cache[sum];
}

console.log(bestSum(0, []));
console.log(bestSum(7, [3, 4]));
console.log(bestSum(7, [3, 3]));
console.log(bestSum(7, [3, 3, 7]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [1]));
console.log(bestSum(7, [3, 3, 10]));
console.log(bestSum(7, [3, 3, 10, 2]));
console.log(bestSum(8, [2, 3, 5]));
//console.log(bestSum(300, [7, 14]));

