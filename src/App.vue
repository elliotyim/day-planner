<template>
  <v-app id="day-planner" style="height: 100%;">
    <router-view id="app-body" />
    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from "@/components/footer/FooterComponent";
export default {
  name: "App",
  components: {
    FooterComponent
  }
};
</script>

<style scoped>
#day-planner {
  background-image: url("assets/img/bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
