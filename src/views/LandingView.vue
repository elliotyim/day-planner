<template>
  <v-content class="d-flex align-center unselectable">
    <v-container class="mt-12">
      <MainLogo />
      <SigninButton />
      <RegisterButton />
    </v-container>
  </v-content>
</template>

<script>
import MainLogo from "@/components/landing/MainLogo";
import SigninButton from "@/components/landing/SigninButton";
import RegisterButton from "@/components/landing/RegisterButton";

export default {
  name: "LandingView",
  components: {
    MainLogo,
    SigninButton,
    RegisterButton
  }
};
</script>
