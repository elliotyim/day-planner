<template>
  <v-app id="day-planner">
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

<style>
.unselectable {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>

<style scoped>
#day-planner {
  background-image: url("assets/img/bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
