import { stat } from "fs/promises";

function addNewTodoItem(state) {
  return (newItem) => {
    state.update((state) => {
      return {
        ...state,
        todoList: [...state.todoList, newItem],
      };
    });
  };
}
function delteTodoItem(state) {
  return (item) => {
    state.update((state) => {
      return {
        ...state,
        todoList: state.todoList.filter((e) => e.id !== item.id),
      };
    });
  };
}
export function createAction(state) {
  return {
    addNewTodoItem: addNewTodoItem(state),
    delteTodoItem: delteTodoItem(state),
  };
}
