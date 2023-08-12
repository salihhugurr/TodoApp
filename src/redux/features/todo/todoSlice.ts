import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoState = {
  todos: [
    {
      info: "Todo App Yapılacak",
      date: new Date("2023-08-11"),
      startTime: new Date("2023-08-11T08:00:00"),
      endTime: new Date("2023-08-11T10:00:00"),
      completed: true,
      categories: ["Coding", "UI", "React Native"],
      description: "React Native ile Todo App yapma",
    },
    {
      info: "Kişisel websitesi oluşturma",
      date: new Date("2023-08-11"),
      startTime: new Date("2023-08-11T08:00:00"),
      endTime: new Date("2023-08-11T10:00:00"),
      completed: false,
      categories: ["Coding", "UI", "React"],
      description: "Next JS ile kişisel websitesi oluşturma.",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodoCompleted: (state, action) => {
      const { index, completed } = action.payload;
      const todoToUpdate = state.todos.find((_, i) => i === index);
      if (todoToUpdate) {
        todoToUpdate.completed = completed;
      }
    },
    deleteTodos: (state) => {
      state.todos = [];
    },
    deleteTodo: (state,action) => {
      const {todoObject} = action.payload;
      let index = state.todos.findIndex((todo) => todo === todoObject)
      state.todos.splice(index, 1);
    }
  },
});

export const { addTodo,updateTodoCompleted,deleteTodos,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
