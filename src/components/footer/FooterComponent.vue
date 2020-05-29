<template>
  <v-footer class="unselectable pa-0" app>
    <v-container class="py-0">
      <v-row>
        <FooterButton path="/dashboard/" iconName="dashboard" />
        <FooterButton path="/calendar/" iconName="calendar" />
        <FooterButton path="/community/" iconName="community" />
        <FooterButton path="/debug/" iconName="settings" />
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import FooterButton from "@/components/footer/FooterButton";

export default {
  name: "FooterComponent",
  components: {
    FooterButton
  }
};
</script>
