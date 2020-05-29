<template>
  <CardBackground>
    <CardTitle title="Sign In" options="mx-5 py-3" />

    <CardTextField type="email" label="Email" color="#739F90" options="mx-5" />
    <CardTextField
      type="password"
      label="Password"
      color="#739F90"
      options="mx-5"
    />

    <CardButton
      name="Sign In"
      options="mx-5 my-5"
      color="#739F90"
      link
      to="/dashboard/"
      outlined
      block
    />

    <CardButton options="mx-5 mb-1" color="#DB4437" block dark>
      <v-icon dark left>mdi-google</v-icon>Log in with Google
    </CardButton>
    <CardButton options="mx-5 mb-5" color="#211F1F" block dark>
      <v-icon dark left>mdi-github</v-icon>Log in with Github
    </CardButton>

    <CardContent options="text-center pb-3">
      <v-btn link to="/register/" text color="#739F90">Sign Up</v-btn>
      <v-btn link to="/password-reset/" text color="#739F90"
        >Forgot Password?</v-btn
      >
    </CardContent>
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CardContent from "@/components/card/CardContent";
import CardTextField from "@/components/card/CardTextField";
import CardButton from "@/components/card/CardButton";

export default {
  name: "SigninView",
  components: {
    CardBackground,
    CardTitle,
    CardContent,
    CardTextField,
    CardButton
  }
};
</script>
