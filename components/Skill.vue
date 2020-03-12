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
          <v-card-actions>
            <v-spacer />
            <v-rating length="3" v-model="skill.rating"></v-rating>
          </v-card-actions>
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
          description:
            "Laravel, CakePHP等を用いた<br>Webアプリの設計・開発",
          rating: 2
        },
        {
          title: "Scala",
          description:
            "Play Frameworkを用いた<br>Webアプリの開発・保守",
          rating: 1
        },
        {
          title: "Vue.js",
          description: "Nuxt.jsを用いた<br>SPAの設計・開発",
          rating: 2
        },
        {
          title: "Python",
          description: "サーバレスアプリの<br>関数部分等で使用",
          rating: 2
        },
        {
          title: "AWS",
          description:
            "Lambda, DynamoDB等を用いた<br>サーバレスアプリの設計・開発",
          rating: 1
        }
      ]
    };
  }
};
</script>
