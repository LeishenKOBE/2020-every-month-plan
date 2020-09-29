<template>
  <div>{{ count }}:{{ double }}</div>
  <button @click="increment">+1</button>
  <button @click="getName">getName</button>
  <div ref="div">sdaasd</div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import TalTools from "@tal/common-tool-function";

export default {
  setup(props, ctx) {
    console.log(props, ctx);
    let count = ref(0);
    let double = computed(() => count.value * 2);

    onMounted(() => {
      {
        console.log(TalTools);
      }
    });

    function increment() {
      count.value++;
    }

    const div = ref(null);

    const getName = () => {
      console.log(div.value);
    };
    return {
      count,
      double,
      increment,
      div,
      getName,
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
