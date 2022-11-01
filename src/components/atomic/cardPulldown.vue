<script lang="ts" setup>
import { Ref, ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
})
const pulldownFlag: Ref<boolean> = ref(false)
function pulldownChange() {
    pulldownFlag.value = !pulldownFlag.value
}
</script>

<template>
    <div class="flex items-center justify-between group cursor-pointer" @click="pulldownChange()">
        <h1 class="text-gray-900 font-medium text-xl group-hover:text-purple-700">{{ props.title }}</h1>
        <h1 v-if="!pulldownFlag" class="text-gray-900 font-medium text-xl group-hover:text-purple-700">▼</h1>
        <h1 v-else class="text-gray-900 font-medium text-xl group-hover:text-purple-700">▲</h1>
    </div>
    <div v-if="pulldownFlag" class="items-center justify-between pt-2">
        <slot></slot>
    </div>
</template>

<style scoped></style>
