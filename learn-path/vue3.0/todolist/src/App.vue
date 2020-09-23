<template>
  <div>{{count}}:{{double}}</div>
  <button @click="increment">+1</button>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    let count = ref(0);
    let double = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    return {
      count,
      double,
      increment,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
