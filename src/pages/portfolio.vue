<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div>
            <portfolio-card :image-path="requiredUrl('dotArt')" :title="'DotArt'" :summarys="dotArtSummary" :links="dotArtLinks"></portfolio-card>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import portfolioCard from '../components/tailblocks/portfolioCard.vue'
import { Link } from '../types/link'
export default {
    name: 'PortfolioPage',
    components: { portfolioCard },
    setup() {
        const msg = ref('hello')

        const changeMsg = () => {
            msg.value = 'world'
        }
        const dotArtSummary: string[] = ['「PCでもスマホでもタブレットでも、好きな時に気軽にドット絵を描けるWEBアプリ」が目標。', '今後アップデート予定。']
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
        const requiredUrl = (fileName: string): string => {
            return new URL(`../assets/image/${fileName}.png`, import.meta.url).href
        }
        return {
            msg,
            dotArtSummary,
            dotArtLinks,
            changeMsg,
            requiredUrl,
        }
    },
}
</script>

<style scoped>
.delScroll {
    /*IE(Internet Explorer)・Microsoft Edgeへの対応*/
    -ms-overflow-style: none;
    /*Firefoxへの対応*/
    scrollbar-width: none;
}
/*Google Chrome、Safariへの対応*/
.delScroll::-webkit-scrollbar {
    display: none;
}
</style>
