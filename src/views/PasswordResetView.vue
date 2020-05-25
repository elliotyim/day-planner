<template>
  <v-content class="d-flex unselectable">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" raised>
            <div id="row" class="py-1">
              <div id="col">
                <h1 id="password-reset-text" class="ma-5">Password Reset</h1>
              </div>
              <div id="col" class="mx-5">
                <p><strong>Insert email address you registered.</strong></p>
              </div>
              <div id="col" class="mx-5">
                <v-text-field
                  type="email"
                  label="Email"
                  color="#739F90"
                ></v-text-field>
              </div>
              <div id="col" class="mx-5">
                <v-btn class="my-5 mr-2" color="#739F90" outlined block
                  >Send Email</v-btn
                >
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "PasswordResetView"
};
</script>

<style scoped>
#password-reset-text {
  color: #739f90;
}
</style>
