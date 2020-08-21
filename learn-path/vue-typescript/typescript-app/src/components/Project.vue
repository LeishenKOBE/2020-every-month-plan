<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class Project extends Vue {
  private message: string = "许嵩";
}
</script>
<style lang="less" scoped></style>
