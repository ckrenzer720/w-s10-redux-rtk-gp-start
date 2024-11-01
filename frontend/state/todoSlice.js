import { createSlice } from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: getNextId(), label: 'Laundry', complete: true },
      { id: getNextId(), label: 'Groceries', complete: false },
      { id: getNextId(), label: 'Dishes', complete: false },
    ],
    showCompletedTodos: true,
  },
  reducers: {
    createNewTodo: {
      prepare(label, complete) {
        return { payload: { id: getNextId(), label, complete }}
      },
      reducer(state, action) {
        state.todos.push(action.payload)
      }
    },
    toggleShowCompletedTodos: state => {
      state.showCompletedTodos = !state.showCompletedTodos // < -- ACTION CREATOR IS THIS FUNCTION INSIDE THE REDUCER
    },
    toggleTodo: (state, action) => {
      let todo = state.todos.find(td => td.id === action.payload)
      todo.complete = !todo.complete
    },
  }
});

export const {
  createNewTodo,
  toggleTodo,
  toggleShowCompletedTodos,
} = todosSlice.actions // <-- becomes the click handler and dispatches as a function
export default todosSlice.reducer;
