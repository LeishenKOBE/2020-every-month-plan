<template>
  <div
    class="hello"
    v-waterMarker="{
      text: 'lzg版权所有',
      textColor: 'rgba(180, 180, 180, 0.4)',
    }"
  >
    <h2>眼儿媚</h2>
    <div>宋-王雱</div>
    <p>杨柳丝丝弄轻柔，烟缕织成愁。海棠未雨，梨花先雪，一半春休。</p>
    <p>而今往事难重醒，归梦绕秦楼。相思只在：丁香枝上，豆蔻梢头。</p>
    <el-button v-debounce="press">点击</el-button>
    <el-input v-model="note" v-emoji></el-input>
    <img v-lazyload="'xxx.jpg'" />
    <el-button v-permission="'1'">权限按钮1</el-button>
    <!-- 不显示 -->
    <el-button v-permission="'10'">权限按钮2</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      note: "",
    };
  },
  methods: {
    press() {
      console.log("press");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
