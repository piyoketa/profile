<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <!-- Profile Image -->
        <div class="profile-image-container mb-2">
          <img :src="profileImage" alt="プロフィール画像" class="profile-image">
        </div>

        <!-- Name -->
        <h2 class="profile-name my-2">べとりん @piyoketa</h2>

        <!-- Description -->
        <p class="profile-description mt-5 mt-md-8">
          仕事の合間に<br>
          自分が面白いと思えることを<br>
          いろいろやっています
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import profileImage from '@/assets/profile_top.png'
</script>

<style lang="scss" scoped>
.profile-name {
  font-size: 1.5em;
  font-weight: normal;
  color: #333;
}

.profile-description {
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: 0.2em;
  color: #333;
  font-family: 'Yomogi', cursive;
}
</style>