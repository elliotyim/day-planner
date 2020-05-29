<template>
  <v-content class="align-center unselectable">
    <v-container>
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
