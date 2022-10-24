<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({})
const msg = ref('hello')
const changeMsg = () => {
    msg.value = 'world'
}
</script>

<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div class="h-800">contact</div>
    </div>
</template>

<style scoped></style>
