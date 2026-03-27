<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="9">
        <v-card class="pa-6">
          <v-card-title class="text-h4 font-weight-bold mb-2">
            ゲーム作り
          </v-card-title>
          <v-card-text class="px-0">
            <p class="text-body-1 mb-6">
              いま検証中のゲームや、公開中の試作についてまとめています。
            </p>

            <v-row>
              <v-col cols="12" md="6">
                <router-link to="/game-dev/masochistic-sister" class="project-link">
                  <v-card variant="outlined" class="project-card h-100">
                    <img :src="sisterThumbnail" alt="被虐のシスター" class="project-thumbnail">
                    <v-card-text>
                      <div class="text-subtitle-1 font-weight-bold mb-2">被虐のシスター</div>
                      <p class="text-body-2 mb-3">
                        攻撃を受けて「記憶」し、その記憶で戦うスレスパ系ゲームの
                        テストプレイ募集ページです。
                      </p>
                      <v-chip size="small" color="primary" variant="tonal">テストプレイ募集中</v-chip>
                    </v-card-text>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import sisterThumbnail from '@/assets/articles/mosochistic-sister.png'
</script>

<style lang="scss" scoped>
.project-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.project-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
}

.project-thumbnail {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #f6f7fb;
}
</style>
