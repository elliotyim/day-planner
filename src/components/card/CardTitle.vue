<template>
  <div id="col" :class="options">
    <h1 id="signin-text">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "CardTitleTemplate",
  props: {
    options: String,
    title: String
  }
};
</script>

<style scoped>
#signin-text {
  color: #739f90;
}
</style>
