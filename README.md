# ポートフォリオサイト

## 概要

Vue 3 + TypeScript + Vite + Tailwind CSS で作成したポートフォリオサイトです。
Vue 3 と Tailwind CSS の学習、またViteを利用してみるという目的も兼ねてます。

## 備忘録

詰まったところ描いてく。
\
**vite&vue routerのGithubPagesへのデプロイ方法**
\
vite.config

```export default defineConfig({
    base: '/（リポジトリの名前）/', //追記
    build: {
        outDir: 'docs',　 //追記
        assetsDir: './', //追記
    },
    plugins: [vue()]
})
```

router/index.ts

```const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //追記
  routes,
});
```

ページ遷移の際は\<router-link\>タグを利用。また、遷移先に/（リポジトリの名前）を追加しておく。
また、そのままデプロイしてもページとして機能しないので、yarn buildでビルドしてからビルドファイルをpagesのBranchで指定する。
