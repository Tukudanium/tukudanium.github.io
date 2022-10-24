<script lang="ts" setup>
import { ref } from 'vue'
import portfolioCard from '../components/tailblocks/portfolioCard.vue'
import { Link } from '../types/link'
import { useRequiredUrl } from '../composable/useRequiredUrl'

const dotArtSummary: string[] = ['「誰でも気軽に、どこでもドット絵を描けるWEBアプリ」が目標。', 'スマホでもPCでも描きやすいよう工夫。', '今後アップデート予定。']
const dotArtLinks: Link[] = [
    {
        text: 'github',
        url: 'https://github.com/TeamDotArt',
    },
    {
        text: '公開ページ',
        url: 'https://dotart.riml.work/',
    },
]
const hukushimatSummary: string[] = ['学内ハッカソン最優秀賞・企業賞受賞。', '「地域活性」というテーマに対し利用動機としてタイピングアプリを提供し、終了後に出てきた観光地等の単語の情報（公式サイトなど）を一覧表示することで気になる情報へのアクセスを簡易化しました。']
const hukushimaLinks: Link[] = [
    {
        text: 'github(現在プライベート設定)',
        url: ' https://github.com/RimlTempest/chiikikassei',
    },
]
</script>

<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div class="object-center w-4/5 mx-auto">
            <h1 class="text-gray-900 font-medium text-lg">作ったもの</h1>
            <div class="flex m-2 p-0 overflow-x-scroll">
                <portfolioCard :image-path="useRequiredUrl('dotArt')" :title="'DotArt'" :summarys="dotArtSummary" :links="dotArtLinks"></portfolioCard>
                <portfolioCard :image-path="useRequiredUrl('fukushimaTyping')" :title="'福島タイピング'" :summarys="hukushimatSummary" :links="hukushimaLinks"></portfolioCard>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
