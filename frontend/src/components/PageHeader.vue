<template>
  <div class="page-header">
    <v-avatar size="80" class="page-icon">
      <img :src="icon" :alt="title">
    </v-avatar>
    <h3 class="page-title">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0 0;
  padding-right: 30px;
  
  .page-icon {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0;
    }
  }
  
  .page-title {
    font-size: 32px;
    font-weight: 800;
    color: #666;
    text-decoration: underline;
    margin: 0;
  }
}
</style>