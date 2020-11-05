<template>
  <button class="ui-button" @click="onClick" :class="{ 'ui-btn-large': large }">
    <slot>Button</slot>
  </button>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  @Prop(Boolean) large: boolean | undefined;

  @Emit("clickEve")
  emitClick() {
    return "Hello";
  }
  onClick() {
    this.emitClick();
  }

  private mounted() {
    console.log(this.large);
  }
}
</script>


<style lang="stylus" scoped>
.ui-button {
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  border: 0 solid black;
  border-radius: 4px;
  color: #17233d;
  background-color: #2d8cf0;
  outline: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.09rem;
  cursor: pointer;
  user-select: none;
}
.ui-btn-large{
    min-width 78px
    height  44px
    padding 0 19px
    
}
</style>