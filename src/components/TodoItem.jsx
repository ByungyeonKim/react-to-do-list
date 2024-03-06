import { useDispatch } from 'react-redux';
import { deleteTodo, editIsDone } from '../features/todo/todoSlice';

export function TodoItem({ todo }) {
  const { id, title, contents, isDone } = todo;
  const dispatch = useDispatch();

  const toggleIsDone = async (todo) => {
    dispatch(editIsDone(todo));
  };

  const onDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <section className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <b className='card-title text-xl'>{title}</b>
        <p className='text-sm'>{contents}</p>
        <div className='flex gap-2 justify-end'>
          <button
            className='btn btn-primary btn-outline'
            onClick={() => toggleIsDone(todo)}
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
