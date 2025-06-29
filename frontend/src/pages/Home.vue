<template>
  <div class="home-page">
    <v-container fluid class="profile-section pa-5">
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

    <!-- Profile Section -->
    <v-container fluid class="profile-content-section pa-5">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <!-- Profile Icon & Title -->
          <PageHeader title="Profile" :icon="titleIcon" />

          <div class="activity-areas my-5 px-4">
            <p class="activity-title mb-1">本名</p>
            <p class="activity-text">
              千葉 一輝（ちば かずき）
            </p>
          </div>

          <div class="activity-areas my-5 px-4">
            <p class="activity-title mb-1">経歴</p>
            <p class="activity-text">
              1994年生まれ。
              2017年 東京大学医学部健康総合科学科卒。<br>
              本業はWebエンジニア。 以前はオンラインカウンセリングのベンチャー企業でCTOをやったり、フリーランスのWebエンジニアをやったり。 最近は医療系IT企業でAI活用をやっています。
            </p>
          </div>

          <div class="activity-areas my-5 px-4">
            <p class="activity-title mb-1">活動分野</p>
            <p class="activity-text">Webエンジニアリング、インタビュー記事執筆、<br>メンタルヘルス、ゲーム作り</p>
          </div>

          <!-- Illustration Note -->
          <p class="illustration-note my-5 px-4">※イラストは全て妻が描きました</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Works Section -->
    <v-container fluid class="works-section pa-5">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <!-- Works Icon & Title -->
          <PageHeader title="Works" :icon="workIcon" class="works" />
        </v-col>
      </v-row>

      <!-- Interview Section -->
      <v-row>
        <v-col cols="12">
          <SectionHeader title="Interviews"
            description="大学でインタビュー分析手法を学んで以降、「異なる世界の間に橋を架ける」をテーマに、主に対人支援に関するインタビュー分析記事の執筆を続けています。" />

          <!-- millnaさんセクション -->
          <ArticleSlides title="millnaさん" subtitle="ファッションデザイナー / YouTuber"
            :articles="articleData.interview_analysis.millna" />

          <!-- Karinさんセクション -->
          <ArticleSlides title="Karinさん" subtitle="バーチャルAV女優" :articles="articleData.interview_analysis.karin" />

          <!-- コーチセクション -->
          <ArticleSlides title="コーチ" subtitle="対人支援専門職" :articles="articleData.interview_analysis.coach" />

          <!-- ピアサポーターセクション -->
          <ArticleSlides title="精神障害ピアサポーター" :articles="articleData.interview_analysis.peer_support" />

          <!-- More Link -->
          <div class="more-link text-center mt-8">
            <router-link to="/interview" class="interview-link">
              →インタビューについてより詳しく
            </router-link>
          </div>
        </v-col>
      </v-row>

      <!-- IT Engineering Section -->
      <v-row>
        <v-col cols="12">
          <SectionHeader title="IT engineering" description="勤め先の仕事内容はあまり外に発信してませんが、たまに記事を書いたり勉強会を開いたりしています。" />

          <!-- 闇のIT営業勉強会セクション -->
          <ArticleSlides title="闇のIT営業勉強会" :articles="articleData.it_engineering.dark_it_sales" />

          <!-- マネジメント関係セクション -->
          <ArticleSlides title="マネジメント関係" :articles="articleData.it_engineering.management" />

          <!-- LLM関係セクション -->
          <ArticleSlides title="LLM関係" :articles="articleData.it_engineering.llm" />
        </v-col>
      </v-row>

      <!-- Game Section -->
      <v-row class="game-section">
        <v-col cols="12">
          <SectionHeader title="Game" description="2025年から、趣味でゲーム作っています" />

          <!-- Game Cards -->
          <div class="game-cards">
            <GameCard
              v-for="game in gameData"
              :key="game.url"
              :game="game"
            />
          </div>
        </v-col>
      </v-row>

      <!-- Mental Health Section -->
      <v-row>
        <v-col cols="12">
          <SectionHeader title="Mental health"
            description="学生時代は精神障害当事者活動の研究をしてたこともあり、卒業後もメンタルヘルスに関してちまちま執筆や発信をしています。一時期は「Fundamental」というIT×メンタルヘルス企業の集まりの運営をしていました。" />

          <div class="activities-list">
            <p class="activities-text">
              書籍<br>
              ・<a href="https://www.kongoshuppan.co.jp/book/b608335.html" target="_blank"
                class="mental-health-link">臨床心理学 増刊14号「データから見る心理職の賃金と雇用形態」</a><br><br>

              勉強会資料<br>
              ・<a href="https://vine-gasoline-69c.notion.site/92de8ae4fa594ab8b2fca91140b92a9a?source=copy_link"
                target="_blank" class="mental-health-link">非臨床職のための心理カウンセリング基礎知識講座</a><br>
              ・<a href="https://vine-gasoline-69c.notion.site/in-2022-d6ebec77c5dc4a69b8f3bc9c642f9ed8?source=copy_link"
                target="_blank" class="mental-health-link">デジタルメンタルヘルスの動向を概観する in 2022</a><br><br>

              動画<br>
              ・<a href="https://www.youtube.com/channel/UCJADMvAwXJoQq832rFwxLDg" target="_blank"
                class="mental-health-link">Fundamental-Radio</a><br><br>

              記事：<br>
              ・<a href="https://note.com/piyoketa/n/n915ad7a538d8" target="_blank"
                class="mental-health-link">悩める高校生よ、「心理学部」を選ぶのはまだ早い</a><br>
              ・<a href="https://note.com/piyoketa/n/nf22a7f31c412" target="_blank"
                class="mental-health-link">心理士のキャリアのためのPX(サイコロジカルトランスフォーメーション)人材のすすめ</a>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import profileImage from '@/assets/profile_top.png'
import titleIcon from '@/assets/title_icon.png'
import workIcon from '@/assets/work_icon.png'
import ArticleSlides from '@/components/ArticleSlides.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PageHeader from '@/components/PageHeader.vue'
import GameCard from '@/components/GameCard.vue'

// Game data
const gameData = [
  {
    title: '孤独の七並べ',
    subtitle: 'トランプパズル/ローグライク プレイ時間 15分～',
    url: 'https://unityroom.com/games/alone_7cards',
    image: '/src/assets/articles/kodokuno_sichinarabe.png'
  },
  {
    title: '有害コンテンツシューティング',
    subtitle: '実験作 プレイ時間 5分～',
    url: 'https://openai-moderation-app.netlify.app',
    image: '/src/assets/articles/GXM6A_GaIAEQ-hq.png'
  }
]

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



</script>

<style lang="scss">
html {
  // font-family: 'Yomogi', cursive;
  box-sizing: border-box;
}

.home-page {
  padding: 0;

  .profile-section,
  .profile-content-section,
  .works-section {
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

    .activity-areas {
      .activity-title {
        font-size: 14px;
        font-weight: bold;
        color: #333;
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
      .career-content {
        text-align: left;

        .career-text {
          font-size: 10px;
          line-height: 1.5;
          color: #999;
        }
      }
    }

    .illustration-note {
      font-size: 10px;
      color: #333;
      text-align: left;
    }

  }

  .works-section {
    .more-link {
      .interview-link {
        color: #333dff;
        text-decoration: underline;
        font-size: 12px;
      }
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