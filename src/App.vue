<template>
  <vue100vh>
    <v-app id="day-planner">
      <vue100vh
        :css="{ display: 'flex', flexDirection: 'column', height: '100rvh' }"
      >
        <RouterView />
        <FooterComponent />
      </vue100vh>
    </v-app>
  </vue100vh>
</template>

<script>
import vue100vh from "vue-100vh";
import FooterComponent from "@/components/footer/FooterComponent";

export default {
  name: "App",
  components: {
    vue100vh,
    FooterComponent
  },
  mounted() {
    document.documentElement.style.overflow = "hidden";
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
  background-color: white;
}
</style>
