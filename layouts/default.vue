<template>
  <v-app dark>
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
      <v-toolbar-title v-text="title"/>
      <v-spacer />
      <v-btn text icon @click="dialog = !dialog">
        <v-icon>mdi-qrcode</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
        <div class="text-center">
          <a
            href="https://paypal.me/kamonohashikre?locale.x=ja_JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn>いくばくか支援</v-btn>
          </a>
        </div>
      </v-container>
    </v-content>
    <v-footer fixed app>
      <v-spacer />
      <span>&copy; 2019</span>
      <v-spacer />
    </v-footer>

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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Top",
          to: "/"
        },
        {
          icon: "mdi-ferry",
          title: "Islands",
          to: "/islands"
        },
        {
          icon: "mdi-robot",
          title: "ChatBot",
          to: "/bot"
        }
      ],
      title: "かも屋",
      dialog: false
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
