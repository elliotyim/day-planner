<template>
  <v-app>
    <vue100vh
      id="day-planner"
      :css="{ display: 'flex', flexDirection: 'column', height: '100rvh' }"
    >
      <router-view />
      <footer-component />
    </vue100vh>
  </v-app>
</template>

<script>
import vue100vh from "vue-100vh";
import FooterComponent from "@/components/footer/FooterComponent";

export default {
  name: "App",
  components: {
    vue100vh,
    FooterComponent
  }
};
</script>

<style>
body {
  overflow: hidden;
}
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
  background-color: white;
}
</style>
