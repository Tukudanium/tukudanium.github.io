<script lang="ts" setup>
import { ref } from 'vue'
import contactCard from '../components/tailblocks/contactCard.vue'
import { useRequiredUrl } from '../composable/useRequiredUrl'
</script>

<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div>
            <h1 class="text-gray-900 font-medium text-lg">連絡先</h1>
            <contactCard :required-url="useRequiredUrl"></contactCard>
        </div>
    </div>
</template>

<style scoped></style>
