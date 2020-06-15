import dateManager from "@/common/fixtures/dateManager";

export default {
  state: () => ({
    dates: [],
    colors: ["red", "green", "blue", "purple", "yellow"],
    marks: [
      {
        color: 0,
        icon: "circle",
        label: "Coding"
      },
      {
        color: 1,
        icon: "check",
        label: "Workout"
      },
      {
        color: 2,
        icon: "star",
        label: "Reading Books"
      },
      {
        color: 3,
        icon: "square",
        label: "Math"
      },
      {
        color: 4,
        icon: "cross",
        label: "Homework"
      }
    ]
  }),
  mutations: {
    refreshDates: (state, response) => {
      state.dates = response.map(d => {
        return {
          dot: { color: state.colors[d.color] },
          popover: { label: d.label },
          dates: d.dates
        };
      });
    }
  },
  actions: {
    fetchDates: async context => {
      const response = await dateManager.get();
      context.commit("refreshDates", response);
    },
    addDate: async ({ dispatch }, date) => {
      await dateManager.post(date);
      await dispatch("fetchDates");
    },
    removeDate: async ({ dispatch }, payload) => {
      await dateManager.deleteDate(payload);
      await dispatch("fetchDates");
    }
  },
  getters: {
    getDates: state => {
      return state.dates;
    },
    getColors: state => {
      return state.colors;
    },
    getMarks: state => {
      return state.marks;
    }
  }
};
