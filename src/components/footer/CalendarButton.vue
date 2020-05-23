<template>
  <v-col class="d-flex justify-center pa-0">
    <div id="calendar-button" role="button" @click="go" />
  </v-col>
</template>

<script>
export default {
  name: "CalendarButton",
  methods: {
    go() {
      this.$router.push("/calendar/");
    }
  }
};
</script>

<style scoped>
#calendar-button {
  background-image: url("../../assets/icon/calendar-blank-outline.svg");
  width: 46px;
  height: 46px;
  background-position: center;
}
</style>
