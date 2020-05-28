<template>
  <div id="col" :class="options">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardTitleTemplate",
  props: {
    options: String
  }
};
</script>
