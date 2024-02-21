export function TodoItem({ todo, toggleIsDone, onDeleteTodo }) {
  const { id, title, contents, isDone } = todo;

  return (
    <section className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <b className='card-title text-xl'>{title}</b>
        <p className='text-sm'>{contents}</p>
        <div className='flex gap-2 justify-end'>
          <button
            className='btn btn-primary btn-outline'
            onClick={() => toggleIsDone(id)}
          >
            {isDone ? '취소' : '완료'}
          </button>
          <button className='btn btn-outline' onClick={() => onDeleteTodo(id)}>
            삭제
          </button>
        </div>
      </div>
    </section>
  );
}
