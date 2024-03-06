import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './features/todo/todoSlice';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const doingList = [];
  const doneList = [];

  // 비싼/무거운 연산이 아니기 때문에, filter 메서드로 각각 배열을 생성해도 됨.
  todosData.forEach((todo) =>
    todo.isDone ? doneList.push(todo) : doingList.push(todo)
  );

  return (
    <>
      <Header />
      <main>
        <section className='mx-auto max-w-screen-xl px-4 pb-8 sm:px-6'>
          <TodoForm />
          <h2 className='text-xl font-bold text-gray-900 sm:text-2xl py-3 mt-6'>
            오늘 할 일
          </h2>
          <TodoList todos={doingList} />
          <h2 className='text-xl font-bold text-gray-900 sm:text-2xl py-3 mt-6'>
            완료한 일
          </h2>
          <TodoList todos={doneList} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
