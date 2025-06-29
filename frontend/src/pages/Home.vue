<template>
  <div class="home-page">
    <!-- Profile Section -->
    <v-container fluid class="profile-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <!-- Profile Image -->
          <div class="profile-image-container">
            <img :src="profileImage" alt="プロフィール画像" class="profile-image">
          </div>
          
          <!-- Name -->
          <h2 class="profile-name">べとりん @piyoketa</h2>
          
          <!-- Description -->
          <p class="profile-description mt-5 mt-md-8">
            仕事の合間に<br>
            自分が面白いと思えることを<br>
            いろいろやっています
          </p>
          
          <!-- Profile Icon & Title -->
          <div class="profile-header">
            <v-avatar size="80" class="profile-icon">
              <img :src="titleIcon" alt="プロフィール">
            </v-avatar>
            <h3 class="profile-title">Profile</h3>
          </div>

          <div class="activity-areas">
            <p class="activity-title">本名</p>
            <p class="activity-text">
              千葉 一輝（ちば かずき）
            </p>
          </div>

          <div class="activity-areas">
            <p class="activity-title">経歴</p>
            <p class="activity-text">
                1994年生まれ。
                2017年 東京大学医学部健康総合科学科卒。<br>
                本業はWebエンジニア。 以前はオンラインカウンセリングのベンチャー企業でCTOをやったり、フリーランスのWebエンジニアをやったり。 最近は医療系IT企業でAI活用をやっています。
            </p>
          </div>
          
          <div class="activity-areas">
            <p class="activity-title">活動分野</p>
            <p class="activity-text">Webエンジニアリング、インタビュー記事執筆、<br>メンタルヘルス、ゲーム作り</p>
          </div>

          <!-- Illustration Note -->
          <p class="illustration-note">※イラストは全て妻が描きました</p>
          
          <!-- Works Icon & Title -->
          <div class="works-header">
            <v-avatar size="80" class="works-icon">
              <img :src="workIcon" alt="Works">
            </v-avatar>
            <h3 class="works-title">Works</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Interviews Section -->
    <v-container fluid class="interviews-section">
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">Interviews</h2>
          <p class="section-description">
            大学でインタビュー分析手法を学んで以降、「異なる世界の間に橋を架ける」をテーマに、主に対人支援に関するインタビュー分析記事の執筆を続けています。
          </p>
          
          <!-- millnaさんセクション -->
          <div class="interview-category">
            <h3 class="category-title">millnaさん</h3>
            <p class="category-subtitle">ファッションデザイナー / YouTuber</p>
            <div class="slide-group-container">
              <v-slide-group
                v-model="millnaSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                mandatory
              >
                <v-slide-group-item
                  v-for="article in articleData.interview_analysis.millna"
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

          <!-- Karinさんセクション -->
          <div class="interview-category">
            <h3 class="category-title">Karinさん</h3>
            <p class="category-subtitle">バーチャルAV女優</p>
            <div class="slide-group-container">
              <v-slide-group
                v-model="karinSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.interview_analysis.karin"
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

          <!-- コーチセクション -->
          <div class="interview-category">
            <h3 class="category-title">コーチ</h3>
            <p class="category-subtitle">対人支援専門職</p>
            <div class="slide-group-container">
              <v-slide-group
                v-model="coachSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.interview_analysis.coach"
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

          <!-- ピアサポーターセクション -->
          <div class="interview-category">
            <h3 class="category-title">精神障害ピアサポーター</h3>
            <p class="category-subtitle">当事者研究・ピアサポート</p>
            <div class="slide-group-container">
              <v-slide-group
                v-model="peerSupportSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.interview_analysis.peer_support"
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
          
          <!-- More Link -->
          <div class="more-link">
            <router-link to="/interview" class="interview-link">
              →インタビューについてより詳しく
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- IT Engineering Section -->
    <v-container fluid class="it-section">
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">IT engineering</h2>
          <p class="section-description">
            勤め先の仕事内容はあまり外に発信してませんが、たまに記事を書いたり勉強会を開いたりしています。
          </p>
          
          <!-- 闇のIT営業勉強会セクション -->
          <div class="it-category">
            <h3 class="category-title">闇のIT営業勉強会</h3>
            <div class="slide-group-container">
              <v-slide-group
                v-model="darkItSalesSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.it_engineering.dark_it_sales"
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

          <!-- マネジメント関係セクション -->
          <div class="it-category">
            <h3 class="category-title">マネジメント関係</h3>
            <div class="slide-group-container">
              <v-slide-group
                v-model="managementSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.it_engineering.management"
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

          <!-- LLM関係セクション -->
          <div class="it-category">
            <h3 class="category-title">LLM関係</h3>
            <div class="slide-group-container">
              <v-slide-group
                v-model="llmSlideModel"
                class="article-slide-group"
                show-arrows="mobile"
                :mandatory="false"
                center-active
              >
                <v-slide-group-item
                  v-for="article in articleData.it_engineering.llm"
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
        </v-col>
      </v-row>
    </v-container>

    <!-- Game Section -->
    <v-container fluid class="game-section">
      <v-row>
        <v-col cols="12">
          <h2 class="section-title">Game</h2>
          <p class="section-description">
            2025年から、趣味でゲーム作っています
          </p>
          
          <!-- Game Cards -->
          <div class="game-cards">
            <div class="game-card">
              <div class="card-content">
                <div class="game-info">
                  <p class="game-title">
                    <a href="https://unityroom.com/games/alone_7cards" target="_blank" class="game-link">孤独の七並べ</a>
                  </p>
                  <p class="game-subtitle">トランプパズル/ローグライク プレイ時間 15分～</p>
                </div>
                <div class="game-image">
                  <img 
                    src="/src/assets/articles/kodokuno_sichinarabe.png" 
                    alt="孤独の七並べ"
                    class="game-thumbnail"
                    @error="handleImageError"
                  >
                </div>
              </div>
            </div>
            
            <div class="game-card">
              <div class="card-content">
                <div class="game-info">
                  <p class="game-title">
                    <a href="https://openai-moderation-app.netlify.app" target="_blank" class="game-link">有害コンテンツシューティング</a>
                  </p>
                  <p class="game-subtitle">実験作 プレイ時間 5分～</p>
                </div>
                <div class="game-image">
                  <img 
                    src="/src/assets/articles/GXM6A_GaIAEQ-hq.png" 
                    alt="有害性コンテンツシューティング"
                    class="game-thumbnail"
                    @error="handleImageError"
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Mental Health Section -->
    <v-container fluid class="mental-health-section">
      <v-row>
        <v-col cols="12">
          <div class="section-header">
            <h2 class="section-title">Mental health</h2>
          </div>
          
          <p class="section-description">
            学生時代は精神障害当事者活動の研究をしてたこともあり、卒業後もメンタルヘルスに関してちまちま執筆や発信をしています。一時期は「Fundamental」というIT×メンタルヘルス企業の集まりの運営をしていました。
          </p>
          
          <div class="activities-list">
            <p class="activities-text">
              書籍<br>
              ・<a href="https://www.kongoshuppan.co.jp/book/b608335.html" target="_blank" class="mental-health-link">臨床心理学 増刊14号「データから見る心理職の賃金と雇用形態」</a><br><br>
              
              勉強会資料<br>
              ・<a href="https://vine-gasoline-69c.notion.site/92de8ae4fa594ab8b2fca91140b92a9a?source=copy_link" target="_blank" class="mental-health-link">非臨床職のための心理カウンセリング基礎知識講座</a><br>
              ・<a href="https://vine-gasoline-69c.notion.site/in-2022-d6ebec77c5dc4a69b8f3bc9c642f9ed8?source=copy_link" target="_blank" class="mental-health-link">デジタルメンタルヘルスの動向を概観する in 2022</a><br><br>
              
              動画<br>
              ・<a href="https://www.youtube.com/channel/UCJADMvAwXJoQq832rFwxLDg" target="_blank" class="mental-health-link">Fundamental-Radio</a><br><br>
              
              記事：<br>
              ・<a href="https://note.com/piyoketa/n/n915ad7a538d8" target="_blank" class="mental-health-link">悩める高校生よ、「心理学部」を選ぶのはまだ早い</a><br>
              ・<a href="https://note.com/piyoketa/n/nf22a7f31c412" target="_blank" class="mental-health-link">心理士のキャリアのためのPX(サイコロジカルトランスフォーメーション)人材のすすめ</a>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profileImage from '@/assets/profile_top.png'
import titleIcon from '@/assets/title_icon.png'
import workIcon from '@/assets/work_icon.png'
import ArticleCard from '@/components/ArticleCard.vue'

// Article data
const articleData = {
  interview_analysis: {
    millna: [
      {
        title: '1. どうせ世界はツラいけど、それでもウチらはギャルをやる',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/n330b9f4fb7ad',
        thumbnail: '/src/assets/articles/millna_1.webp'
      },
      {
        title: '2. デコった身体こそ、本当のウチ💗',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/n5ba5df5920b4',
        thumbnail: '/src/assets/articles/millna_2.webp'
      },
      {
        title: '3. 「ボールを受け止めてくれた人」が、独りの部屋に風穴を開ける',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/n08a4d34a2567',
        thumbnail: '/src/assets/articles/millna_3.webp'
      },
      {
        title: '4. 「Youtubeは、このインターネットで、"神様"じゃなくて、"友達"として存在できる一番良い方法」',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/nc563ba97e84b',
        thumbnail: '/src/assets/articles/millna_4.webp'
      }
    ],
    karin: [
      {
        title: '1. この世界にバーチャル風俗店が必要なワケ',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/nc3459fb91250',
        thumbnail: '/src/assets/articles/karin_1.webp'
      },
      {
        title: '2. アバターを着ることの意味が希薄になる世界へ',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/n92a8b8b8f1c9',
        thumbnail: '/src/assets/articles/karin_2.webp'
      },
      {
        title: '3. 「プリパラ」を観たから、コンプレックスと向き合えた',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/nef99952258e2',
        thumbnail: '/src/assets/articles/karin_3.webp'
      }
    ],
    coach: [
      {
        title: 'クライアントと一緒に、袋小路に道を見出す',
        subtitle: '茂木岳人コーチの事例',
        url: 'https://note.com/piyoketa/n/n9e4d5a2cc31d',
        thumbnail: '/src/assets/articles/mogi_1.webp'
      },
      {
        title: '本人にも分からなくなった「本来のその人の可能性」を再発見する',
        subtitle: '犬尾陽子コーチの事例',
        url: 'https://note.com/piyoketa/n/nc39500e595d9',
        thumbnail: '/src/assets/articles/inuo_1.webp'
      }
    ],
    peer_support: [
      {
        title: '"引きこもり"とはどのような困難なのか',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/nfaa3316a8287',
        thumbnail: 'https://assets.st-note.com/production/uploads/images/12091653/5724bcec6e0aee7b38d6b95a30b561a4.jpeg'
      }
    ]
  },
  it_engineering: {
    dark_it_sales: [
      {
        title: '君も 「闇のIT営業勉強会」の一員にならないか？',
        subtitle: '',
        url: 'https://note.com/piyoketa/n/n1ad743a2eb75',
        thumbnail: 'https://assets.st-note.com/production/uploads/images/90092187/6bf5ff761faa43f1a136d75f72f10cb7.png',
        platform: 'note'
      },
      {
        title: '補助金のウラガワに迫れ！',
        subtitle: '闇のIT営業勉強会 第一回レポート',
        url: 'https://note.com/piyoketa/n/n418efde90ee3',
        thumbnail: 'https://assets.st-note.com/production/uploads/images/93138578/9f703ba2ac7dc2931c18bcd442173d50.png',
        platform: 'note'
      },
      {
        title: 'ITプロジェクトの発注関係に潜む裏切りと罠',
        subtitle: '闇のIT営業勉強会 第二回レポート',
        url: 'https://note.com/piyoketa/n/nbf9b4303e601',
        thumbnail: 'https://assets.st-note.com/production/uploads/images/95611366/a165c2c59da14fb3cf99b526e2287bf5.png',
        platform: 'note'
      },
      {
        title: '大学はなぜ「見た目だけのITプロジェクト」を量産するのか？',
        subtitle: '闇のIT営業勉強会 第三回レポート',
        url: 'https://note.com/piyoketa/n/n56434142492a',
        thumbnail: 'https://assets.st-note.com/production/uploads/images/96737042/120ebb7c5c6820a4e4c1c61db8c64c2b.png',
        platform: 'note'
      },
    ],
    management: [
      {
        title: '初めてマネージャーになるエンジニアのための手引き',
        subtitle: '',
        url: 'https://zenn.dev/piyoketa/articles/4306d4afe99361',
        thumbnail: 'https://res.cloudinary.com/zenn/image/upload/s--AkBO3YlG--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%2588%259D%25E3%2582%2581%25E3%2581%25A6%25E3%2583%259E%25E3%2583%258D%25E3%2583%25BC%25E3%2582%25B8%25E3%2583%25A3%25E3%2583%25BC%25E3%2581%25AB%25E3%2581%25AA%25E3%2582%258B%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AE%25E3%2581%259F%25E3%2582%2581%25E3%2581%25AE%25E6%2589%258B%25E5%25BC%2595%25E3%2581%258D%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:piyoketa%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZmNzU5OTgzYzYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
        platform: 'zenn'
      },
      {
        title: '初めて部下になる新人ITエンジニアのためのマネジメントのされ方',
        subtitle: '',
        url: 'https://zenn.dev/piyoketa/articles/5a116bdccacb92',
        thumbnail: 'https://res.cloudinary.com/zenn/image/upload/s--akAsrUZX--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%2588%259D%25E3%2582%2581%25E3%2581%25A6%25E9%2583%25A8%25E4%25B8%258B%25E3%2581%25AB%25E3%2581%25AA%25E3%2582%258B%25E6%2596%25B0%25E4%25BA%25BAIT%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AE%25E3%2581%259F%25E3%2582%2581%25E3%2581%25AE%25E3%2583%259E%25E3%2583%258D%25E3%2582%25B8%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2588%25E3%2581%25AE%25E3%2581%2595%25E3%2582%258C%25E6%2596%25B9%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:piyoketa%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZmNzU5OTgzYzYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
        platform: 'zenn'
      },
      {
        title: '新人プロジェクトマネージャーのための「計画の見直し」の基礎',
        subtitle: '',
        url: 'https://zenn.dev/piyoketa/articles/3492a69b14f9f0',
        thumbnail: 'https://res.cloudinary.com/zenn/image/upload/s--hTbS7s42--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E6%2596%25B0%25E4%25BA%25BA%25E3%2583%2597%25E3%2583%25AD%25E3%2582%25B8%25E3%2582%25A7%25E3%2582%25AF%25E3%2583%2588%25E3%2583%259E%25E3%2583%258D%25E3%2583%25BC%25E3%2582%25B8%25E3%2583%25A3%25E3%2583%25BC%25E3%2581%25AE%25E3%2581%259F%25E3%2582%2581%25E3%2581%25AE%25E3%2580%258C%25E8%25A8%2588%25E7%2594%25BB%25E3%2581%25AE%25E8%25A6%258B%25E7%259B%25B4%25E3%2581%2597%25E3%2580%258D%25E3%2581%25AE%25E5%259F%25BA%25E7%25A4%258E%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:piyoketa%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZmNzU5OTgzYzYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
        platform: 'zenn'
      }
    ],
    llm: [
      {
        title: '外部LLMサービスを使いたいエンジニアのための個人情報保護の論点まとめ',
        subtitle: '',
        url: 'https://zenn.dev/piyoketa/articles/4f95a62371fd11',
        thumbnail: 'https://res.cloudinary.com/zenn/image/upload/s--CUL9vZh6--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E5%25A4%2596%25E9%2583%25A8LLM%25E3%2582%25B5%25E3%2583%25BC%25E3%2583%2593%25E3%2582%25B9%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%2584%25E3%2581%259F%25E3%2581%2584%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E3%2581%25AE%25E3%2581%259F%25E3%2582%2581%25E3%2581%25AE%25E5%2580%258B%25E4%25BA%25BA%25E6%2583%2585%25E5%25A0%25B1%25E4%25BF%259D%25E8%25AD%25B7%25E3%2581%25AE%25E8%25AB%2596%25E7%2582%25B9%25E3%2581%25BE%25E3%2581%25A8%25E3%2582%2581%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:piyoketa%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZmNzU5OTgzYzYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
        platform: 'zenn'
      },
      {
        title: 'LLMによる添削機能付きエディタをWebブラウザで動かしたいなら、textarea overlayを使え！',
        subtitle: '',
        url: 'https://zenn.dev/piyoketa/articles/4934d9c4e1fa5e',
        thumbnail: 'https://res.cloudinary.com/zenn/image/upload/s--M_4gPh-v--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LLM%25E3%2581%25AB%25E3%2582%2588%25E3%2582%258B%25E6%25B7%25BB%25E5%2589%258A%25E6%25A9%259F%25E8%2583%25BD%25E4%25BB%2598%25E3%2581%258D%25E3%2582%25A8%25E3%2583%2587%25E3%2582%25A3%25E3%2582%25BF%25E3%2582%2592Web%25E3%2583%2596%25E3%2583%25A9%25E3%2582%25A6%25E3%2582%25B6%25E3%2581%25A7%25E5%258B%2595%25E3%2581%258B%25E3%2581%2597%25E3%2581%259F%25E3%2581%2584%25E3%2581%25AA%25E3%2582%2589%25E3%2580%2581textarea%2520overlay%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%2588%25EF%25BC%2581%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:piyoketa%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZmNzU5OTgzYzYuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
        platform: 'zenn'
      }
    ]
  }
}

// カルーセル用のデータ
const millnaSlideModel = ref(0)
const karinSlideModel = ref(0)
const coachSlideModel = ref(0)
const peerSupportSlideModel = ref(0)
const darkItSalesSlideModel = ref(0)
const managementSlideModel = ref(0)
const llmSlideModel = ref(0)


</script>

<style lang="scss">
html{
  // font-family: 'Yomogi', cursive;
  box-sizing: border-box;
}

// Component
.profile-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0 0;
  padding-right: 30px;
  
  .profile-icon {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0;
    }
  }
  
  .profile-title {
    font-size: 32px;
    font-weight: 800;
    color: #666;
    text-decoration: underline;
    margin: 0;
  }
}

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
    

.home-page {
  padding: 0;
  
  .profile-section {
    padding: 20px 10px;
    
    .profile-image-container {
      margin-bottom: 10px;
      
    }
    
    .profile-name {
      font-size: 1.5em;
      font-weight: normal;
      margin: 10px 0;
      color: #333;
    }
    
    .profile-description {
      font-size: 1em;
      line-height: 1.5;
      letter-spacing: 0.2em;
      color: #333;
      font-family: 'Yomogi', cursive;
    }
    
    .activity-areas {
      margin: 20px 0;
      padding: 0 15px;
      
      .activity-title {
        font-size: 14px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        text-align: left;
      }
      
      .activity-text {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        text-align: left;
      }
    }
    
    .career-section {
      margin: 20px 0;
      padding: 23px 15px 10px 15px;
      
      .career-content {
        text-align: left;
        
        .career-text {
          font-size: 10px;
          line-height: 1.5;
          color: #999;
          margin: 0;
        }
      }
    }
    
    .illustration-note {
      font-size: 10px;
      color: #333;
      margin: 20px 0;
      text-align: left;
      padding: 0 15px;
    }
    
    .works-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 60px 0 0;
      padding-right: 20px;
      
      .works-icon {
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0;
        }
      }
      
      .works-title {
        font-size: 32px;
        font-weight: 800;
        color: #666;
        text-decoration: underline;
        margin: 0;
      }
    }
  }
  
  .interviews-section, .it-section {
    padding: 10px;
    
    .section-title {
      font-size: 24px;
      font-weight: 700;
      color: #333;
      margin-bottom: 10px;
    }
    
    .section-description {
      font-size: 10px;
      line-height: 1.9;
      color: #333;
      margin-bottom: 30px;
    }
    
    .interview-category, .it-category {
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
      
      .article-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        
        .article-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .article-link {
            display: block;
            text-decoration: none;
            color: inherit;
            
            .article-thumbnail {
              width: 100%;
              height: 120px;
              position: relative;
              background-color: #f5f5f5;
              
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              
              .thumbnail-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f5f5f5;
                color: #999;
                
                .v-icon {
                  font-size: 36px;
                }
              }
            }
            
            .article-info {
              padding: 12px;
              position: relative;
              
              .article-title {
                font-size: 13px;
                font-weight: 600;
                color: #333;
                margin-bottom: 5px;
                line-height: 1.3;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              
              .article-subtitle {
                font-size: 11px;
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
                font-size: 10px;
                border-radius: 4px;
                font-weight: 500;
                
                &.note {
                  background-color: #41c98e;
                  color: white;
                }
                
                &.zenn {
                  background-color: #3ea8ff;
                  color: white;
                }
              }
            }
          }
        }
      }
      
      
      // v-slide-group用スタイル
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
    
    .more-link {
      text-align: center;
      margin-top: 30px;
      
      .interview-link {
        color: #333dff;
        text-decoration: underline;
        font-size: 12px;
      }
    }
  }
  
  .game-section {
    padding: 10px;
    

    .game-cards {
      .game-card {
        border-left: 4px solid #ccc;
        padding-left: 10px;
        margin-bottom: 20px;
        
        .card-content {
          .game-info {
            margin-bottom: 15px;
            
            .game-title {
              font-size: 14px;
              color: #333;
              margin: 0 0 5px 0;
              
              .game-link {
                color: #333dff;
                text-decoration: underline;
                
                &:hover {
                  color: #3338cc;
                }
              }
            }
            
            .game-subtitle {
              font-size: 14px;
              color: #333;
              margin: 0;
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
    }
  }
  
  .mental-health-section {
    padding: 10px;
    
    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      
      .section-icon {
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background-color: #d9d9d9;
          border-radius: 50%;
        }
      }
      
      .section-title {
        font-size: 28px;
        font-weight: 700;
        color: #333;
        margin: 0;
      }
    }
    
    .section-description {
      font-size: 12px;
      line-height: 1.6;
      color: #333;
      margin-bottom: 20px;
    }
    
    .activities-list {
      .activities-text {
        font-size: 12px;
        
        .mental-health-link {
          color: #333dff;
          text-decoration: underline;
          
          &:hover {
            color: #3338cc;
          }
        }
        line-height: 1.6;
        color: #333;
        text-align: left;
      }
    }
  }
}
</style>