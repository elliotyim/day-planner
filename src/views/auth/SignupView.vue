<template>
  <CardBackground>
    <CardTitle title="Sign Up" options="mx-5 py-3" />

    <CardTextField type="text" label="Name" color="#739F90" options="mx-5" />
    <CardTextField type="email" label="Email" color="#739F90" options="mx-5" />
    <CardTextField
      type="password"
      color="#739F90"
      label="Password"
      options="mx-5"
    />
    <CardTextField
      type="password"
      color="#739F90"
      label="Repeat Password"
      options="mx-5"
    />

    <CardButton
      name="Sign Up"
      options="mx-5 py-5"
      color="#739F90"
      link
      to="/result/registration-success/"
      outlined
      block
    />
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CardTextField from "@/components/card/CardTextField";
import CardButton from "@/components/card/CardButton";

export default {
  name: "SignupView",
  components: {
    CardBackground,
    CardTitle,
    CardTextField,
    CardButton
  }
};
</script>
