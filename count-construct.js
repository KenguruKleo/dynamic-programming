const countConstruct = (target, arr, memo = {}) => {
  if (target === "") return 1;
  if (target in memo) {
    return memo[target];
  }

  let count = 0
  for (const word of arr) {
    const index = target.indexOf(word);
    if (index === 0) {
      const newTarget = target.slice(word.length);
      const res = countConstruct(newTarget, arr, memo);
      count = count + res;
    }
  }

  memo[target] = count;
  return count;
}

console.log(countConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(countConstruct("skateboard", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
