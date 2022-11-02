import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        assetsDir: './',
    },
    plugins: [vue(),pluginRewriteAll()]
})
