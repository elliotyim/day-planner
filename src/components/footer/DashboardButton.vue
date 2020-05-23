<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="dashboard-button" :class="{ mounted: isMounted }" role="button" @click="showPage" />
  </v-col>
</template>

<script>
export default {
  name: "DashboardButton",
  computed: {
    isMounted() {
      return this.$route.path.includes("/dashboard/");
    }
  },
  methods: {
    showPage() {
      this.$router.push("/dashboard/");
    }
  }
};
</script>

<style scoped>
#dashboard-button {
  background-image: url("../../assets/icon/dashboard-unselected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
#dashboard-button.mounted {
  background-image: url("../../assets/icon/dashboard-selected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
