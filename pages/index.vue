<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <Top />
      <Catch />
      <Skill />
      <Portfolio />
      <Hobbies />
      <!--<Contact />-->
    </v-flex>
  </v-layout>
</template>

<script>
import Top from "~/components/Top.vue";
import Catch from "~/components/Catch.vue";
import Skill from "~/components/Skill.vue";
import Portfolio from "~/components/Portfolio.vue"
import Hobbies from "~/components/Hobbies.vue"
import Contact from "~/components/Contact.vue"

export default {
  components: {
    Top,
    Catch,
    Skill,
    Portfolio,
    Hobbies,
    Contact
  }
};
</script>
