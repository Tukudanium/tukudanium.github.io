<script lang="ts" setup>
import { ref } from 'vue'
import pageLayout from '../components/atomic/pageLayout.vue'
import portfolioCard from '../components/tailblocks/portfolioCard.vue'
import { PortfolioItem } from '../types/portfolioItem'
import { useRequiredUrl } from '../composable/useRequiredUrl'

const dotArtPortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('dotArt'),
    title: 'DotArt',
    summarys: [
        '「誰でも気軽に、どこでもドット絵を描けるWEBアプリ」が目標。',
        'スマホでもPCでも描きやすいよう工夫。',
        '自作faviconがお気に入り。',
        '今後アップデート予定だが、vue3の破壊的変更が立ちふさがっている。',
    ],
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
    summarys: [
        '学内ハッカソン最優秀賞・企業賞受賞。',
        '「地域活性」というテーマに対し利用動機としてタイピングアプリを提供し、終了後に出てきた観光地等の単語の情報（公式サイトなど）を一覧表示することで気になる情報へのアクセスを簡易化しました。',
    ],
    techs: [{ text: 'java', color: 'bg-red-500' }],
    links: [
        {
            text: 'github(現在プライベート設定)',
            url: 'https://github.com/RimlTempest/chiikikassei',
        },
    ],
}
const kirinukikunPortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('noImage'),
    title: 'vue-kirinukikun',
    summarys: [
        'vue3で動作する、画像切り抜きコンポーネントライブラリ。',
        '自作npmパッケージを作ってみたかったので、viteのライブラリモードでコンポーネントをライブラリにしてみた。',
    ],
    techs: [
        { text: 'typescript', color: 'bg-blue-500' },
        { text: 'vue.js', color: 'bg-green-400' },
        { text: 'vite', color: 'bg-purple-400' },
    ],
    links: [
        {
            text: 'github',
            url: 'https://github.com/Tukudanium/vue-kirinukikun',
        },
        {
            text: 'npm',
            url: 'https://www.npmjs.com/package/vue-kirinukikun',
        },
        {
            text: 'デモ(codesandbox)',
            url: 'https://oru5oj.csb.app/',
        },
    ],
}
const koiCameraPortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('esa_agenaide'),
    title: '鯉カメラ',
    summarys: [
        'Connect 2022 in Koriyama, with UDC にて郡山市長賞を受賞した顔認識＆差し替えアプリを、APIとしてFastAPIでリプレースしたもの。',
        'snowのような顔変換の面白味でユーザーに利用動機を作ろうと試みた。',
    ],
    techs: [
        { text: 'python', color: 'bg-yellow-300' },
        { text: 'FastAPI', color: 'bg-green-300' },
    ],
    links: [
        {
            text: 'github',
            url: 'https://github.com/Tukudanium/koi_camera_fastapi',
        },
    ],
}
const viteReactTsTemplatePortfolioItem: PortfolioItem = {
    imagePath: useRequiredUrl('noImage'),
    title: 'vite-react-ts-template',
    summarys: [
        'Vite & React18 & ReactRouter & TypeScript のテンプレート。',
        'React18の新機能であるTransitionと、SuspenseのSSR対応を見て自主制作でも使ってみたくなったのでとりあえず作成。',
    ],
    techs: [
        { text: 'typescript', color: 'bg-blue-500' },
        { text: 'react', color: 'bg-blue-400' },
        { text: 'vite', color: 'bg-purple-400' },
    ],
    links: [
        {
            text: 'github',
            url: 'https://github.com/Tukudanium/vite-react-ts-template',
        },
    ],
}
</script>

<template>
    <pageLayout>
        <div class="object-center w-11/12 mx-auto sm:w-4/5">
            <h1 class="text-gray-900 font-medium text-lg">作ったもの</h1>
            <div class="flex m-2 p-0 overflow-x-scroll">
                <portfolioCard :item="dotArtPortfolioItem" />
                <portfolioCard :item="hukushimaPortfolioItem" />
                <portfolioCard :item="koiCameraPortfolioItem" />
                <portfolioCard :item="kirinukikunPortfolioItem" />
                <portfolioCard :item="viteReactTsTemplatePortfolioItem" />
            </div>
        </div>
    </pageLayout>
</template>

<style scoped></style>
