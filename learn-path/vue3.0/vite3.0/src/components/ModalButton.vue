<template>
  <button @click="modalOpen = true">弹出一个模态窗口</button>
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>这是一个弹窗<button @click="modalOpen = false">关闭</button></div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let modalOpen = ref(true);

    return {
      modalOpen,
    };
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
