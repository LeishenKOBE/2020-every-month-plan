export default function lookup(dataObj, keyName) {
  if (keyName.indexOf(".") >= 0 && keyName !== ".") {
    const arr = keyName.split(".");
    let temp = dataObj;
    for (let i = 0; i < arr.length; i++) {
      temp = temp[arr[i]];
    }
    return temp;
  }
  return dataObj[keyName];
}
