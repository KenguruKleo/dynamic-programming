const allConstruct = (target, arr, memo = {}) => {
  if (target === "") return [[]];
  if (target in memo) {
    return memo[target];
  }

  let resArr = []
  for (const word of arr) {
    const index = target.indexOf(word);
    if (index === 0) {
      const newTarget = target.slice(word.length);
      const res = allConstruct(newTarget, arr, memo);
      resArr = [...resArr, ...res.map(item => [word, ...item])];
    }
  }

  memo[target] = resArr;
  return resArr;
}

console.log(allConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
