<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <p class="text-h6 mb-1">
        {{ selected_label }}
        <span v-if="answers.length != 0">({{ count }}( {{ lost }} ))</span>
      </p>
      <template v-if="answers.length != 0">
        <v-text-field
          type="text"
          label="解答を入力"
          v-model="answer"
          @change="pushAnswer"
        />
        <p v-if="success_message != ''" style="color: #b9f6ca; font-size: 18px">
          ◯{{ success_message }}
        </p>
        <p v-if="error_message != ''" style="color: #ff8a80; font-size: 18px">
          {{ error_message }}
        </p>
        <b>禁止文字</b><br />
        <span
          v-for="(b, idx) in banned_words"
          :key="`first-${idx}`"
          style="font-size: 20px"
          >{{ b }}　</span
        >
        <br />
        <v-btn style="margin: 10px" @click="surrender" color="error"
          >降参</v-btn
        >
        <ul v-for="(c, idx) in captions" :key="`second-${idx}`">
          <li>{{ c }}</li>
        </ul>
      </template>
      <template v-else>
        <p>遊びたいテーマを選択してください。</p>
        <v-btn
          v-for="(t, idx) in themes"
          @click="selectTheme(t)"
          :key="idx"
          style="margin: 10px"
          color="primary"
        >
          {{ t.label }}({{ t.file.length}})
        </v-btn>
      </template>

      <template v-if="answers.length == 0">
        <p class="text-h6 mb-3">遊び方</p>
        <p class="text-justify">
          「山手線ゲーム」と筒井康隆の小説「<a
            target="_blank"
            href="https://www.amazon.co.jp/gp/product/B07CMZZNPW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07CMZZNPW&linkCode=as2&tag=kamonohashi0f-22&linkId=00260c4d6b008e43036e7223b3d3025d"
            >残像に口紅を</a
          >」を組み合わせたオリジナルゲームです。 <br /><br />
          1. 遊びたいテーマを選択してください。
          <br /><br />
          2. ゲームが進むたびに「禁止文字」が1つ追加されます。<br />
          「お題に合っている」かつ「禁止文字が含まれない」答えを回答欄に入力してください。<br />
          (例)「山手線の駅名」で「あ」が禁止　→「秋葉原」以外の29駅からひとつを回答<br />
          一度回答した答えを再度使うことはできません。
          <br /><br />
          拗音、促音、濁音、半濁音はそれぞれ別の文字として扱います。<br />
          (例)「ゆ」が禁止の時の「ゅ」・「つ」が禁止の時の「っ」・「は」が禁止の時の「ば」「ぱ」<br />
          上記は（別途禁止されていない限り）すべて利用可能です。
          <br /><br />
          棒引き(ー)は禁止文字には含まれません。<br />
          また、読みとなる母音が禁止文字になっていても、回答に使うことができます。<br />
          (例)「山手線の駅名」で「え」が禁止　→「高輪ゲートウェイ」は回答可
          <br /><br />
          3.
          2を繰り返し、お題に沿った答えを全て出すことができればクリアとなります。<br />
          ※「降参」ボタンを押すと正解となる答えの一覧を表示することができます。<br />
          ひとりで挑戦してみたり、パーティゲーム等でご活用いただけると幸いです。
        </p>
      </template></v-flex
    ></v-layout
  >
</template>
    </v-flex>
  </v-layout>
</template>

<script>
import yamanote from "@/assets/json/yamanote.json";
import todofuken from "@/assets/json/todofuken.json";
import seiza from "@/assets/json/seiza.json";
import kencho from "@/assets/json/kencho.json";
import primeminister from "@/assets/json/primeminister.json";
import element from "@/assets/json/element.json";
import gojuon from "@/assets/json/gojuon.json";

export default {
  data() {
    return {
      themes: [
        { file: yamanote, label: "山手線の駅名", captions: ["※「駅」は除く"] },
        {
          file: todofuken,
          label: "日本の都道府県",
          captions: ["※「都」「府」「県」は省いて回答してください。"],
        },
        {
          file: kencho,
          label: "都道府県の県庁所在地",
          captions: ["※「市」「区」は省いて回答してください。"],
        },
        {
          file: seiza,
          label: "88星座",
          captions: ["※「座」は省いて回答してください。", "ひらがな・カタカナのみ"],
        },
        {
          file: primeminister,
          label: "日本の歴代総理大臣",
          captions: [
            "※表記は新字体のみ",
            "(例)山縣有朋→山県有朋、東條英機→東条英機",
          ],
        },
        { file: element, label: "元素の名前", captions: [] },
      ],
      selected_label: "山手線に口紅を",
      origin_answers: [],
      answers: [],
      words: [],
      banned_words: [],
      answer: "",
      success_message: "",
      error_message: "",
      captions: [],
      count: 0,
      lost: 0,
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    selectTheme(theme) {
      this.origin_answers = JSON.parse(JSON.stringify(theme.file));
      this.answers = this.origin_answers;
      this.words = JSON.parse(JSON.stringify(gojuon));
      this.selected_label = theme.label;
      this.captions = theme.captions;
      this.count = theme.file.length;
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
            this.success_message = this.answer;

            //ゲームクリア
            if (this.restWords.length == 0) {
              alert("おめでとうございます！すべての答えが出ました！");
              this.initialize();
            } else {
              //禁止文字の追加
              this.banWord();
              this.lost -= 1;
              this.answer = "";
              this.error_message = "";
            }

            return true;
          } else if (el.name == this.answer && el.answered == true) {
            this.error_message = this.answer + "はすでに回答済みです。";
            this.answer = "";
            return true;
          } else if (el.name == this.answer && el.banned == true) {
            var str = "";
            this.banned_words.forEach((b) => {
              if (el.kana.includes(b)) {
                str += b + " ";
              }
            });
            this.answer = "";
            this.error_message = "禁止文字が含まれています。" + str;
            return true;
          } else {
            this.error_message = "お題に合っていません。";
          }
        });
      } else {
        this.success_message = "";
        this.error_message = "";
      }
    },
    surrender() {
      var str = "";
      this.answers.forEach((e) => {
        if (!e.answered && !e.banned) {
          str += e.name + " ";
        }
      });
      alert(str);

      //初期化
      this.initialize();
    },
    //文字をNG登録
    banWord() {
      var lost = 0;
      var rand = Math.floor(Math.random() * this.words.length);
      var ng = this.words[rand];
      this.words.splice(rand, 1);
      this.banned_words.push(ng);

      this.answers.forEach((el) => {
        if (el.kana.includes(ng)) {
          //console.log(el.name);
          el.banned = true;
          lost -= 1;
        }
      });
      this.count = this.restWords.length;
      this.lost = lost;
    },
    initialize() {
      this.answers = [];
      this.words = gojuon;
      this.banned_words = [];
      this.answer = "";
      this.success_message = "";
      this.error_message = "";
      this.selected_label = "山手線に口紅を";
      this.captions = [];
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
