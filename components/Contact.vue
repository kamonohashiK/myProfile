<template>
  <div id="contact" class="section">
    <h2 class="text-center">Contact</h2>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="formData.name"
              :rules="nameRules"
              label="お名前"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="formData.email"
              :rules="emailRules"
              label="メールアドレス"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="formData.content"
              :rules="contentRules"
              :counter="1000"
              label="お問い合わせ内容"
            ></v-textarea>
          </v-col>

          <v-btn :disabled="!isValid" @click="submit">送信</v-btn>
        </v-row>
      </v-container>
    </v-form>

    <v-snackbar
      v-model="snackbar.visible"
    >
      {{ snackbar.text }}
      <v-btn
        color="pink"
        text
        @click="snackbar.visible = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    formData: {
      name: "",
      email: "",
      content: ""
    },
    nameRules: [
      v => !!v || "お名前を入力してください。",
      v => v.length <= 60 || "お名前は60文字以内で入力してください。"
    ],
    emailRules: [
      v => !!v || "メールアドレスを入力してください。",
      v => /.+@.+/.test(v) || "メールアドレスの形式に誤りがあります。"
    ],
    contentRules: [
      v => !!v || "お問い合わせ内容を入力してください。",
      v => v.length <= 1000 || "1000文字以内で入力してください。"
    ],
    snackbar: {
      visible: false,
      text: '',
    }
  }),
  computed: {
    isValid() {
      return this.valid;
    }
  },
  methods: {
    submit() {
      if (this.valid) {
        //サーバへの送信処理
        console.log("post");
        this.snackbar.text = 'お問い合わせ内容を送信しました。'
        this.snackbar.visible = true
      }
    }
  }
};
</script>

<style>
.v-btn {
  margin: 0 auto;
}
</style>
