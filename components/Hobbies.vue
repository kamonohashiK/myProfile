<template>
  <div id="hobbies" class="section">
    <h2 class="text-center">Hobbies</h2>
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-img
            height="220"
            width="344"
            :src="item.image"
          ></v-img>
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
          title: "離島めぐり",
          description: "瀬戸内の島にぶらっと出かけて、ぼんやり過ごすのが好き。",
          image: "/island.jpg"
        },
        {
          title: "バイク",
          description: "31才で普通二輪免許を取得。今の愛車はスーパーカブ110。",
          image: "/cub.jpg"
        },
        {
          title: "洋楽ロック",
          description: "Black Sabbath, Ozzy Osbourne, Led Zeppelin, Deep Purple, Kiss, Van Halen, AC/DC, Metallica etc.",
          image: "sabbath.jpg"
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
