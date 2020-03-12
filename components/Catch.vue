<template>
  <div id="motto" class="text-center section">
    <h2 v-html="catchphrase"></h2>
    <!--
    <p v-for="p in paragraphs" :key="p" v-html="p"></p>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      catchphrase: "ムダなことをするために、<br />ムダなことをなくしたい。",
      paragraphs: ["文章", "パラグラフを書きます", "かきます"]
    };
  }
};
</script>

<style >
  p {
    margin: 20px auto;
  }
</style>