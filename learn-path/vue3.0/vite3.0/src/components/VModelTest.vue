<template>
<div @click="handleClick">
    {{ modelValue }}
</div>
</template>

<script>
import {
    ref,
    onMounted,
    reactive,
    watch,
    computed
} from "vue";

export default {
    name: "",
    props: {
        modelValue: {
            default: "xusong",
        },
    },
    components: {},
    setup(context) {
        const handleClick = () => {
            context.emit('update:modelValue', (context.modelValue = '许嵩'))
        }

        return {
            handleClick
        }
    },
};
</script>

<style scoped>
</style>
