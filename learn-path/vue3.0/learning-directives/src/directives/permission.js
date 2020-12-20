// 背景：在一些后台管理系统，我们可能需要根据用户角色进行一些操作权限的判断，很多时候我们都是粗暴地给一个元素添加 v-if / v-show 来进行显示隐藏，但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。针对这种情况，我们可以通过全局自定义指令来处理。

// 需求：自定义一个权限指令，对需要权限判断的Dom进行显示隐藏
// 思路：
// 1. 自定义一个权限数组
// 2. 判断用户的权限是否在这个数组内，如果是则显示，否则移除dom
function checkArr(key) {
  let arr = ["1", "2", "3", "4", "5"];
  let index = arr.indexOf(key);
  return index > -1;
}

const permission = {
  inserted(el, binding) {
    let permission = binding.value;
    if (permission) {
      let hasPermission = checkArr(permission);
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};
export default permission