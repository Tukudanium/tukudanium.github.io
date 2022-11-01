<script lang="ts" setup>
import { Ref, ref } from 'vue'
import accountIcon from '../atomic/accountIcon.vue'
import accountIconURL from '../atomic/accountIconURL.vue'
const props = defineProps({
    requiredUrl: {
        type: Function,
        default: () => {
            return
        },
    },
})
const maillBalloon = ref<HTMLImageElement>()
const textToClipBoard = (text: string, ref: HTMLImageElement | undefined) => {
    navigator.clipboard.writeText(text)
    if (ref) {
        ref.classList.toggle('is-show')
        setTimeout(() => {
            if (ref) ref.classList.toggle('is-show')
        }, 2000)
    }
}
</script>

<template>
    <div class="w-80 my-6 bg-gray-300 shadow rounded border border-transparent">
        <div class="w-full checker-bg items-center justify-center p-4">
            <h1 class="text-gray-900 font-medium text-lg">アカウント</h1>
            <div class="flex items-center justify-center">
                <accountIconURL :image-src="requiredUrl('twitterBlue')" url="https://twitter.com/tukudanium"></accountIconURL>
                <accountIconURL :image-src="requiredUrl('github')" url="https://github.com/Tukudanium"></accountIconURL>
            </div>
            <div class="flex items-center justify-center">
                <accountIcon :image-src="requiredUrl('steam')" copy-text="985401011" balloon-text="Steamのフレンドコードをコピーしました。"></accountIcon>
                <accountIcon :image-src="requiredUrl('discode')" copy-text="つくだに#2366" balloon-text="Discodeのユーザー名をコピーしました。"></accountIcon>
            </div>
        </div>

        <div class="w-full checker-bg items-center justify-center p-4">
            <h1 class="text-gray-900 font-medium text-lg">メール</h1>
            <div class="items-center justify-center pt-3">
                <h1 class="text-gray-900 font-medium text-lg cursor-pointer hover:text-purple-700" @click="textToClipBoard('tukudanium9349@outlook.jp', maillBalloon)">tukudanium9349@outlook.jp</h1>
                <span ref="maillBalloon" class="balloon absolute bg-blue-500 text-blue-100 px-4 py-2 rounded-full">メールアドレスをコピーしました。</span>
                <h1 class="text-pink-700 font-medium text-base">※めったに確認してません。お返事あんまり期待しないでください。</h1>
                <h1 class="text-pink-700 font-medium text-base">迅速にお返事が欲しい方はTwitterのDMからどうぞ。</h1>
            </div>
        </div>
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
