<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({})
</script>
<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div class="h-800">
            <img src="../assets/image/logo.png" class="glitch animation" />
        </div>
    </div>
</template>

<style scoped>
.animation {
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-duration: 0.1s;
}
.glitch {
    animation: glitch_effect 0.1s infinite;
}
@keyframes glitch_effect {
    0% {
        -webkit-filter: drop-shadow(1px 0px 0.7px #ea36af) drop-shadow(-2px 0px 0.5px #75fa69);
    }
    100% {
        -webkit-filter: drop-shadow(1.7px 0.8px 1.3px #ea36af) drop-shadow(-1.5px -0.5px 2px #75fa69);
    }
}
</style>
