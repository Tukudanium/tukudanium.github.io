<script lang="ts" setup>
const props = defineProps({
    iconImagePath: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="w-80 my-6 bg-gray-300 shadow rounded border border-transparent">
        <div class="h-60 w-full checker-bg items-center justify-center p-4">
            <div class="checker-bg flex items-center justify-center m-4">
                <img class="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center" :src="iconImagePath" />
            </div>
            <h1 class="text-gray-900 font-medium text-lg">佐川 仁庸</h1>
            <h1 class="text-gray-900 font-medium text-lg">tukudani</h1>
        </div>

        <div class="p-4 border-t border-gray-400">
            <div class="flex items-center justify-between">
                <h1 class="text-gray-900 font-medium text-lg">◆ 経歴</h1>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
