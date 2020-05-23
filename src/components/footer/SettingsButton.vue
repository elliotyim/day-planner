<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="settings-button" :class="{ mounted: isMounted }" role="button" @click="showPage" />
  </v-col>
</template>

<script>
export default {
  name: "SettingsButton",
  computed: {
    isMounted() {
      return this.$route.path.includes("/settings/");
    }
  },
  methods: {
    showPage() {
      this.$router.push("/settings/");
    }
  }
};
</script>

<style scoped>
#settings-button {
  background-image: url("../../assets/icon/settings-unselected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
#settings-button.mounted {
  background-image: url("../../assets/icon/settings-selected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
