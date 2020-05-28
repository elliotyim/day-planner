<template>
  <CardBackground>
    <CardTitle :title="title" options="mx-5 py-5" />

    <CardContent options="mx-5">
      <p>
        <strong>{{ message }}</strong>
      </p>
    </CardContent>

    <CardButton
      name="Return to Sign in Page"
      options="mx-5 py-5"
      color="#739F90"
      link
      to="/signin/"
      outlined
      block
    />
  </CardBackground>
</template>

<script>
import CardBackground from "@/components/card/CardBackground";
import CardTitle from "@/components/card/CardTitle";
import CardContent from "@/components/card/CardContent";
import CardButton from "@/components/card/CardButton";

export default {
  name: "ResultView",
  props: {
    state: String
  },
  methods: {
    print(...messages) {
      if (this.state === "registration-success") return messages[0];
      else if (this.state === "password-reset-email") return messages[1];
      else return messages[2];
    }
  },
  computed: {
    title() {
      return this.print("Success!", "Email sent!", "Bad Access!");
    },
    message() {
      return this.print(
        "Registration completed successfully!",
        "We've sent a reset password to your registered email. Please check the email.",
        "The requested URL was not found on this server."
      );
    }
  },
  components: {
    CardBackground,
    CardTitle,
    CardContent,
    CardButton
  }
};
</script>

<style></style>
