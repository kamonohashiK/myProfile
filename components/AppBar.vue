<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "トップ",
          to: "/#top",
        },
        {
          icon: "mdi-laptop",
          title: "スキル",
          to: "/#skills",
        },
        {
          icon: "mdi-application",
          title: "ポートフォリオ",
          to: "/#portfolio",
        },
        {
          icon: "mdi-chart-bubble",
          title: "趣味",
          to: "/#hobbies",
        },
        {
          icon: "mdi-gamepad-variant-outline",
          title: "「山手線に口紅を」",
          to: "/yamabeni",
        },
        {
          icon: "mdi-gamepad-variant-outline",
          title: "Quiz High&Low",
          to: "/quiz_hal",
        },
      ],
      title: "kamoy4.com",
    };
  },
};
</script>
