<script lang="ts" setup>
import { PortfolioItem } from '../../types/portfolioItem'
interface Props {
    item: PortfolioItem
}
const props = defineProps<Props>()
</script>

<template>
    <div class="w-96 h-96 my-6 mx-4 bg-gray-300 shadow rounded border border-transparent">
        <div class="h-2/5 flex">
            <div class="h-full w-36 checker-bg items-center justify-center p-5">
                <div class="w-28 h-28 checker-bg flex items-center justify-center rounded-lg">
                    <img class="w-28 h-28 bg-gray-100 bg-cover bg-center rounded-lg" :src="props.item.imagePath" />
                </div>
            </div>
            <div class="py-5 pr-5 w-56">
                <div class="text-left">
                    <h1 class="text-gray-900 font-medium text-lg">◆{{ props.item.title }}</h1>
                </div>
                <div class="text-left flex">
                    <div
                        v-for="tech in props.item.techs"
                        :key="tech.text"
                        class="rounded-full px-2 pb-1 m-1"
                        :class="tech.color"
                    >
                        <h1 class="text-gray-900 font-medium text-sm font-sans">{{ tech.text }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-3/5">
            <div class="h-2/3 flex flex-col justify-center text-left p-5 border-t border-gray-400">
                <div v-for="summary in props.item.summarys" :key="summary">
                    <h1 class="text-gray-900 font-medium text-base">・{{ summary }}</h1>
                </div>
            </div>
            <div class="h-1/3 text-left p-5 py-0.5 border-t border-gray-400">
                <div v-for="link in props.item.links" :key="link.text">
                    <a
                        :href="link.url"
                        target="_blank"
                        class="text-indigo-600 text-sm no-underline hover:underline ..."
                        >{{ link.text }}</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
