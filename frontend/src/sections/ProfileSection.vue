<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <!-- Profile Icon & Title -->
        <!-- <PageHeader title="Profile" :icon="titleIcon" /> -->

        <!-- <div class="activity-areas my-5">
          <p class="activity-title mb-1">本名</p>
          <p class="activity-text">
            千葉 一輝（ちば かずき）
          </p>
        </div> -->

        <div class="activity-areas my-5">
          <p class="activity-title mb-1">経歴</p>
          <p class="activity-text">
            1994年生まれ。
            2017年 東京大学医学部健康総合科学科卒。<br>
            本業はWebエンジニア。 <br>
            今は医療系IT企業でAI活用のプロジェクト担当者をやっています。<br>
            以前はオンラインカウンセリングのベンチャー企業でCTOをやったり、フリーランスのWebエンジニアをやったりしてました。
          </p>
        </div>

        <div class="activity-areas my-5">
          <p class="activity-title mb-1">活動分野</p>
          <p class="activity-text">インタビュー記事執筆、ゲーム作り、ITエンジニアリング、メンタルヘルス</p>
        </div>

        <!-- Illustration Note -->
        <p class="illustration-note my-5">※イラストは妻が描きました</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import titleIcon from '@/assets/title_icon.png'
</script>

<style lang="scss" scoped>
.activity-areas {
  .activity-title {
    font-size: 0.875em;
    font-weight: bold;
    color: #333;
    text-align: left;
  }

  .activity-text {
    font-size: 0.875em;
    line-height: 1.5;
    color: #333;
    text-align: left;
  }
}

.career-section {
  .career-content {
    text-align: left;

    .career-text {
      font-size: 0.625em;
      line-height: 1.5;
      color: #999;
    }
  }
}

.illustration-note {
  font-size: 0.625em;
  color: #333;
  text-align: left;
}
</style>