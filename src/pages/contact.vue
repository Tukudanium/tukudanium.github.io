<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div class="h-800">contact</div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    name: 'ContactPage',
    setup() {
        const msg = ref('hello')

        const changeMsg = () => {
            msg.value = 'world'
        }

        return {
            msg,
            changeMsg,
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
