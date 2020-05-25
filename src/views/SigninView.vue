<template>
  <v-content class="d-flex unselectable">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" raised>
            <div id="row" class="py-1">
              <div id="col">
                <h1 id="signin-text" class="ma-5">Sign In</h1>
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
                <v-btn class="my-5 mr-2" color="#739F90" outlined block
                  >Sign In</v-btn
                >
              </div>
              <div id="col" class="mx-5">
                <v-btn class="mt-5 mb-1 mr-2" color="#DB4437" block dark>
                  <v-icon dark left>mdi-google</v-icon> Log in with
                  Google</v-btn
                >
                <v-btn class="mt-1 mb-5 mr-2" color="#211F1F" block dark
                  ><v-icon dark left>mdi-github</v-icon> Log in with
                  Github</v-btn
                >
              </div>
              <div id="col" class="mx-5">
                <v-row>
                  <v-col class="text-left">
                    <v-btn link to="/register/" text color="#739F90"
                      >Sign Up</v-btn
                    >
                  </v-col>
                  <v-col class="text-right">
                    <v-btn link to="/password-reset/" text color="#739F90"
                      >Forgot Password?</v-btn
                    >
                  </v-col>
                </v-row>
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
  name: "SigninView"
};
</script>

<style scoped>
#signin-text {
  color: #739f90;
}
</style>
