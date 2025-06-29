<template>
  <div class="article-category">
    <h3 class="category-title">{{ title }}</h3>
    <p v-if="subtitle" class="category-subtitle">{{ subtitle }}</p>
    <div class="slide-group-container">
      <v-slide-group
        v-model="slideModel"
        class="article-slide-group"
        show-arrows="mobile"
        :mandatory="false"
        :center-active="false"
      >
        <v-slide-group-item
          v-for="article in articles"
          :key="article.url"
          v-slot="{ toggle, selectedClass }"
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
    required: true
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

<style lang="scss" scoped>
.article-category {
  margin-bottom: 40px;
  border-left: 4px solid #ccc;
  padding-left: 15px;
  overflow: visible;
  
  @media (max-width: 599px) {
    padding-left: 5px;
  }
  
  .category-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .category-subtitle {
    font-size: 12px;
    color: #666;
    margin-bottom: 15px;
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
      margin: 0 10px;
      max-width: calc(100vw - 40px);
      
      // v-slide-groupの背景色を透明にし、overflowを調整
      :deep(.v-slide-group) {
        background-color: transparent !important;
        overflow: visible !important;
      }
      
      .v-slide-group__content {
        padding: 10px 10px 10px 10px;
      }
      
      // モバイルでの矢印ボタンのスタイル調整
      :deep(.v-slide-group__prev),
      :deep(.v-slide-group__next) {
        background-color: transparent !important;
        
        @media (max-width: 959px) {
          min-width: 32px !important;
          width: 32px !important;
          flex: 0 0 32px !important;
        }
        
        @media (max-width: 599px) {
          min-width: 24px !important;
          width: 24px !important;
          flex: 0 0 24px !important;
        }
      }
      
      // レスポンシブ対応
      @media (max-width: 959px) {
        margin: 0 0px;
        
        .v-slide-group__content {
          padding: 10px 5px 10px 5px;
        }
      }
    }
  }
}
</style>