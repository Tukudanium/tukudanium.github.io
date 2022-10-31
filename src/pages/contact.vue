<script lang="ts" setup>
import { ref } from 'vue'
import contactCard from '../components/tailblocks/contactCard.vue'
import pageLayout from '../components/atomic/pageLayout.vue'
import { useRequiredUrl } from '../composable/useRequiredUrl'
</script>

<template>
    <pageLayout>
        <div>
            <h1 class="text-gray-900 font-medium text-lg">連絡先</h1>
            <contactCard :required-url="useRequiredUrl"></contactCard>
        </div>
    </pageLayout>
</template>

<style scoped></style>
