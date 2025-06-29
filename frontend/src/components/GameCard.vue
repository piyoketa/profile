<template>
  <div class="game-card pl-2 mb-5">
    <div class="card-content">
      <div class="game-info mb-4">
        <p class="game-title ma-0 mb-1">
          <a :href="game.url" target="_blank" class="game-link">{{ game.title }}</a>
        </p>
        <p class="game-subtitle ma-0">{{ game.subtitle }}</p>
      </div>
      <div class="game-image">
        <img 
          :src="game.image" 
          :alt="game.title"
          class="game-thumbnail"
          @error="handleImageError"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true
  }
})

const handleImageError = (event) => {
  // Hide broken image and show placeholder
  event.target.style.display = 'none'
}
</script>

<style lang="scss" scoped>
.game-card {
  border-left: 4px solid #ccc;

  .card-content {
    .game-info {
      .game-title {
        font-size: 0.875em;
        color: #333;

        .game-link {
          color: #333dff;
          text-decoration: underline;

          &:hover {
            color: #3338cc;
          }
        }
      }

      .game-subtitle {
        font-size: 0.875em;
        color: #333;
      }
    }

    .game-image {
      .image-placeholder.large {
        width: 325px;
        height: 183px;
        background-color: #f0f0f0;
        border-radius: 4px;
      }

      .game-thumbnail {
        width: 325px;
        height: 183px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>