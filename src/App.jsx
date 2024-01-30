import { useState } from 'react';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

function App() {
  // {
  //   id: '',
  //   title: '',
  //   contents: '',
  //   isDone: false,
  // }
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>오늘의 할 일 목록</h1>
      <TodoForm />
      <h2>오늘 할 일</h2>
      <TodoList todos={todos} />
      <h2>완료한 일</h2>
      <TodoList todos={todos} />
      <Footer />
    </>
  );
}

export default App;
