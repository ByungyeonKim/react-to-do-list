export function TodoItem({ todo }) {
  return (
    <section>
      <b>{todo.title}</b>
      <p>{todo.contents}</p>
    </section>
  );
}
