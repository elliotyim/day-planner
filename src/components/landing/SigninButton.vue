<template>
  <v-row>
    <v-col align="center" class="px-12">
      <v-btn
        color="white"
        class="d-flex"
        min-width="100%"
        outlined
        link
        :to="'/signin/'"
        >Signin</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SigninButton"
};
</script>
