<template>
  <v-content class="d-flex align-center unselectable">
    <v-container class="mt-12">
      <MainLogo />
      <LoginButton />
      <RegisterButton />
    </v-container>
  </v-content>
</template>

<script>
import MainLogo from "@/components/landing/MainLogo";
import LoginButton from "@/components/landing/LoginButton";
import RegisterButton from "@/components/landing/RegisterButton";

export default {
  name: "Landing",
  components: {
    MainLogo,
    LoginButton,
    RegisterButton
  }
};
</script>
