<template>
  <v-app >
    <AppBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    AppBar, Footer
  }
}
</script>
<style>
.section {
  margin: 60px 0;
}
</style>
