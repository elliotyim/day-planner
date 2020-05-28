<template>
  <div id="col" :class="options">
    <v-btn v-bind="{ color, outlined, block, dark, text, link, to }">
      <slot>{{ name }}</slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CardButton",
  props: {
    options: String,
    color: String,
    outlined: Boolean,
    block: Boolean,
    dark: Boolean,
    text: Boolean,
    link: Boolean,
    to: String,
    name: String
  }
};
</script>

<style></style>
