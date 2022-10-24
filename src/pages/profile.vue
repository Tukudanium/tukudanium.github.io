<script lang="ts" setup>
import { ref } from 'vue'
import profileCard from '../components/tailblocks/profileCard.vue'
import { useRequiredUrl } from '../composable/useRequiredUrl'
</script>

<template>
    <div class="justify-center items-center mt-16 grid w-full h-full overflow-y-scroll delScroll">
        <div>
            <profile-card :icon-image-path="useRequiredUrl('icon')"></profile-card>
        </div>
    </div>
</template>

<style scoped></style>
