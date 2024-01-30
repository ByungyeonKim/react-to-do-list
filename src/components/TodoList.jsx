import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
  if (!todos.length) return <p>오늘은 비어있어요.</p>;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}
