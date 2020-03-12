<template>
  <div id="top" class="text-center section">
    <v-row>
      <v-col cols="12" md="5">
        <v-avatar size="220">
          <img src="/kamo.png" alt="John" @click="dialog = !dialog"/>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="7">
        <h2>Kouki Kadoya</h2>
        <small>as かも屋</small>
        <div class="align-center">
          <a href="https://twitter.com/platypus_k86" target="_blank">
            <v-avatar size="64">
              <img src="/Twitter.png" alt="twitter" />
            </v-avatar>
          </a>
          <a href="https://www.facebook.com/kouki.kadoya" target="_blank">
            <v-avatar size="64">
              <img src="/Facebook.png" alt="facebook" />
            </v-avatar>
          </a>
          <a href="https://github.com/kamonohashiK" target="_blank">
            <v-avatar size="64">
              <img src="/Github.png" alt="github" />
            </v-avatar>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title>スマホでも見れる。</v-card-title>
        <v-img src="/qr.png"></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >閉じる</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style>
.align-center {
  padding: 30px;
}

.align-center a {
  margin: 30px 0;
}
</style>
