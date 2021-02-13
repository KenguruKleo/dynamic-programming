const canConstruct = (target, arr, memo = {}) => {
  if (target === "") return true;
  if (target in memo) {
    return memo[target];
  }

  for (const word of arr) {
    const index = target.indexOf(word);
    if (index >= 0) {
      const newTarget = target.replace(word, "");
      const res = canConstruct(newTarget, arr, memo);
      memo[newTarget] = res;
      if (res) {
        return true;
      }
    }
  }
  return false;
}

console.log(canConstruct("", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
