<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="settings-button" role="button" @click="go" />
  </v-col>
</template>

<script>
export default {
  name: "SettingsButton",
  methods: {
    go() {
      this.$router.push("/settings/");
    }
  }
};
</script>

<style scoped>
#settings-button {
  background-image: url("../../assets/icon/cog-outline.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
