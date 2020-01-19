<template>
  <v-layout column justify-center align-center>
    <h2>Docs</h2>
	<p>技術メモ的なものを書いていく(予定</p>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link to="docs/test">{{ post.attributes.title }}</nuxt-link>
      </li>
    </ul>
  </v-layout>
</template>
<script>
export default {
  async asyncData() {
    const resolve = require.context("./", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: "docs"
    };
  }
};
</script>