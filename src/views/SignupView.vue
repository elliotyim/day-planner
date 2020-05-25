<template>
  <v-content class="d-flex unselectable">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" raised>
            <div id="row" class="py-1">
              <div id="col">
                <h1 id="signup-text" class="ma-5">Sign Up</h1>
              </div>
              <div id="col" class="mx-5">
                <v-text-field
                  type="text"
                  label="Name"
                  color="#739F90"
                ></v-text-field>
              </div>
              <div id="col" class="mx-5">
                <v-text-field
                  type="email"
                  label="Email"
                  color="#739F90"
                ></v-text-field>
              </div>
              <div id="col" class="mx-5">
                <v-text-field
                  type="password"
                  label="Password"
                  color="#739F90"
                ></v-text-field>
              </div>
              <div id="col" class="mx-5">
                <v-text-field
                  type="password"
                  label="Password Comfirmation"
                  color="#739F90"
                ></v-text-field>
              </div>
              <div id="col" class="mx-5">
                <v-btn class="my-5 mr-2" color="#739F90" outlined block
                  >Sign Up</v-btn
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
  name: "SignupView"
};
</script>

<style>
#signup-text {
  color: #739f90;
}
</style>
