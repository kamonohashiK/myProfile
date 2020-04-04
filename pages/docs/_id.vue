<template>
  <div class="text-center">
    <h2>{{ doc.title }}</h2>
	<p>{{doc.createdAt}}</p>
    <div>
      <v-chip v-for="tag in doc.tags" :key="tag.id" class="ma-2">
        {{ tag.tag_name }}
      </v-chip>
    </div>
    <div v-html="doc.content" id="content"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      doc: {},
    };
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      process.env.CMS_URL + "/docs/" + params.id,
      {
        headers: { "X-API-KEY": process.env.CMS_API_KEY },
      }
    );
    return {
      doc: data,
    };
  },
};
</script>

<style>
#content {
  text-align: left;
  margin: 0 auto;
  width: 80%;
}
</style>
