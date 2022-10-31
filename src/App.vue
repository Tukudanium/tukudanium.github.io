<script lang="ts" setup>
import { ref } from 'vue'
import tailblocksHeader from './components/tailblocks/header.vue'
</script>

<template>
    <div class="h-full w-full flex flex-col">
        <tailblocks-header />
        <transition name="router-transition" enter-active-class="animated zoomIn">
            <router-view />
        </transition>
    </div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css';
</style>
