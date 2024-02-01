export function TodoItem({ todo, toggleIsDone }) {
  const { id, title, contents, isDone } = todo;

  return (
    <section>
      <b>{title}</b>
      <p>{contents}</p>
      <button onClick={() => toggleIsDone(id)}>
        {isDone ? '취소' : '완료'}
      </button>
      <button>삭제</button>
    </section>
  );
}
