<template>
  <v-col class="d-flex justify-center pa-0">
    <v-icon
      id="footer-button"
      @click="showPage"
      :color="iconColor"
      role="button"
      >{{ icon }}</v-icon
    >
  </v-col>
</template>

<script>
import ICON from "@/constants";

export default {
  name: "FooterButton",
  props: {
    path: String,
    iconName: String
  },
  computed: {
    isMounted() {
      return this.$route.path.startsWith(this.path);
    },
    icon() {
      return ICON[this.iconName.toUpperCase()];
    },
    iconColor() {
      if (this.isMounted) return ICON.ACTIVE;
      else return ICON.INACTIVE;
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
  width: 44px;
  height: 44px;
  background-position: center;
}
</style>
