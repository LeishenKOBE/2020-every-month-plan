<template>
  <div v-for="(item, key) in state" :key="key">{{ item.name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Course {
  id: number;
  name: string;
  phone: string;
  address: any;
  company: any;
  email: string;
  username: string;
  website: string;
}

export default defineComponent({
  setup() {
    let state = ref<Course[]>([]);
    fetch("/api/users")
      .then(response => response.json())
      .then(json => {
        state.value.push(...json);
      });

    return {
      state,
    };
  },
});
</script>
