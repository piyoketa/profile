<template>
  <div 
    class="slide-article-card"
    :class="selectedClass"
    @click="toggle"
  >
    <a :href="article.url" target="_blank" class="slide-article-link">
      <div class="slide-article-thumbnail">
        <img 
          v-if="article.thumbnail && isImageAvailable(article.thumbnail)" 
          :src="getImageUrl(article.thumbnail)" 
          :alt="article.title"
          @error="handleImageError"
        >
        <div v-else class="slide-thumbnail-placeholder">
          <v-icon size="48">mdi-text-box-outline</v-icon>
        </div>
      </div>
      <div class="slide-article-info">
        <h4 class="slide-article-title">{{ article.title }}</h4>
        <p v-if="article.subtitle" class="slide-article-subtitle">{{ article.subtitle }}</p>
        <span v-if="article.platform" class="platform-badge" :class="article.platform">{{ article.platform }}</span>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  },
  selectedClass: {
    type: String,
    default: ''
  },
  toggle: {
    type: Function,
    required: true
  }
})

// Helper functions for image handling
const isImageAvailable = (imagePath) => {
  // For local images, check if the path exists
  if (imagePath && imagePath.startsWith('/src/assets/')) {
    return true // Assume local assets exist
  }
  // For external URLs (http/https), assume they exist
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return true
  }
  return false
}

const getImageUrl = (imagePath) => {
  try {
    // For local assets, use dynamic import
    if (imagePath && imagePath.startsWith('/src/assets/')) {
      const filename = imagePath.split('/').pop()
      return new URL(`../assets/articles/${filename}`, import.meta.url).href
    }
    // For external URLs, return as-is
    if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
      return imagePath
    }
    return imagePath
  } catch {
    return null
  }
}

const handleImageError = (event) => {
  // Hide broken image and show placeholder
  event.target.style.display = 'none'
  const placeholder = event.target.parentElement.querySelector('.slide-thumbnail-placeholder')
  if (placeholder) {
    placeholder.style.display = 'flex'
  }
}
</script>

<style lang="scss" scoped>
.slide-article-card {
  margin: 0 10px;
  width: 350px;
  transition: all 0.3s ease;
  opacity: 1;
  transform: scale(1);
  display: flex;
  height: 100%;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  .slide-article-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    background: white;
    border-radius: 12px;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    width: 100%;
    height: 100%;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
      transform: translateY(-4px);
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    .slide-article-thumbnail {
      width: 100%;
      height: 183px; // 350px width / 1.91 aspect ratio ≈ 183px
      background-color: #f5f5f5;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #f5f5f5;
      }
      
      .slide-thumbnail-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        color: #999;
      }
    }
    
    .slide-article-info {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      
      .slide-article-title {
        font-size: 0.875em;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .slide-article-subtitle {
        font-size: 0.75em;
        color: #666;
        line-height: 1.3;
        margin-bottom: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .platform-badge {
        display: inline-block;
        padding: 2px 6px;
        font-size: 0.625em;
        border-radius: 4px;
        font-weight: 500;
        margin-top: auto;
        align-self: flex-start;
        
        &.note {
          background-color: #41c98e;
          color: white;
        }
        
        &.zenn {
          background-color: #3ea8ff;
          color: white;
        }
        
        &.Youtube {
          background-color: #ff0000;
          color: white;
        }
        
        &.寄稿記事 {
          background-color: #666;
          color: white;
        }
        
        &.勉強会資料 {
          background-color: #666;
          color: white;
        }
      }
    }
  }
}

// レスポンシブ対応
@media (max-width: 959px) {
  .slide-article-card {
    width: 340px;
    margin: 0 6px;
    
    .slide-article-link {
      .slide-article-thumbnail {
        height: 178px; // 340px width / 1.91 aspect ratio ≈ 178px
      }
      
      .slide-article-info {
        padding: 12px;
        
        .slide-article-title {
          font-size: 0.8125em;
          margin-bottom: 6px;
        }
        
        .slide-article-subtitle {
          font-size: 0.6875em;
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .slide-article-card {
    width: 325px;
    margin: 0 4px;
    
    .slide-article-link {
      .slide-article-thumbnail {
        height: 170px; // 325px width / 1.91 aspect ratio ≈ 170px
      }
      
      .slide-article-info {
        padding: 10px;
        
        .slide-article-title {
          font-size: 0.75em;
        }
        
        .slide-article-subtitle {
          font-size: 0.625em;
        }
      }
    }
  }
}
</style>