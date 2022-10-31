<script lang="ts" setup>
import { ref } from 'vue'
import pageLayout from '../components/atomic/pageLayout.vue'
import portfolioCard from '../components/tailblocks/portfolioCard.vue'
import { Link } from '../types/link'
import { PortfolioItem } from '../types/portfolioItem'
import { useRequiredUrl } from '../composable/useRequiredUrl'

const dotArtPortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('dotArt'),
    title: 'DotArt',
    summarys: ['「誰でも気軽に、どこでもドット絵を描けるWEBアプリ」が目標。', 'スマホでもPCでも描きやすいよう工夫。', '今後アップデート予定。'],
    techs: [
        { text: 'typescript', color: 'bg-blue-500' },
        { text: 'vue.js', color: 'bg-green-400' },
        { text: 'nuxt.js', color: 'bg-green-700' },
    ],
    links: [
        {
            text: 'github',
            url: 'https://github.com/TeamDotArt',
        },
        {
            text: '公開ページ',
            url: 'https://dotart.riml.work/',
        },
    ],
}
const hukushimaPortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('fukushimaTyping'),
    title: '福島タイピング',
    summarys: ['学内ハッカソン最優秀賞・企業賞受賞。', '「地域活性」というテーマに対し利用動機としてタイピングアプリを提供し、終了後に出てきた観光地等の単語の情報（公式サイトなど）を一覧表示することで気になる情報へのアクセスを簡易化しました。'],
    techs: [{ text: 'java', color: 'bg-red-500' }],
    links: [
        {
            text: 'github(現在プライベート設定)',
            url: ' https://github.com/RimlTempest/chiikikassei',
        },
    ],
}
</script>

<template>
    <pageLayout>
        <div class="object-center w-4/5 mx-auto">
            <h1 class="text-gray-900 font-medium text-lg">作ったもの</h1>
            <div class="flex m-2 p-0 overflow-x-scroll">
                <portfolioCard :item="dotArtPortfolioItem"></portfolioCard>
                <portfolioCard :item="hukushimaPortfolioItem"></portfolioCard>
            </div>
        </div>
    </pageLayout>
</template>

<style scoped></style>
