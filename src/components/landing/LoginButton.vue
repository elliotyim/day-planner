<template>
  <v-row class="d-flex">
    <v-col align="center" class="px-12">
      <v-btn class="d-flex" color="white" :to="'login'" outlined>
        Login
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginButton"
};
</script>
