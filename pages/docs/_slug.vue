<template>
    <v-layout column>
        <h2>{{md.attributes.title}}</h2>
        <p v-html="md.html"></p>
    </v-layout>
</template>

<script>
export default {
    async asyncData({ params }) {
    try {
      console.info(params.slug);
      let md = await import(`./content/${params.slug}.md`);
      return {
        md
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
}
</script>

<style>
    code {
        width: 100%;
        padding: 5px;
        margin: 10px auto;
    }
</style>