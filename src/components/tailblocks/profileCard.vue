<script lang="ts" setup>
import { ref } from 'vue'
import cardPulldown from '../atomic/cardPulldown.vue'
import TextLarge from '../atomic/TextLarge.vue'
const props = defineProps({
    iconImagePath: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="w-9/12 mt-6 mb-40 mx-auto bg-gray-300 shadow rounded border border-transparent sm:w-96">
        <div class="h-60 w-full checker-bg items-center justify-center p-4">
            <div class="checker-bg flex items-center justify-center m-4">
                <img class="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center" :src="props.iconImagePath" />
            </div>
            <h1 class="text-gray-900 font-medium text-xl">佐川 仁庸</h1>
            <h1 class="text-gray-900 font-medium text-lg">tukudani</h1>
        </div>
        <div class="p-4 border-t border-gray-400">
            <cardPulldown :title="'● 経歴'">
                <TextLarge>福島県出身。他になりたいものが特になかったため親の進める福祉大学の作業療法専攻へ進んだが、向いていなさ過ぎたことにより精神を破壊されたため、考え直した結果専門学校からITの道を目指すことにした。</TextLarge>
                <TextLarge>専門２年から地元IT企業でのアルバイトで開発経験を積み、そのままアルバイト先へ就職。</TextLarge>
                <TextLarge>現在は主にWEBのフロントエンド開発に携わっている。</TextLarge>
            </cardPulldown>
        </div>
        <div class="p-4 border-t border-gray-400">
            <cardPulldown :title="'● 趣味'">
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・ゲーム'">
                        <TextLarge>・任天堂ハードのゲームのほか、STEAMセールでゲームを買いあさったりする。</TextLarge>
                        <TextLarge>・STEAMでの所持ゲームは現在43個。</TextLarge>
                        <TextLarge>・好きなジャンルはローグライク、ローグライト。このジャンルではThe Binding of Isaacが一番好き。</TextLarge>
                    </cardPulldown>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・飲酒'">
                        <TextLarge>・自分で手をかけてつまみを作り、YouTubeなどを見ながら一杯やってくつろぐのが楽しみ。</TextLarge>
                        <TextLarge>・最近は松茸の土瓶蒸しを自作することを覚えた。</TextLarge>
                        <TextLarge>・飲めないお酒などは特になく、大体飲む。ビール、日本酒、ウイスキー等のあまり甘くないお酒が好き。</TextLarge>
                    </cardPulldown>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・読書'">
                        <TextLarge>・剣客ものの時代小説が好き。</TextLarge>
                        <TextLarge>・一番好きな本は藤沢周平著「よろずや平四郎活人剣」</TextLarge>
                    </cardPulldown>
                </div>
            </cardPulldown>
        </div>
        <div class="p-4 border-t border-gray-400">
            <cardPulldown :title="'● スキル'">
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <h1 class="text-gray-900 text-left font-medium text-xl ml-2 group-hover:text-purple-700">言語</h1>
                    <div class="p-2 my-2 border rounded-lg border-blue-700">
                        <cardPulldown :title="'javascript,typescript'">
                            <TextLarge>制作物、業務共にWEB系が中心のため現在に至るまでメインで取り扱っています。</TextLarge>
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-red-600">
                        <cardPulldown :title="'HTML'">
                            <TextLarge>フロントエンドの業務が多いためこちらも扱うことが多いです。</TextLarge>
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-blue-500">
                        <cardPulldown :title="'CSS'">
                            <TextLarge>デザインセンスはないので苦手よりですが、業務上使わないことがないので最低限ＵＩは自身で作れるようにしています。</TextLarge>
                        </cardPulldown>
                    </div>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <h1 class="text-gray-900 text-left font-medium text-xl ml-2 group-hover:text-purple-700">フレームワーク</h1>
                    <div class="p-2 my-2 border rounded-lg border-green-800">
                        <cardPulldown :title="'vue.js'">
                            <TextLarge>自主開発のWEBアプリは主にvueで作成しています。</TextLarge>
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-blue-400">
                        <cardPulldown :title="'react.js'">
                            <TextLarge>業務では主にReactを扱っています。</TextLarge>
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-green-600">
                        <cardPulldown :title="'node.js'">
                            <TextLarge>バックエンド開発はnode.jsとexpressで行うことが多いです。</TextLarge>
                        </cardPulldown>
                    </div>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <h1 class="text-gray-900 text-left font-medium text-xl ml-2 group-hover:text-purple-700">その他</h1>
                    <h1 class="text-gray-900 font-medium text-base text-left">現在は扱っていませんが、以前に2か月以上触れたことのある技術です。</h1>
                    <div class="p-2 my-2 border rounded-lg border-purple-800">
                        <cardPulldown :title="'C#'">
                            <TextLarge>アルバイト時代にXamarinでのスマホアプリ開発に携わっていました。</TextLarge>
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-red-500">
                        <cardPulldown :title="'java'">
                            <TextLarge>専門学校二年次に行われた学内ハッカソンで使用しました。</TextLarge>
                            <TextLarge>最優秀賞に加え、審査員長の方が急遽特別に企業賞を作ってくださり、追加の賞金までいただきました。感謝。</TextLarge>
                        </cardPulldown>
                    </div>
                </div>
            </cardPulldown>
        </div>
    </div>
</template>

<style scoped></style>
