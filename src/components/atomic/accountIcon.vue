<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    imageSrc: {
        type: String,
        default: '',
    },
    copyText: {
        type: String,
        default: '',
    },
    balloonText: {
        type: String,
        default: '',
    },
})
const balloon = ref<HTMLImageElement>()
const textToClipBoard = () => {
    navigator.clipboard.writeText(props.copyText)
    if (balloon.value) {
        balloon.value.classList.toggle('is-show')
        setTimeout(() => {
            if (balloon.value) balloon.value.classList.toggle('is-show')
        }, 2000)
    }
}
</script>

<template>
    <div class="checker-bg flex items-center justify-center m-4 rounded-full bg-white cursor-pointer" @click="textToClipBoard()">
        <img class="w-12 h-12 rounded-full bg-cover bg-center" :src="props.imageSrc" />
        <span ref="balloon" class="balloon absolute bg-blue-500 text-blue-100 px-4 py-2 rounded-full">{{ props.balloonText }}</span>
    </div>
</template>

<style scoped>
.balloon {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transition: opacity 1s, visibility 0s ease 1s;
    opacity: 0;
    visibility: hidden;
}
.is-show {
    /* 変更：iOS Safariでも動く */
    transition-delay: 0s;

    opacity: 1;
    visibility: visible;
}
</style>
