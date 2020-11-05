<template>
  <div id="app"><home></home></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./Home.vue";

@Component({
  name: "App",
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}
</style>
