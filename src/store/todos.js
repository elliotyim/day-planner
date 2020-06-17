import todos from "@/common/fixtures/todos";

export default {
  state: () => ({
    todos: todos
  }),
  mutations: {},
  actions: {},
  getters: {
    getTodos: state => {
      return state.todos;
    }
  }
};
