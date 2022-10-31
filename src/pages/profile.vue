<script lang="ts" setup>
import { ref } from 'vue'
import pageLayout from '../components/atomic/pageLayout.vue'
import profileCard from '../components/tailblocks/profileCard.vue'
import { useRequiredUrl } from '../composable/useRequiredUrl'
</script>

<template>
    <pageLayout>
        <div class="h-full py-4">
            <h1 class="text-gray-900 font-medium text-lg">自己紹介</h1>
            <profileCard :icon-image-path="useRequiredUrl('icon')"></profileCard>
        </div>
    </pageLayout>
</template>

<style scoped></style>
