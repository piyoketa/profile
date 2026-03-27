<template>
  <v-container class="py-8 masochistic-sister-page">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="9">
        <v-card class="pa-4 pa-sm-6 mb-6">
          <div class="hero-placeholder mb-6">
            <div>
              <h1 class="text-h4 text-sm-h3 font-weight-bold mb-3">被虐のシスター</h1>
              <p class="text-body-1 mb-0">
                プレイヤー自身は一切攻撃せず、受けた攻撃を記憶して戦う<br>
                スレスパ系のデッキ構築ゲームです。
              </p>
            </div>
            <img :src="sisterThumbnail" alt="被虐のシスター" class="hero-thumbnail">
          </div>

          <div class="d-flex flex-wrap ga-3 mb-6">
            <v-btn
              color="primary"
              href="https://masochistic-sister.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ゲームを遊ぶ
            </v-btn>
            <v-btn
              variant="outlined"
              href="https://x.com/piyoketa_unity/status/2022636169520124147"
              target="_blank"
              rel="noopener noreferrer"
            >
              紹介ポストを見る
            </v-btn>
          </div>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">コンセプト</h2>
            <p class="text-body-1">
              「プレイヤー自身は一切の攻撃手段を持たず、敵から受けた攻撃を記憶して戦う」
              ことを核にしたゲームデザインを試しています。
            </p>
            <p class="text-body-2">
              まだUIの作り込み前で、ゲーム中盤にこのコンセプトならではの面白さが
              立ち上がるかを検証している段階です。
            </p>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">依頼内容</h2>
            <v-list class="pa-0" density="compact">
              <v-list-item>
                <template #prepend>
                  <v-icon size="18">mdi-check-circle-outline</v-icon>
                </template>
                <v-list-item-title>2周目のボス戦（ビーム砲）に到達する</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon size="18">mdi-check-circle-outline</v-icon>
                </template>
                <v-list-item-title>または3回ゲームオーバーになるまで遊ぶ</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon size="18">mdi-clock-outline</v-icon>
                </template>
                <v-list-item-title>想定プレイ時間は30分〜1時間</v-list-item-title>
              </v-list-item>
            </v-list>
            <p class="text-body-2 mt-3 mb-0">
              時間が合えば通話しながら案内する前提でも募集しています。
            </p>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">遊び方メモ</h2>
            <v-list class="pa-0 guide-list" density="compact">
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  敵の攻撃を受けると、手札に「被虐の記憶」が追加されます。
                  大きな被ダメージほど強い攻撃カードになります。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  敵の防御（鉄壁）は失われません。突破にはそれ以上の打点が必要です。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  捨て札のカードは、山札を引き切ると山札へ戻ります。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  戦闘画面右上の「一手戻す」で操作を巻き戻せます。
                  分からないときほど試してください。
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">開始手順</h2>
            <v-list class="pa-0" density="compact">
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  1. 上のリンクからゲームを開く
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  2. 「はじめから」を押す
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  3. チュートリアル戦闘は任意。未整備なので飛ばしても大丈夫です
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">現状の注意</h2>
            <p class="text-body-2 mb-3">
              まだ遊びとして成立するかを確かめている段階なので、チュートリアルは未整備です。
              最初は説明文を拾いながら試行錯誤する前提です。
            </p>
            <v-alert type="info" variant="tonal" density="comfortable">
              スプラトゥーンでいえば、豆腐が銃を打ち合っているデモを作っている段階、
              という温度感です。
            </v-alert>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">検証したいこと</h2>
            <v-alert type="warning" variant="tonal" density="comfortable">
              序盤の分かりやすさより、中盤で
              「このコンセプトならではの面白さ」が出るかを見ています。
            </v-alert>
          </section>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import sisterThumbnail from '@/assets/articles/mosochistic-sister.png'
</script>

<style lang="scss" scoped>
.masochistic-sister-page {
  .hero-placeholder {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, #f9e4ec 0%, #f4f5ff 100%);
    border: 1px solid rgba(15, 30, 46, 0.08);

    .hero-thumbnail {
      width: min(480px, 100%);
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }

    .eyebrow {
      color: #9c4b6b;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }

  .content-section + .content-section {
    margin-top: 32px;
  }

  .guide-list :deep(.v-list-item) {
    padding-inline: 0;
  }
}

.masochistic-sister-page .hero-placeholder .hero-thumbnail {
  width: min(480px, 100%);
}
</style>
