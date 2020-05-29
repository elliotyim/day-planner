<template>
  <CardBackground>
    <CardTitle :title="title" options="mx-5 py-3" />

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
  components: {
    CardBackground,
    CardTitle,
    CardContent,
    CardButton
  },
  data() {
    return {
      messages: [
        {
          title: "Registration Success!",
          content: "Registration completed successfully!"
        },
        {
          title: "Email Sent!",
          content: `We've sent a reset password to your registered email.
          Please check the email.`
        },
        {
          title: "Bad Access!",
          content: "The requested URL was not found on this server."
        }
      ]
    };
  },
  props: {
    page: String
  },
  methods: {
    print(messages) {
      if (this.page === "registration-success") return messages[0];
      else if (this.page === "password-reset") return messages[1];
      else return messages[2];
    }
  },
  computed: {
    title() {
      return this.print(this.messages.map(m => m.title));
    },
    message() {
      return this.print(this.messages.map(m => m.content));
    }
  }
};
</script>
