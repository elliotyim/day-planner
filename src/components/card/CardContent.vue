<template>
  <div id="col" :class="options">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: {
    options: String
  }
};
</script>
