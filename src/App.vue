<template>
  <v-app id="day-planner">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
#day-planner {
  background-image: url("assets/bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
