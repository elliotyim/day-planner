<template>
  <v-content>
    <div class="module">
      <div class="module__item">20%</div>
      <div class="module__item">40%</div>
      <div class="module__item">60%</div>
      <div class="module__item">80%</div>
      <div class="module__item">100%</div>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "DashboardView"
};
</script>
<style scoped>
body {
  background-color: #333;
}

.module {
  height: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  margin: 0 auto;
  max-width: 30%;
}

.module__item {
  align-items: center;
  display: flex;
  height: 20%;
  justify-content: center;
}

.module__item:nth-child(odd) {
  background-color: #fff;
  color: #f73859;
}

.module__item:nth-child(even) {
  background-color: #f73859;
  color: #f1d08a;
}
</style>
