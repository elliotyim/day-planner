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
  },
  methods: {
    resize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
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
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);

  background-image: url("assets/img/bg.jpg");
  background-position: center;
  background-size: cover;
  background-color: white;
}
</style>
