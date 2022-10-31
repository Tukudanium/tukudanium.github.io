<script lang="ts" setup>
import { Ref, ref } from 'vue'
const props = defineProps({
    iconImagePath: {
        type: String,
        default: '',
    },
})
const historyFlag: Ref<boolean> = ref(false)
const hobbyFlag: Ref<boolean> = ref(false)
const skillFlag: Ref<boolean> = ref(false)
function pulldownChange(target: string) {
    switch (target) {
        case 'history':
            historyFlag.value = !historyFlag.value
            break
        case 'hobby':
            hobbyFlag.value = !hobbyFlag.value
            break
        case 'skill':
            skillFlag.value = !skillFlag.value
            break
        default:
            break
    }
}
</script>

<template>
    <div class="w-9/12 my-6 mx-auto bg-gray-300 shadow rounded border border-transparent sm:w-96">
        <div class="h-60 w-full checker-bg items-center justify-center p-4">
            <div class="checker-bg flex items-center justify-center m-4">
                <img class="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center" :src="iconImagePath" />
            </div>
            <h1 class="text-gray-900 font-medium text-xl">佐川 仁庸</h1>
            <h1 class="text-gray-900 font-medium text-lg">tukudani</h1>
        </div>

        <div class="p-4 border-t border-gray-400">
            <div class="flex items-center justify-between">
                <h1 class="text-gray-900 font-medium text-xl">◆ 経歴</h1>
                <h1 v-if="!historyFlag" class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('history')">▼</h1>
                <h1 v-else class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('history')">▲</h1>
            </div>
            <div v-if="historyFlag" class="items-center justify-between">
                <h1 class="text-gray-900 font-medium text-left text-lg">福島県出身。他になりたいものが特になかったため親の進める福祉大学の作業療法専攻へ進んだが、向いていなさ過ぎたことにより精神を破壊されたため、考え直した結果専門学校からITの道を目指すことにした。</h1>
                <h1 class="text-gray-900 font-medium text-left text-lg">専門２年から地元IT企業でのアルバイトで開発経験を積み、そのままアルバイト先へ就職。</h1>
                <h1 class="text-gray-900 font-medium text-left text-lg">現在は主にWEBのフロントエンド開発に携わっている。</h1>
            </div>
        </div>
        <div class="p-4 border-t border-gray-400">
            <div class="flex items-center justify-between">
                <h1 class="text-gray-900 font-medium text-xl">◆ 趣味</h1>
                <h1 v-if="!hobbyFlag" class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('hobby')">▼</h1>
                <h1 v-else class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('hobby')">▲</h1>
            </div>
            <div v-if="hobbyFlag" class="items-center justify-between">
                <h1 class="text-gray-900 font-medium text-left text-lg">ゲーム</h1>
                <h1 class="ml-3 text-gray-900 font-medium text-left text-lg">・任天堂ハードのゲームのほか、STEAMセールでゲームを買いあさったりする。</h1>
                <h1 class="ml-3 text-gray-900 font-medium text-left text-lg">・好きなジャンルはローグライク、ローグライト。このジャンルではThe Binding of Isaacが一番好き。</h1>
            </div>
        </div>
        <div class="p-4 border-t border-gray-400">
            <div class="flex items-center justify-between">
                <h1 class="text-gray-900 font-medium text-lg">◆ スキル</h1>
                <h1 v-if="!skillFlag" class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('skill')">▼</h1>
                <h1 v-else class="text-gray-900 font-medium text-xl cursor-pointer" @click="pulldownChange('skill')">▲</h1>
            </div>
            <div v-if="skillFlag" class="items-center justify-between">
                <h1 class="text-gray-900 font-medium text-left text-lg">実務、自主開発でで２か月以上使用した言語、技術について表記します。</h1>
                <h1 class="text-gray-900 font-medium text-left text-lg"></h1>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
