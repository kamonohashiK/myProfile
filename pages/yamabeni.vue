<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h3>山手線に口紅を</h3>
      <template v-if="answers.length != 0">
        <v-text-field
          type="text"
          label="解答を入力"
          v-model="answer"
          @change="pushAnswer"
        />
        <p v-if="error_message" style="color: red">{{ error_message }}</p>
        <br />
        <p>残り{{ restWords.length }}個</p>
        <b>禁止ワード</b><br />
        <span v-for="(b, idx) in banned_words" :key="idx">{{ b }}　</span>

        <br /><v-btn @click="surrender">降参</v-btn>
      </template>
      <template v-else>
        <p>遊びたいテーマを選択してください。</p>
        <v-btn
          v-for="(t, idx) in themes"
          @click="selectTheme(t.file)"
          :key="idx"
          style="margin: 10px"
        >
          {{ t.label }}
        </v-btn>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import yamanote from "@/assets/json/yamanote.json";
import todofuken from "@/assets/json/todofuken.json";
import gojuon from "@/assets/json/gojuon.json";

export default {
  data() {
    return {
      themes: [
        { file: yamanote, label: "山手線の駅名" },
        { file: todofuken, label: "日本の都道府県" },
      ],
      origin_answers: [],
      answers: [],
      words: [],
      banned_words: [],
      answer: "",
      error_message: "",
    };
  },
  methods: {
    selectTheme(file) {
      this.origin_answers = JSON.parse(JSON.stringify(file));
      this.answers = this.origin_answers;
      this.words = JSON.parse(JSON.stringify(gojuon));
      this.banWord();
    },
    pushAnswer() {
      if (this.answer != "") {
        this.answers.some((el) => {
          if (
            el.name == this.answer &&
            el.answered == false &&
            el.banned == false
          ) {
            //console.log(el.name);
            el.answered = true;

            //ゲームクリア
            if (this.restWords.length == 0) {
              alert("おめでとうございます！すべての答えが出ました！");
            } else {
              //禁止ワードの追加
              this.banWord();
              this.answer = "";
              this.error_message = "";
            }

            return true;
          } else if (el.name == this.answer && el.answered == true) {
            this.error_message = "すでに出ている答えです。";
            return true;
          } else if (el.name == this.answer && el.banned == true) {
            this.error_message = "禁止ワードが含まれています。";
            return true;
          } else {
            this.error_message = "お題に合っていません。";
          }
        });
      } else {
        this.error_message = "";
      }
    },
    surrender() {
      var str = "";
      this.answers.forEach((e) => {
        if (!e.answered && !e.banned) {
          str += e.name + ",";
        }
      });
      alert(str);

      //初期化
      this.answers = [];
      this.words = gojuon;
      this.banned_words = [];
      this.answer = "";
      this.error_message = "";
    },
    //文字をNG登録
    banWord() {
      var rand = Math.floor(Math.random() * this.words.length);
      var ng = this.words[rand];
      this.words.splice(rand, 1);
      this.banned_words.push(ng);

      this.answers.forEach((el) => {
        if (el.kana.includes(ng)) {
          //console.log(el.name);
          el.banned = true;
        }
      });
    },
  },
  computed: {
    restWords() {
      var tmp = this.answers.filter(
        (el) => el.banned == false && el.answered == false
      );
      return tmp;
    },
  },
};
</script>
