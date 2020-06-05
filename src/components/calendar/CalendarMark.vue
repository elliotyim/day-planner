<template>
  <v-col class="d-flex justify-center pa-3">
    <v-icon id="calendar-mark" :color="iconColor" @click="mark" role="button">{{
      icon
    }}</v-icon>
  </v-col>
</template>

<script>
import ICON from "@/common/constants/icon";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "CalendarMark",
  props: {
    iconName: String,
    label: String
  },
  computed: {
    ...mapGetters(["getColor", "getDates"]),
    isMounted() {
      return this.iconColor ? true : false;
    },
    icon() {
      return ICON[this.iconName.toUpperCase()];
    },
    iconColor() {
      let dates = this.getDates.filter(
        d => d.dates.getDate() === new Date().getDate()
      );
      let result = dates.filter(
        d => d.popover.label === this.capitalize(this.label)
      );
      return result.length ? result[0].dot.color : "";
    }
  },
  methods: {
    ...mapMutations(["addDate", "removeDate"]),
    ...mapActions(["refreshDates"]),
    capitalize(string) {
      return string
        .trim()
        .split(" ")
        .map(k => k.charAt(0).toUpperCase() + k.substring(1))
        .join(" ");
    },
    add() {
      const label = this.capitalize(this.label);

      const date = {
        id: this.label,
        dot: {
          color: this.getColor[this.label]
        },
        popover: {
          label: label
        },
        dates: new Date()
      };
      this.addDate(date);
    },
    remove() {
      this.removeDate({
        today: new Date(),
        label: this.capitalize(this.label)
      });
    },
    mark() {
      if (this.iconColor) this.remove();
      else this.add();
      this.refreshDates();
    }
  }
};
</script>

<style scoped>
#calendar-mark {
  width: 44px;
  height: 44px;
  background-position: center;
}
</style>
