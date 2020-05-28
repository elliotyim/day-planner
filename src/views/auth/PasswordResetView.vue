<template>
  <CardBackground>
    <CardTitle title="Reset Password" options="pa-5" />

    <CardContent options="mx-5">
      <p><strong>Insert email address you registered.</strong></p>
    </CardContent>

    <CardTextField type="email" label="Email" color="#739F90" options="mx-5" />

    <CardButton
      name="Reset Password"
      options="mx-5 py-5"
      color="#739F90"
      link
      to="/result/password-reset-email/"
      outlined
      block
    />
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CardContent from "@/components/card/CardContent";
import CardTextField from "@/components/card/CardTextField";
import CardButton from "@/components/card/CardButton";

export default {
  name: "PasswordResetView",
  components: {
    CardBackground,
    CardTitle,
    CardContent,
    CardTextField,
    CardButton
  }
};
</script>
