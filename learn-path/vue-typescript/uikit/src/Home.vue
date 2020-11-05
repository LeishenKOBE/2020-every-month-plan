<template>
  <div class="root-home">
    <UIButton @clickEve="onClick" large>点我压</UIButton>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UIButton from "@/components/UIKit/UIbutton.vue";

@Component({
  components: {
    UIButton,
  },
})
export default class Home extends Vue {
  private onClick(demo: string) {
    console.log(demo);
  }
}
</script>


<style lang="stylus" scoped>
.root-home {
  width: 480px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>