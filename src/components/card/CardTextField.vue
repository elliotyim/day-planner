<template>
  <div id="col" :class="options">
    <v-text-field v-bind="{ type, label, color }"></v-text-field>
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
  }
};
</script>
