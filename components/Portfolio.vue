<template>
  <div id="portfolio" class="section">
    <h2 class="text-center">Portfolio</h2>
    <v-row>
      <v-col cols="12" sm="6" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" max-width="344" outlined>
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <v-img
            height="200"
            width="344"
            :src="item.image"
          ></v-img>
          </a>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{
                item.title
              }}</v-list-item-title>
              <v-list-item-subtitle
                v-html="item.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "しまの時刻表",
          description: "離島行き航路の時刻表・運賃を気軽に検索できるWebサイト",
          image: "/jikoku.png",
          link: "https://shimajikoku.com",
        },
        {
          title: "ITイベント検索Bot",
          description: "IT系イベントを素早く検索できるLINE Bot",
          image: "/it-bot.png",
          link: "https://lin.ee/BTr2iqB"
        }
      ]
    };
  }
};
</script>

<style>
.v-card {
  margin: 10px;
}
</style>
