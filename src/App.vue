<script lang="ts" setup>
import { ref } from 'vue'
import tailblocksHeader from './components/tailblocks/header.vue'
</script>

<template>
    <div class="h-full w-full flex flex-col">
        <tailblocks-header />
        <transition name="router-transition" enter-active-class="animated fadeIn">
            <router-view />
        </transition>
    </div>
</template>

<style scoped></style>
