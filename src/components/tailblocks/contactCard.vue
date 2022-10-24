<script lang="ts" setup>
import { Ref, ref } from 'vue'
const props = defineProps({
    requiredUrl: {
        type: Function,
        default: () => {
            return
        },
    },
})
const discodeBalloon = ref<HTMLImageElement>()
const steamBalloon = ref<HTMLImageElement>()
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
                <div class="checker-bg flex items-center justify-center m-4">
                    <a href="https://twitter.com/tukudanium">
                        <img class="w-12 h-12 rounded-full bg-cover bg-center" :src="requiredUrl('twitterBlue')" />
                    </a>
                </div>
                <div class="checker-bg flex items-center justify-center m-4 cursor-pointer" @click="textToClipBoard('つくだに#2366', discodeBalloon)">
                    <img class="w-12 h-12 rounded-full bg-cover bg-center relative" :src="requiredUrl('discode')" />
                    <span ref="discodeBalloon" class="balloon absolute bg-blue-500 text-blue-100 px-4 py-2 rounded-full"> Discodeのユーザー名をコピーしました。 </span>
                </div>
                <div class="checker-bg flex items-center justify-center m-4 cursor-pointer" @click="textToClipBoard('985401011', steamBalloon)">
                    <img class="w-12 h-12 rounded-full bg-cover bg-center" :src="requiredUrl('steam')" />
                    <span ref="steamBalloon" class="balloon absolute bg-blue-500 text-blue-100 px-4 py-2 rounded-full"> Steamのフレンドコードをコピーしました。 </span>
                </div>
            </div>
        </div>

        <div class="w-full checker-bg items-center justify-center p-4">
            <h1 class="text-gray-900 font-medium text-lg">メール</h1>
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
