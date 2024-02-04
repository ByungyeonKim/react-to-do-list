import { useState } from 'react';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const onAddTodos = (title, contents) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };
  const toggleIsDone = (todoId) => {
    let newTodo = null;
    let newTodos = [];

    todos.forEach((todo) => {
      if (todo.id === todoId) {
        newTodo = {
          ...todo,
          isDone: !todo.isDone,
        };
        return;
      }
      newTodos.push(todo);
    });

    setTodos([...newTodos, newTodo]);
  };
  const onDeleteTodo = (todoId) => {
    const deletedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(deletedTodos);
  };

  const doingList = [];
  const doneList = [];

  // 비싼/무거운 연산이 아니기 때문에, filter 메서드로 각각 배열을 생성해도 됨.
  todos.forEach((todo) =>
    todo.isDone ? doneList.push(todo) : doingList.push(todo)
  );

  return (
    <>
      <h1>오늘의 할 일 목록</h1>
      <TodoForm onAddTodos={onAddTodos} />
      <h2>오늘 할 일</h2>
      <TodoList
        todos={doingList}
        toggleIsDone={toggleIsDone}
        onDeleteTodo={onDeleteTodo}
      />
      <h2>완료한 일</h2>
      <TodoList
        todos={doneList}
        toggleIsDone={toggleIsDone}
        onDeleteTodo={onDeleteTodo}
      />
      <Footer />
    </>
  );
}

export default App;
