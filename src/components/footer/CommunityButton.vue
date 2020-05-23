<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="community-button" role="button" @click="showPage" />
  </v-col>
</template>

<script>
export default {
  name: "CommunityButton",
  methods: {
    showPage() {
      this.$router.push("/community/");
    }
  }
};
</script>

<style scoped>
#community-button {
  background-image: url("../../assets/icon/account-group-outline.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
