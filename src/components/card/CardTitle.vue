<template>
  <div id="col" :class="options">
    <h1 id="title-text">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    options: String,
    title: String
  }
};
</script>

<style scoped>
#title-text {
  color: #739f90;
}
</style>
