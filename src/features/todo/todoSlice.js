import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchTodo = createAsyncThunk('todo/refetchTodo', async () => {
  const res = await fetch(`${process.env.REACT_APP_JSON_BASE_URL}/todos`);
  const data = await res.json();

  return data;
});

const createTodo = createAsyncThunk(
  'todo/createTodo',
  async ({ title, content }) => {
    const todo = {
      id: crypto.randomUUID(),
      title,
      contents: content,
      isDone: false,
    };

    const res = await fetch(`${process.env.REACT_APP_JSON_BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await res.json();

    return data;
  }
);

const editIsDone = createAsyncThunk('todo/editIsDone', async (todo) => {
  const res = await fetch(
    `${process.env.REACT_APP_JSON_BASE_URL}/todos/${todo.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isDone: !todo.isDone,
      }),
    }
  );
  const data = await res.json();

  return data;
});

const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoId) => {
  await fetch(`${process.env.REACT_APP_JSON_BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });

  return todoId;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    initTodos(state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.fulfilled, (state, action) => {
      const todo = action.payload;

      state.todos.push(todo);
    });
    builder.addCase(editIsDone.fulfilled, (state, action) => {
      const payloadTodo = action.payload;
      const newTodos = state.todos.map((todo) => {
        if (todo.id === payloadTodo.id) {
          return payloadTodo;
        }

        return todo;
      });

      state.todos = newTodos;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const todoId = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== todoId);

      state.todos = filteredTodos;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { initTodos } = todoSlice.actions;
export { fetchTodo, createTodo, editIsDone, deleteTodo, todoSlice };
