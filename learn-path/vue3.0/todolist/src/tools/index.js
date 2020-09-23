import { ref, computed } from "vue";

function useCount() {
  let count = ref(0);
  let double = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };
  return {
    count,
    double,
    increment,
  };
}
export default useCount;
