// 在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样会多次重复请求后端接口，造成数据混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据
// 防止按钮在短时间内被多次点击，使用防抖函数限定规定时间内只能点击一次
// 思路：
// 1. 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算时间
// 2. 将时间绑定到click事件上

const debounce = {
  inserted(el, binding) {
    let timer = null;
    el.addEventListener("click", function() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        binding.value();
      }, 1000);
    });
  },
};

export default debounce;
