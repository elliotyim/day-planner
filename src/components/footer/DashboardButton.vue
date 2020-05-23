<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="dashboard-button" role="button" @click="showPage" />
  </v-col>
</template>

<script>
export default {
  name: "DashboardButton",
  methods: {
    showPage() {
      this.$router.push("/dashboard/");
    }
  }
};
</script>

<style scoped>
#dashboard-button {
  background-image: url("../../assets/icon/gauge.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
