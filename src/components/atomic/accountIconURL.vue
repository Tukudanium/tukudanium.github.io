<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    imageSrc: {
        type: String,
        default: '',
    },
    url: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="checker-bg flex items-center justify-center m-4 rounded-full bg-white cursor-pointer">
        <a :href="props.url" target="_blank">
            <img class="w-12 h-12 rounded-full bg-cover bg-center" :src="props.imageSrc" />
        </a>
    </div>
</template>

<style scoped></style>
