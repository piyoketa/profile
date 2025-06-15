<template>
  <div>
    <!-- ヒーローセクション（画面横幅いっぱい） -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="hero-content">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <h1 class="hero-title">インタビュー分析</h1>
                  <div class="hero-description">
                    <p>
                      東京大学医学部健康総合科学科の卒業論文で、インタビュー分析（現象学的質的分析）を学び、卒業後も趣味でインタビュー分析を続けています。
                    </p>
                    <p>
                      だいたい録音時間の10～30倍くらいの時間をかけて丁寧に分析しています。<br>
                      1人の分析に100時間くらいは平気でかかるので、手間はかかるし、数も増やせませんが、インタビューを受けていただいた方にも気付きや発見があるような内容になっていると自負しています。
                    </p>
                    <p>
                      「n=1をできる限り高い解像度で描く」<br>
                      対象者の独特の言葉遣いや価値観を丁寧にたどり、本人でも言語化できていない部分を描きます。
                    </p>
                    <p>
                      「異なる世界の間に橋を架ける」<br>
                      共感より理解を。"界隈"の外野の人間でも、その人の世界観や考え方を解釈できるようになるための道案内となることを目指しています。
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- メインコンテンツ -->
    <v-container class="main-content">
      <!-- 募集中の内容 -->
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">募集中</h2>
        </v-col>
      </v-row>

      <!-- インタビュー対象者 -->
      <v-row class="mb-6">
        <v-col cols="12">
          <v-card class="interview-request-card" elevation="1">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">インタビュー対象者</span>
              <v-chip color="orange" text-color="white" class="ml-auto">
                探しています！
              </v-chip>
            </v-card-title>
            <v-card-text class="text-left">
              <p>前回（Karinさん）のインタビュー分析が終了したため、次のインタビュー対象者を探しています。自薦・他薦問わず。</p>
              <p>以下の条件を満たしているとありがたいです。</p>
              <ul class="interview-conditions">
                <li>一般的な目線で見た時に、理解が難しい活動をしている</li>
                <li>界隈の人の指示を集めている</li>
                <li>その活動や価値観を界隈の「外部」の人に向けて説明するのが難しい</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 成果物 -->
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">成果物</h2>
        </v-col>
      </v-row>

      <!-- millnaさんのプロフィール -->
      <v-row class="mb-4">
        <v-col cols="12">
          <v-card class="profile-card" elevation="1">
            <v-card-text class="d-flex align-center">
              <div>
                <div class="text-h6 font-weight-bold">millnaさん</div>
                <div class="text-caption grey--text">ファッションデザイナー/YouTuber</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 成果物カード群 -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/n330b9f4fb7ad')"
            style="cursor: pointer;"
          >
            <v-img
              :src="millnaImage1"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              1/4 どうせ世界はツラいけど、それでもウチらはギャルをやる
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/n5ba5df5920b4')"
            style="cursor: pointer;"
          >
            <v-img
              :src="millnaImage2"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              2/4 デコった身体こそ、本当のウチ
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/n08a4d34a2567')"
            style="cursor: pointer;"
          >
            <v-img
              :src="millnaImage3"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              3/4「ボールを受け止めてくれた人」が、独りの部屋に風穴を開ける
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/nc563ba97e84b')"
            style="cursor: pointer;"
          >
            <v-img
              :src="millnaImage4"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              4/4「Youtubeは、このインターネットで、"神様"じゃなくて、"友達"として存在できる一番良い方法」
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <p class="description-text">
            私のインタビュー分析記事の中では閲覧数が最も多く、代表作と言える記事です。<br>
            millnaさんのファンを中心に、多くの読者に届きました。
          </p>
        </v-col>
      </v-row>

      <!-- Karinさん -->
      <v-row class="mb-4">
        <v-col cols="12">
          <v-card class="profile-card" elevation="1">
            <v-card-text class="d-flex align-center">
              <div>
                <div class="text-h6 font-weight-bold">Karinさん</div>
                <div class="text-caption grey--text">バーチャルAV/バーチャル風俗店X-Oasisの元経営者&キャスト</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Karinさん成果物カード群 -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/nc3459fb91250')"
            style="cursor: pointer;"
          >
            <v-img
              :src="karinImage1"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              1/3 この世界にバーチャル風俗店が必要なワケ
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/n92a8b8b8f1c9')"
            style="cursor: pointer;"
          >
            <v-img
              :src="karinImage2"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              2/3 アバターを着ることの意味が希薄になる世界へ
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/nef99952258e2')"
            style="cursor: pointer;"
          >
            <v-img
              :src="karinImage3"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              3/3「プリパラ」を観たから、コンプレックスと向き合えた
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <p class="description-text">
            バーチャル風俗という新しい分野の先駆者であるKarinさんの活動について、<br>
            現象学的な観点から分析したインタビューシリーズです。
          </p>
        </v-col>
      </v-row>

      <!-- コーチ -->
      <v-row class="mb-4">
        <v-col cols="12">
          <v-card class="profile-card" elevation="1">
            <v-card-text class="d-flex align-center">
              <div>
                <div class="text-h6 font-weight-bold">コーチ</div>
                <div class="text-caption grey--text">株式会社cotreeでのコーチング事業における取材</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- コーチング成果物カード群 -->
      <v-row class="mb-6">
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/n9e4d5a2cc31d')"
            style="cursor: pointer;"
          >
            <v-img
              :src="inuoImage1"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              クライアントと一緒に、袋小路に道を見出す
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card 
            class="result-card hover-card d-flex flex-column h-100" 
            elevation="2"
            @click="openUrl('https://note.com/piyoketa/n/nc39500e595d9')"
            style="cursor: pointer;"
          >
            <v-img
              :src="mogiImage1"
              :aspect-ratio="1280/670"
              cover
            >
            </v-img>
            <v-card-title class="pa-4 flex-grow-1 d-flex align-center" style="font-size: 1rem;text-wrap: auto;">
              本人にも分からなくなった「本来のその人の可能性」を再発見する
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <p class="description-text">
            株式会社cotreeで新しいコーチング事業を始める際に、<br>
            優秀なコーチの方々へのインタビューを行った記事です。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import millnaImage1 from '@/assets/articles/millna_1.webp'
import millnaImage2 from '@/assets/articles/millna_2.webp'
import millnaImage3 from '@/assets/articles/millna_3.webp'
import millnaImage4 from '@/assets/articles/millna_4.webp'
import karinImage1 from '@/assets/articles/karin_1.webp'
import karinImage2 from '@/assets/articles/karin_2.webp'
import karinImage3 from '@/assets/articles/karin_3.webp'
import inuoImage1 from '@/assets/articles/inuo_1.webp'
import mogiImage1 from '@/assets/articles/mogi_1.webp'

const openUrl = (url) => {
  if (url !== '#') {
    window.open(url, '_blank');
  }
}
</script>

<style scoped>
/* メインコンテンツ */
.main-content {
  padding-top: 48px;
}

.section-title {
  font-size: 1.5rem;
  color: #333;
  text-align: left;
  border-left: 5px solid #999;
  padding-left: 10px;
  border-bottom: 1px solid #999;
  padding-bottom: 5px;
}

.description-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

/* インタビュー募集カード */
.interview-request-card {
  border-left: 4px solid #ff9800;
}

.interview-conditions {
  margin: 16px 0;
  padding-left: 20px;
}

.interview-conditions li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* プロフィールカード */
.profile-card {
  background-color: #f8f9fa;
}

/* 成果物カード */
.result-card {
  height: auto;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.result-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 8px;
  color: #333;
}

.card-subtitle {
  font-size: 0.8rem;
  color: #666;
}

/* レスポンシブ対応 */
@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .result-card {
    height: auto;
    min-height: auto;
  }
}
</style>
