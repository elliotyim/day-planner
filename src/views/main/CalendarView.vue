<template>
  <CardBackground>
    <CardTitle title="Calendar" options="text-center pt-3" />
    <v-row>
      <v-col>
        <vc-calendar is-expanded :attributes="attrs" />
      </v-col>
    </v-row>
    <v-row>
      <CalendarMarker
        v-for="mark in marks"
        :key="mark.label"
        :markerIcon="mark.icon"
        :label="mark.label"
        :color="mark.color"
      />
    </v-row>
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CalendarMarker from "@/components/calendar/CalendarMarker";
import { mapGetters } from "vuex";

export default {
  name: "CalendarView",
  components: {
    CardBackground,
    CardTitle,
    CalendarMarker
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
  computed: {
    ...mapGetters(["getDates", "getMarks"]),
    attrs() {
      return [this.today, ...this.getDates];
    },
    marks() {
      return this.getMarks;
    }
  },
  created() {
    this.$store.dispatch("fetchDates");
  }
};
</script>
