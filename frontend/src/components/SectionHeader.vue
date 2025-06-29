<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.section-header {
  .section-title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;

    border-left: 10px solid #999;
    border-bottom: 1px solid #999;
    padding-left: 10px;
  }

  .section-description {
    font-size: 12px;
    color: #333;
    margin-bottom: 20px;
  }
}
</style>