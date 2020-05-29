<template>
  <v-col class="d-flex justify-center pa-0">
    <div
      id="footer-button"
      :style="{ backgroundImage: iconUrl }"
      role="button"
      @click="showPage"
    />
  </v-col>
</template>

<script>
export default {
  name: "FooterButton",
  props: {
    path: String,
    iconName: String
  },
  computed: {
    iconUrl() {
      if (this.$route.path.startsWith(this.path))
        return `url(${require(`@/assets/icon/${this.iconName}-selected.svg`)})`;
      else
        return `url(${require(`@/assets/icon/${this.iconName}-unselected.svg`)})`;
    }
  },
  methods: {
    showPage() {
      if (!this.isMounted) this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
#footer-button {
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
