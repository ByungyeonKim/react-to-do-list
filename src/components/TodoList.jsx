import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleIsDone, onDeleteTodo }) {
  if (!todos.length) return <p className='py-3'>오늘은 비어있어요.</p>;

  return (
    <ul className='grid gap-5 grid-cols-2'>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              toggleIsDone={toggleIsDone}
              onDeleteTodo={onDeleteTodo}
            />
          </li>
        );
      })}
    </ul>
  );
}
