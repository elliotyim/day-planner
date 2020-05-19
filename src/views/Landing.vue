<template>
  <v-content class="d-flex align-center">
    <v-container class="mt-12">
      <LandingLogo />
      <LoginButton />
      <RegisterButton />
    </v-container>
  </v-content>
</template>

<script>
import LandingLogo from "@/components/landing/LandingLogo";
import LoginButton from "@/components/landing/LoginButton";
import RegisterButton from "@/components/landing/RegisterButton";

export default {
  name: "Landing",
  components: {
    LandingLogo,
    LoginButton,
    RegisterButton
  }
};
</script>
