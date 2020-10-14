<template>
<h1>{{ msg }}</h1>
<p>{{dobule.count}}</p>
<p>{{dobule.dobule}}</p>
<EmitsEvent @click="onClick"></EmitsEvent>
<VModelTest v-model="demo"></VModelTest>
</template>

<script>
import {
    ref,
    computed,
    reactive,
    onMounted,
    onUnmounted,
} from 'vue'
import ModalButton from './ModalButton.vue'
import EmitsEvent from './EmitsEvent.vue'
import VModelTest from './VModelTest.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        ModalButton,
        EmitsEvent,
        VModelTest
    },
    setup() {
        let dobule = reactive({
            count: 1,
            dobule: computed(() => dobule.count * 2)
        })
        let timer
        onMounted(() => {
            timer = setInterval(() => {
                dobule.count += 1
            }, 1000)
        })
        onUnmounted(() => {
            clearInterval(timer)
        })
        const onClick = () => {
            console.log(1)
        }
        let demo = ref(1)
        return {
            dobule,
            onClick,
            demo
        }
    }
}
</script>
