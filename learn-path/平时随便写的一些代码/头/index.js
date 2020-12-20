const handleToggle = (bool) => {
  const arr = bool ? ["list-left", "list-right"] : ["list-right", "list-left"];
  const classArr = bool
    ? ["top-item-left", "top-item-right"]
    : ["top-item-right", "top-item-left"];
  setStyle(arr);
  changClass(classArr);
};

const setStyle = (arr) => {
  document.getElementsByClassName(arr[0])[0].style.display = "block";
  document.getElementsByClassName(arr[1])[0].style.display = "none";
};

const changClass = (arr) => {
  document.getElementsByClassName(arr[0])[0].classList.add("active");
  document.getElementsByClassName(arr[1])[0].classList.remove("active");
};
