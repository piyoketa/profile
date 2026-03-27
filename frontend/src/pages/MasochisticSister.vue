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
                スレスパ系カードゲームです。
              </p>
            </div>
            <img :src="sisterThumbnail" alt="被虐のシスター" class="hero-thumbnail">
          </div>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">注意事項</h2>
            <v-list class="pa-0" density="compact">
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  まだ開発中です。遊びとして成立するか検証している段階なので、
                  チュートリアルなどはまだ作成していません。
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">遊び方</h2>
            <p class="text-body-2 mb-3">
              ルールはほとんど Slay the Spire ですが、以下の4点だけご注意ください。
            </p>
            <v-list class="pa-0 guide-list" density="compact">
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  敵の攻撃を受けると、手札に「被虐の記憶」（攻撃カード）が追加されます。
                  大きなダメージを受けるほど、強い攻撃カードが手に入ります。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  敵の防御（鉄壁）は失われません。鉄壁を超えるには、それ以上の打点のカードが必要です。
                  初戦のかたつむりを突破できない時は、30ダメージ以上の攻撃を受けましょう。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  捨て札に送られたカードは、山札を引き切ると山札に戻ります。
                  手に入れた攻撃カードを再利用しましょう。
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-body-2">
                  戦闘画面右上の「一手戻す」で操作を巻き戻せます。
                  よくわからない時は、どんどん手を戻して色々な操作を試してみてください。
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </section>

          <section class="content-section">
            <h2 class="text-h6 font-weight-bold mb-3">ゲームの始め方</h2>
            <div class="d-flex flex-wrap ga-3">
              <v-btn
                color="primary"
                href="https://masochistic-sister.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ゲームを遊ぶ
              </v-btn>
            </div>
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
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, #f9e4ec 0%, #f4f5ff 100%);
    border: 1px solid rgba(15, 30, 46, 0.08);

    .hero-thumbnail {
      width: min(360px, 100%);
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

  .tweet-card {
    background: #fafafa;
  }

  .tweet-link {
    color: #1d4ed8;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 600px) {
  .masochistic-sister-page {
    .hero-placeholder {
      flex-direction: column;
      align-items: flex-start;

      .hero-thumbnail {
        width: 100%;
      }
    }
  }
}
</style>
