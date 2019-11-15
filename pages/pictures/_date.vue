<template>
  <v-container>
    <v-layout column justify-center>
      <div class="text-center">
        <h3>{{title}}</h3>
      </div>
      <v-row>
        <v-col v-for="i of images" :key="i" class="d-flex child-flex" cols="3">
          <v-img
            :src="'https://d10lbmtrb2tsjb.cloudfront.net/20191103/20191103_' + i.toString() + '_thumb.JPG'"
          ></v-img>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: "20191103",
      title: "新居浜市　大島",
      images: 63
    };
  }
};
</script>

<style>
div .img {
  margin: 5px;
}
</style>