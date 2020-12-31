const vm = new Vue({
  el: "#app",
  data() {
    return {
      msg: "Hello world",
    };
  },
  methods: {
    sayHello() {
      console.log(this.msg);
    },
  },
});
