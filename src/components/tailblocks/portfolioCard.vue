<script lang="ts" setup>
import { Link } from '../../types/link'
const props = defineProps({
    imagePath: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    summarys: {
        type: Array as () => string[],
        default: () => [],
    },
    links: {
        type: Array as () => Link[],
        default: () => [],
    },
})
</script>

<template>
    <div class="w-96 h-96 my-6 mx-4 bg-gray-300 shadow rounded border border-transparent">
        <div class="h-2/5 flex">
            <div class="h-full w-36 checker-bg items-center justify-center p-5 text-blue-500">
                <div class="w-28 h-28 checker-bg flex items-center justify-center rounded-lg">
                    <img class="w-28 h-28 bg-gray-100 bg-cover bg-center rounded-lg" :src="imagePath" />
                </div>
            </div>
            <div class="py-5 pr-5 w-56">
                <div class="text-left">
                    <h1 class="text-gray-900 font-medium text-lg">◆{{ title }}</h1>
                </div>
            </div>
        </div>
        <div class="h-3/5">
            <div class="h-3/4 flex flex-col justify-center text-left p-5 pt-2 border-t border-gray-400">
                <div v-for="summary in summarys" :key="summary">
                    <h1 class="text-gray-900 font-medium text-base">・{{ summary }}</h1>
                </div>
            </div>
            <div class="h-1/4 text-left p-5 py-1 border-t border-gray-400">
                <div v-for="link in links" :key="link.text">
                    <a :href="link.url" class="text-indigo-600 text-sm no-underline hover:underline ...">{{ link.text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
