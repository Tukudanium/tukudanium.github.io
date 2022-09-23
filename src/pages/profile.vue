<template>
    <div class="justify-center items-center mt-16 flex w-full h-full">
        <div class="h-800">
            <img src="../assets/image/logo.png" class="" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    name: 'ProfilePage',
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

<style scoped></style>
