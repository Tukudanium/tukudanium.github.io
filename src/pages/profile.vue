<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div>
            <profile-card :icon-image-path="requiredUrl('icon')"></profile-card>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import profileCard from '../components/tailblocks/profileCard.vue'

export default {
    name: 'ProfilePage',
    components: { profileCard },
    setup() {
        const msg = ref('hello')

        const changeMsg = () => {
            msg.value = 'world'
        }
        const requiredUrl = (fileName: string): string => {
            return new URL(`../assets/image/${fileName}.png`, import.meta.url).href
        }

        return {
            msg,
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
