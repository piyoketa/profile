<template>
  <v-app class="pa-0">
    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list nav dense>
        <v-list-item v-for="(link, index) in links" :key="link.to" @click="selectTab(index)">
          <div class="w-100 text-body-1 text-decoration-none">
            {{ link.label }}
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#0F1E2E" dark height="40" class="px-5" app>
      <!-- プロフィールアイコン -->
      <router-link to="/" class="d-flex align-center text-white text-decoration-none">
        piyoketa's Portfolio
        <!-- <img :src="profileImage" alt="プロフィール画像" class="profile-icon"> -->
      </router-link>

      <!-- 右寄せのためのスペーサ -->
      <v-spacer></v-spacer>

      <!-- モバイル: ハンバーガーボタン (md 以上では非表示) -->
      <!-- <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="drawer = true"></v-app-bar-nav-icon> -->

      <!-- デスクトップ: タブ (md 以上のみ表示) -->
      <!-- <v-tabs
        v-model="tab"
        class="d-none d-md-flex"
        color="white"
        slider-color="white"
        height="64"
        align-tabs="end"
      >
        <v-tab
          v-for="(link, index) in links"
          :key="link.to"
          :value="index"
          class="text-white font-weight-bold text-subtitle-2"
        >
          {{ link.label }}
        </v-tab>
      </v-tabs> -->
    </v-app-bar>

    <!-- ページコンテンツ -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import profileImage from '@/assets/profile.jpg'

const router = useRouter()
const route = useRoute()
const siteUrl = 'https://piyoketa.netlify.app'
const defaultTitle = "piyoketa's portfolio"
const defaultDescription = 'piyoketa のポートフォリオサイトです。'
const defaultTwitterCard = 'summary'

const upsertMetaTag = (key, value, content) => {
  let element = document.head.querySelector(`meta[${key}="${value}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(key, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertLinkTag = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const resolveAbsoluteUrl = (value) => new URL(value, siteUrl).href

const syncSeoMeta = () => {
  const title = route.meta.title || defaultTitle
  const description = route.meta.description || defaultDescription
  const image = resolveAbsoluteUrl(route.meta.ogImage || profileImage)
  const url = resolveAbsoluteUrl(route.fullPath)
  const twitterCard = route.meta.twitterCard || defaultTwitterCard

  document.title = title

  upsertMetaTag('name', 'description', description)
  upsertMetaTag('property', 'og:title', title)
  upsertMetaTag('property', 'og:description', description)
  upsertMetaTag('property', 'og:type', 'website')
  upsertMetaTag('property', 'og:url', url)
  upsertMetaTag('property', 'og:image', image)
  upsertMetaTag('name', 'twitter:card', twitterCard)
  upsertMetaTag('name', 'twitter:title', title)
  upsertMetaTag('name', 'twitter:description', description)
  upsertMetaTag('name', 'twitter:image', image)
  upsertLinkTag('canonical', url)
}

/** グローバルナビゲーションのリンク定義 */
const links = [
  { label: 'メンタルヘルス', to: '/mental-health', routeName: 'mental-health' },
  { label: 'IT',             to: '/it',            routeName: 'it' },
  { label: 'ゲーム作り',       to: '/game-dev',      routeName: 'game-dev' },
  { label: 'インタビュー分析', to: '/interview',     routeName: 'interview' }
]

/** 現在のタブ */
const tab = ref(0)

/** モバイル用ドロワの開閉状態 */
const drawer = ref(false)

/** タブ選択時の処理 */
const selectTab = (index) => {
  tab.value = index
  drawer.value = false
  router.push(links[index].to)
}

/** タブ変更の監視 */
watch(tab, (newTab) => {
  if (links[newTab]) {
    router.push(links[newTab].to)
  }
})

/** ルート変更時にタブを同期 */
watch(route, (newRoute) => {
  const index = links.findIndex(link => link.to === newRoute.path)
  if (index !== -1) {
    tab.value = index
  }
}, { immediate: true })

watch(
  () => route.fullPath,
  () => {
    syncSeoMeta()
  },
  { immediate: true }
)
</script>

<style lang="scss">
#app {
  padding: 0 !important;
  width: 100%;
}
/* 共通フォント */
.v-application {
  font-family: 'Noto Sans JP', 'Noto Sans', Helvetica, Arial, sans-serif;
  text-align: left;
}

/* App‑Bar に下線を追加して見切り線を再現 */
.v-app-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

/* タブのスタイル調整 */
.v-tabs {
  height: 64px;
}

.v-tab {
  opacity: 0.7;
  transition: opacity .2s;
}

.v-tab:hover,
.v-tab--selected {
  opacity: 1;
}

/* 本文が App‑Bar と重ならないようにオフセットを確保 */
.v-main {
  padding-top: 40px;
}

/* タブウィンドウのスムーズなスクロール */
.v-tabs-window-item {
  transition: transform 0.3s ease-in-out;
}

/* プロフィール画像のスタイル */
// .profile-icon {
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2px solid rgba(255, 255, 255, 0.2);
//   transition: border-color 0.2s ease;
// }

// .profile-icon:hover {
//   border-color: rgba(255, 255, 255, 0.5);
// }

html {
  // font-family: 'Yomogi', cursive;
  box-sizing: border-box;
  font-size: 18px;
}
</style>
