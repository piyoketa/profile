<template>
  <div class="article-category">
    <h3 v-if="title" class="category-title pl-3 mb-1">{{ title }}</h3>
    <p v-if="subtitle" class="category-subtitle pl-3">{{ subtitle }}</p>
    <div class="slide-group-container">
      <v-slide-group
        v-model="slideModel"
        class="article-slide-group mx-2 mx-sm-0"
        show-arrows="always"
        :mandatory="false"
        :center-active="false"
      >
        <v-slide-group-item
          v-for="article in articles"
          :key="article.url"
          v-slot="{ toggle, selectedClass }"
          class="d-flex align-stretch"
        >
          <ArticleCard
            :article="article"
            :selected-class="selectedClass"
            :toggle="toggle"
          />
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArticleCard from './ArticleCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  articles: {
    type: Array,
    required: true
  }
})

const slideModel = ref(0)
</script>

<style lang="scss">
.article-category {
  overflow: visible;
  
  .category-title {
    font-size: 1em;
    font-weight: 600;
    color: #333;
  }
  
  .category-subtitle {
    font-size: 0.75em;
    color: #666;
  }
  
  .slide-group-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: visible;
    
    .slide-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
      
      &.slide-prev-btn {
        left: 5px;
      }
      
      &.slide-next-btn {
        right: 5px;
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      // モバイルでは非表示（v-slide-groupのタッチ操作を優先）
      @media (max-width: 959px) {
        display: none;
      }
    }
    
    .article-slide-group {
      flex: 1;
      max-width: calc(100vw - 40px);
      
      // v-slide-groupの背景色を透明にし、overflowを調整
      .v-slide-group {
        background-color: transparent !important;
        overflow: visible !important;
      }
      
      .v-slide-group__content {
        padding: 10px 0;
      }
      
      // モバイルでの矢印ボタンをオーバーレイ表示
      .v-slide-group__prev,
      .v-slide-group__next {
        @media (max-width: 959px) {
          position: absolute !important;
          z-index: 10;
          background: rgba(255, 255, 255, 0.9) !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
          border-radius: 50% !important;
          min-width: 40px !important;
          width: 40px !important;
          height: 40px !important;
          flex: 0 0 40px !important;
          top: 50%;
          transform: translateY(-50%);
        }
        
        @media (max-width: 599px) {
          min-width: 36px !important;
          width: 36px !important;
          height: 36px !important;
          flex: 0 0 36px !important;
        }
      }
      
      .v-slide-group__prev {
        @media (max-width: 959px) {
          left: 8px;
        }
      }
      
      .v-slide-group__next {
        @media (max-width: 959px) {
          right: 8px;
        }
      }
      
    }
  }
}
</style>