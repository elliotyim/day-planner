<template>
  <CardBackground>
    <CardTitle title="Calendar" options="text-center pt-3" />
    <v-row>
      <v-col>
        <vc-calendar is-expanded :attributes="attrs" />
      </v-col>
    </v-row>
    <v-row>
      <CalendarMark
        v-for="mark in marks"
        :key="mark.label"
        :iconName="mark.iconName"
        :label="mark.label"
      />
    </v-row>
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CalendarMark from "@/components/calendar/CalendarMark";
import { mapGetters } from "vuex";

export default {
  name: "CalendarView",
  components: {
    CardBackground,
    CardTitle,
    CalendarMark
  },
  data() {
    return {
      today: {
        key: "today",
        highlight: "gray",
        dates: new Date()
      }
    };
  },
  created() {
    this.$store.dispatch("refreshDates");
  },
  computed: {
    ...mapGetters(["getMarks", "getDates"]),
    attrs() {
      return [this.today, ...this.getDates];
    },
    marks() {
      return this.getMarks;
    }
  }
};
</script>
