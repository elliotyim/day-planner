<template>
  <v-content class="d-flex unselectable">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" raised>
            <div id="row">
              <slot></slot>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "CardBackground"
};
</script>
