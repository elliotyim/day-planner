<template>
  <v-footer class="unselectable pa-0" app fixed>
    <v-container class="py-0">
      <v-row>
        <DashboardButton />
        <CalendarButton />
        <CommunityButton />
        <SettingsButton />
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import DashboardButton from "@/components/footer/DashboardButton";
import CalendarButton from "@/components/footer/CalendarButton";
import CommunityButton from "@/components/footer/CommunityButton";
import SettingsButton from "@/components/footer/SettingsButton";

export default {
  name: "FooterComponent",
  components: {
    DashboardButton,
    CalendarButton,
    CommunityButton,
    SettingsButton
  }
};
</script>
