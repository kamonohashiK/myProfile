<template>

  <div id="portfolio" class="section">

    <h2 class="text-center">Portfolio</h2>

    <v-row>

      <v-col cols="12" sm="6" v-for="item in items" :key="item.title">

        <v-card class="mx-auto" max-width="344" outlined>

          <a :href="item.link" :target="!item.inner" rel="noopener noreferrer">

            <v-img height="200" width="344" :src="item.image"></v-img>

          </a>

          <v-list-item three-line>

            <v-list-item-content>

              <v-list-item-title class="headline mb-1">
                 {{ item.title }}
              </v-list-item-title>

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
 export default { data() { return { items: [ { title: "リトグラフ", description:
"日本の有人離島に関する情報を共有するWebサイト(Next.js / TypeScript / Firebase)",
image: "/ritograph.png", link: "https://ritograph.com", inner: false, }, ] }; } };

</script>

<style>
.v-card {
  margin: 10px;
}
</style>

