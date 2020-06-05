import dateManager from "@/common/fixtures/dateManager";

const plans = {
  state: () => ({
    dates: [],
    color: {
      coding: "red",
      workout: "green",
      "reading books": "blue",
      math: "purple",
      homework: "yellow"
    },
    marks: [
      {
        iconName: "circle",
        label: "coding"
      },
      {
        iconName: "check",
        label: "workout"
      },
      {
        iconName: "star",
        label: "reading books"
      },
      {
        iconName: "square",
        label: "math"
      },
      {
        iconName: "cross",
        label: "homework"
      }
    ]
  }),
  mutations: {
    refreshDates: (state, dates) => {
      state.dates = dates;
    },
    addDate: (state, date) => {
      dateManager.post(date);
    },
    removeDate: (state, payload) => {
      dateManager.deleteDate(payload);
    }
  },
  actions: {
    refreshDates: async context => {
      const dates = await dateManager.get();
      context.commit("refreshDates", dates);
    }
  },
  getters: {
    getDates: state => {
      return state.dates;
    },
    getColor: state => {
      return state.color;
    },
    getMarks: state => {
      return state.marks;
    }
  }
};

export default plans;
