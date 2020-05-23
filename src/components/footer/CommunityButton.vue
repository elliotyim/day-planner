<template>
  <v-col class="d-flex justify-center pa-0">
    <div
      id="community-button"
      :class="{ mounted: isMounted }"
      role="button"
      @click="showPage"
    />
  </v-col>
</template>

<script>
export default {
  name: "CommunityButton",
  computed: {
    isMounted() {
      return this.$route.path.includes("/community/");
    }
  },
  methods: {
    showPage() {
      this.$router.push("/community/");
    }
  }
};
</script>

<style scoped>
#community-button {
  background-image: url("../../assets/icon/community-unselected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
#community-button.mounted {
  background-image: url("../../assets/icon/community-selected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
