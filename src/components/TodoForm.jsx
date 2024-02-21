import { useState } from 'react';

export function TodoForm({ onAddTodos }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (value) => {
    setTitle(value);
  };

  const handleContent = (value) => {
    setContent(value);
  };

  const createTodo = async (newTodo) => {
    const res = await fetch(`${process.env.REACT_APP_JSON_BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) return;

    const json = await res.json();

    onAddTodos(json);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!content) {
      alert('내용을 입력해주세요.');
      return;
    }

    const newTodo = {
      title,
      contents: content,
      isDone: false,
    };

    createTodo(newTodo);
    setTitle('');
    setContent('');
  };

  return (
    <form
      className='card bg-base-100 shadow-xl p-14 gap-4'
      onSubmit={(e) => addTodo(e)}
    >
      <section className='flex gap-3 flex-wrap'>
        <label className='flex-1 basis-40'>
          <b>제목</b>
          <input
            type='text'
            className='input input-bordered w-full mt-2'
            onChange={(e) => handleTitle(e.target.value)}
            value={title}
          />
        </label>

        <label className='flex-1 basis-40'>
          <b>내용</b>
          <input
            type='text'
            className='input input-bordered w-full mt-2'
            onChange={(e) => handleContent(e.target.value)}
            value={content}
          />
        </label>
      </section>

      <button className='btn btn-outline btn-primary'>추가</button>
    </form>
  );
}
