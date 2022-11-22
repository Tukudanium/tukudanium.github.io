# ポートフォリオサイト

## 概要

Vue 3 + TypeScript + Vite + Tailwind CSS で作成したポートフォリオサイトです。
Vue 3 と Tailwind CSS の学習、またViteを利用してみるという目的も兼ねてます。

```bash
  yarn create vite [reponame] --template vue-ts
  yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
  yarn add -D prettier @vue/eslint-config-prettier
  yarn add -D postcss autoprefixer
  yarn add vue-router@4
  yarn add pinia
  yarn add -D tailwindcss
  npx tailwindcss init
```

## 備忘録

詰まったところ描いてく。
\
**vite&vue routerのGithubPagesへのデプロイ方法**
\
vite.config

```bash
export default defineConfig({
    base: '/（リポジトリの名前）/', //追記
    build: {
        outDir: 'docs',　 //追記
        assetsDir: './', //追記
    },
    plugins: [vue()]
})
```

router/index.ts

```bash
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //追記
  routes,
});
```

ページ遷移の際は\<router-link\>タグを利用。また、遷移先に/（リポジトリの名前）を追加しておく。
また、そのままデプロイしてもページとして機能しないので、yarn buildでビルドしてからビルドファイルをpagesのBranchで指定する。

\
**v-vindでのasset内のファイルへのパス指定**
\
画像のsrc等にprops等の変数で動的に値を渡したいとき、そのままv-vindを利用して

```bash
<img :src="imagePath" />
```

という形で直接変数を入れても動かない。src要素を静的に指定した場合は内部でWebpackのfile-loaderで画像をモジュールとして読み込むが、動的に指定した場合はそのままパスとして扱われてしまう。
普通require(imagePath)でモジュールとして読み込めば使えるが、Viteはブラウザのみで実行されるのでNode.js等向けのrequireは定義されていない。
なので

```bash
const requiredUrl = (fileName: string): string => {
return new URL(`../assets/image/${fileName}.png`, import.meta.url).href
}
// パス指定は呼んでいるファイルに合わせて設定
```

こうして

```bash
<img :src="requiredUrl(fileName)" />
```

こう。
コンポーネントでURLを生成すると何故かダメだったので、ファイルの階層が深いとダメっぽい？
コンポーネント内で画像ファイル等を使いたいときはrequiredUrl(fileName)で出来たURLをpropsに渡せばよい。
追記：なんかjpgだとダメだった。
