<script lang="ts" setup></script>
<template>
    <header class="body-font bg-gray-800 h-16 w-full fixed">
        <div class="flex flex-wrap h-16 px-5 flex-row items-center">
            <nav class="ml-auto mr-auto flex flex-wrap items-center text-base justify-center">
                <router-link class="mr-5 text-gray-200 hover:text-pink-300 linkItem" to="/">トップページ</router-link>
                <router-link class="mr-5 text-gray-200 hover:text-pink-300 linkItem" to="/profile">自己紹介</router-link>
                <router-link class="mr-5 text-gray-200 hover:text-pink-300 linkItem" to="/portfolio">作ったもの</router-link>
                <router-link class="mr-5 text-gray-200 hover:text-pink-300 linkItem" to="/contact">連絡先</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.name-rogo {
    position: relative;
    top: 0;
    /*アニメーションの設定*/
    transition: all 0.3s;
}
.name-rogo:hover {
    top: -3px;
}
.linkItem {
    position: relative;
    top: 2;
    /*アニメーションの設定*/
    transition: all 0.3s;
}
.linkItem:hover {
    top: -1px;
}

.flex-row {
    flex-direction: row;
}
</style>
