<template>
  <div id="col" :class="options">
    <v-text-field
      v-bind="{ type, label, color }"
      @blur="scrollToTop"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "CardTextField",
  props: {
    options: String,
    type: String,
    label: String,
    color: String
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>
