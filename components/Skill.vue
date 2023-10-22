<template>
  <div id="skills" class="section">
    <h2 class="text-center">Skills</h2>
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="skill in skills" :key="skill.title">
        <v-card class="mx-auto" max-width="400" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{
                skill.title
              }}</v-list-item-title>
              <p v-html="skill.description" class="text--primary"></p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      skills: [
        {
          title: "PHP",
          description: "Laravel, CakePHP等による<br>Webアプリの設計・開発",
          rating: 2,
        },
        {
          title: "Vue.js",
          description: "Nuxt.jsによる<br>SPAの設計・開発",
          rating: 2,
        },
        {
          title: "Python",
          description: "簡易的な業務用ツール、<br>スクレイピングツールの開発",
          rating: 2,
        },
        {
          title: "AWS",
          description:
            "Lambda, DynamoDBを用いた<br>Webアプリの設計・開発",
          rating: 1,
        },
        {
          title: "Firebase",
          description:
            "スマホアプリ・Webの<br>簡易的なバックエンド開発",
          rating: 1,
        },
        {
          title: "React.js",
          description:
            "Next.jsによる<br>SPAの設計・開発",
          rating: 1,
        },
        {
          title: "Go",
          description:
            "CLIツール、<br>Webサーバの設計・開発",
          rating: 1,
        },
         {
          title: "Flutter",
          description:
            "iOS/Android<br>両対応のアプリ開発",
          rating: 1,
        },
      ],
    };
  },
};
</script>
