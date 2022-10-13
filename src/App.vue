<template>
    <div class="h-full flex flex-col">
        <tailblocks-header />
        <transition name="router-transition" enter-active-class="animated zoomIn">
            <router-view />
        </transition>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import tailblocksHeader from './components/tailblocks/header.vue'

export default {
    name: 'App',
    components: {
        tailblocksHeader,
    },
    setup() {
        const msg = ref('hello')

        const changeMsg = () => {
            msg.value = 'world'
        }

        return {
            msg,
            changeMsg,
        }
    },
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css';
</style>
