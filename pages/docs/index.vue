<template>
  <div id="docs" class="section">
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="doc in docs" :key="doc.title">
        <v-card class="mx-auto" max-width="344" outlined>
          <nuxt-link :to="`/docs/${doc.id}`">
            <v-img
              height="220"
              width="344"
              :src="image(doc.tags[0].id)"
            ></v-img>
          </nuxt-link>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{
                doc.title
              }}</v-list-item-title>
              <v-card-text>
                <v-chip-group column>
                  <v-chip v-for="tag in doc.tags" :key="tag.id" class="ma-2">
                    {{ tag.tag_name }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      docs: [],
    };
  },
  async asyncData() {
    const { data } = await axios.get(process.env.CMS_URL + "/docs", {
      headers: { "X-API-KEY": process.env.CMS_API_KEY },
    });
    return {
      docs: data.contents,
    };
  },
  methods: {
    image(tag) {
      switch (tag) {
        case "vue":
          return "vue.png";
          break;
        case "nuxt":
          return "nuxt.png";
          break;
        default:
          return "http://placehold.jp/eeeeee/cccccc/200x150.png?text=No%20Image";
          break;
      }
    },
  },
};
</script>
