<template>
  <v-row>
    <v-col align="center" class="px-12">
      <v-btn color="white" class="d-flex" block outlined :to="'/signin/'"
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
