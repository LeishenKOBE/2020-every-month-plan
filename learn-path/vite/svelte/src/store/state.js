import { writable } from "svelte/store";

const state = {
  todoList: [
    {
      id: 0,
      done: false,
      content: "your first todo",
    },
  ],
};

export const createStore = () => {
  return writable(state);
};
