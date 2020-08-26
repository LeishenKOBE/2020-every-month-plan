const permute = (input) => {
  let permArr = [],
    usedChars = [];
  const main = (input) => {
    for (let i = 0; i < input.length; i += 1) {
      let ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };
  return main(input);
};
