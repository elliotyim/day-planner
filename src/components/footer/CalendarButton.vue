<template>
  <v-col class="d-flex justify-center pa-0">
    <div
      id="calendar-button"
      :class="{ mounted: isMounted }"
      role="button"
      @click="showPage"
    />
  </v-col>
</template>

<script>
export default {
  name: "CalendarButton",
  computed: {
    isMounted() {
      return this.$route.path.includes("/calendar/");
    }
  },
  methods: {
    showPage() {
      this.$router.push("/calendar/");
    }
  }
};
</script>

<style scoped>
#calendar-button {
  background-image: url("../../assets/icon/calendar-unselected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
#calendar-button.mounted {
  background-image: url("../../assets/icon/calendar-selected.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
