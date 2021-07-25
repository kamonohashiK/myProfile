<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <p class="text-h4 mb-1">山手線に口紅を</p>
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

        <br /><v-btn style="margin: 20px" @click="surrender">降参</v-btn>
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

      <p class="text-h5 mb-3">遊び方</p>
      <p class="text-justify">
        「山手線ゲーム」と筒井康隆の小説「<a target="_blank" href="https://www.amazon.co.jp/gp/product/B07CMZZNPW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07CMZZNPW&linkCode=as2&tag=kamonohashi0f-22&linkId=00260c4d6b008e43036e7223b3d3025d">残像に口紅を</a>」を組み合わせたオリジナルゲームです。
        <br /><br />
        1. 遊びたいテーマを選択してください。
        <br /><br />
        2. ゲームが進むたびに「禁止ワード」が1つ追加されます。<br />
        「お題に合っている」かつ「禁止ワードが含まれない」答えを回答欄に入力してください。<br />
        (例)「山手線の駅名」で「あ」が禁止　→「秋葉原」以外の29駅からひとつを回答<br />
        一度回答に使った言葉を再度使うことはできません。
        <br /><br />
        3.
        2を繰り返し、お題に沿った答えを全て出すことができればクリアとなります。<br />
        ※「降参」ボタンを押すと正解となる答えの一覧を表示することができます。<br />
        ひとりで挑戦してみたり、パーティゲーム等でご活用いただけると幸いです。
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import yamanote from "@/assets/json/yamanote.json";
import todofuken from "@/assets/json/todofuken.json";
import seiza from "@/assets/json/seiza.json";
import gojuon from "@/assets/json/gojuon.json";

export default {
  data() {
    return {
      themes: [
        { file: yamanote, label: "山手線の駅名" },
        { file: todofuken, label: "日本の都道府県" },
        { file: seiza, label: "88星座" },
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
