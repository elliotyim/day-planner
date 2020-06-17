<template>
  <v-card class="mx-3 mt-5 wrapper" style="backgroundColor: #f8f8f8;" raised>
    <v-container>
      <v-row>
        <v-col>
          <div class="d-flex flex-column">
            <CardTitle title="Todos" class="mb-3 text-center" />
            <div class="list-group">
              <span class="todo my-2 text-center">
                <v-row class="ml-1">
                  <v-col class="my-auto" :cols="3">
                    <v-btn @click="submit">submit</v-btn>
                  </v-col>
                  <v-col :cols="9">
                    <v-text-field
                      v-model="text"
                      class="d-inline-flex pt-0"
                      @blur="scrollToTop"
                    />
                  </v-col>
                </v-row>
              </span>
            </div>

            <draggable :list="list" class="list-group" handle=".handle">
              <div
                class="todo mb-2"
                v-for="element in list"
                :key="element.objectID"
              >
                <v-row class="ml-1">
                  <v-col class="my-auto" :cols="2">
                    <v-icon class="handle">fa-align-justify</v-icon>
                  </v-col>
                  <v-col class="my-auto" :cols="2">
                    <v-icon>{{ Icon.CHECK_CIRCLE }}</v-icon>
                  </v-col>
                  <v-col :cols="8">
                    <v-text-field
                      v-model="element.title"
                      class="d-inline-flex pt-0"
                      @blur="scrollToTop"
                      hide-details
                    />
                  </v-col>
                </v-row>
              </div>
            </draggable>

            <infinite-loading @infinite="infiniteHandler">
              <div slot="spinner">Loading...</div>
            </infinite-loading>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import draggable from "vuedraggable";
import Icon from "@/common/constants/icon";
import todos from "@/common/fixtures/todos";
import axios from "axios";
import CardTitle from "@/components/card/CardTitle";

const api = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
  name: "CommunityView",
  components: {
    draggable,
    CardTitle
  },
  data() {
    return {
      Icon: Icon,
      page: 1,
      list: [],
      text: "",
      id: 100
    };
  },
  computed: {
    myArray() {
      return todos;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    submit() {
      // temporarily implemented
      this.list.unshift({ objectID: this.id++, title: this.text });
    },
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (data.hits.length) {
            this.page += 1;
            this.list.push(...data.hits);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow-y: scroll;
  margin-bottom: 64px;
}
.list-group {
  display: flex;
  flex-direction: column;
}
.todo {
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
}
.overflow-auto {
  overflow-y: auto;
}
</style>
