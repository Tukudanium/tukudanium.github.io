<script lang="ts" setup>
import { ref } from 'vue'
import profileCard from '../components/tailblocks/profileCard.vue'
import { useRequiredUrl } from '../composable/useRequiredUrl'
</script>

<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div>
            <h1 class="text-gray-900 font-medium text-lg">自己紹介</h1>
            <profileCard :icon-image-path="useRequiredUrl('icon')"></profileCard>
        </div>
    </div>
</template>

<style scoped></style>
