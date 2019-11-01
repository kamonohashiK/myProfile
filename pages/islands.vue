<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-img src="/island.jpg" aspect-ratio="1" width="580" height="360"></v-img>
      <div class="text-center">
        <h2>離島が好き。</h2>
        <p>海とひとりきりの時間が好きなので。</p>

        <h3>しまの時刻表</h3>
        <a href="http://shimajikoku.com" target="_blank" rel="noopener noreferrer">
          <v-img src="/jikoku.png" aspect-ratio="1" width="580" height="240"></v-img>
        </a>
        <p>離島行き航路の時刻表・運賃を気軽に検索できるWebサイト。</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
.v-img {
  margin: 20px auto;
}

h3 {
  margin: 20px 0;
}

.text-center {
  padding: 10px;
}
</style>