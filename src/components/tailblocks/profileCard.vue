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
                        <TextLarge>・ポケモン等の任天堂ハードのゲームのほか、STEAMセールでゲームを買いあさったりする。</TextLarge>
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
            <cardPulldown :title="'● 資格・実績'">
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・応用情報技術者'">
                        <TextLarge>・一回全く勉強しなかったら落ちた。</TextLarge>
                        <TextLarge>・次回は反省して、5日前から午前問題を一日3時間頑張った。受かった。</TextLarge>
                    </cardPulldown>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・校内ハッカソン最優秀賞、企業賞'">
                        <TextLarge>・専門2年時に実施。テーマは地域活性。</TextLarge>
                        <TextLarge>・福島県の観光関連の文字を使ったタイピングアプリを作成した。</TextLarge>
                        <TextLarge>・タイピングゲーム部分のプログラミング、全体的なアプリのデザイン等を担当。</TextLarge>
                    </cardPulldown>
                </div>
                <div class="p-2 my-2 border rounded-lg border-purple-500">
                    <cardPulldown :title="'・Connect 2022 in Koriyama, with UDC 郡山市長賞'">
                        <TextLarge>・新卒一年目に実施。テーマは「郡山の鯉を知ろう、食べよう、楽しもう」</TextLarge>
                        <TextLarge>・郡山市長賞は事実上の一位とのこと。</TextLarge>
                        <TextLarge>・ハッカソンメンバーが新卒からほぼ無作為に選出されたメンバーで開発ができるのが自分のみだったため、カメラアプリというアイデア以外はユーザーのモチベーション考察、企画、開発を９割自分が行った。</TextLarge>
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
                        </cardPulldown>
                    </div>
                    <div class="p-2 my-2 border rounded-lg border-blue-400">
                        <cardPulldown :title="'python'">
                            <TextLarge>多少自主学習済み。Connect 2022 in Koriyamaハッカソンで使用。</TextLarge>
                            <TextLarge>flaskとDjangoを触れています。</TextLarge>
                        </cardPulldown>
                    </div>
                </div>
            </cardPulldown>
        </div>
    </div>
</template>

<style scoped></style>
