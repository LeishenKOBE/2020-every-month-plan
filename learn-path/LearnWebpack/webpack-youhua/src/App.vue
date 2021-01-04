<template>
  <div>
    <p>{{ number }}</p>
    <a-button @click="increase">+1</a-button>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["increaseNumber"]),
    increase() {
      this.increaseNumber();
    },
  },
  computed: {
    ...mapState(["number"]),
  },
  watch: {},
  created() {},
};
</script>
<style scoped>
</style>