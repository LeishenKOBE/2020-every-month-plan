// 最长公共前缀
const longestCommonPrefix = (strs) => {
  let str = strs[0];
  if (!str) return "";
  let res = "";
  for (let i = 0; i < str.length; i += 1) {
    let flag = strs.every((item) => item[i] === str[i]);
    if (flag) {
      res += str[i];
    } else {
      return res;
    }
  }
  return res;
};

const arr = ["floor", "flower"];
console.log(longestCommonPrefix(arr))