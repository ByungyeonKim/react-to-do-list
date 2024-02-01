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

    onAddTodos(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={(e) => addTodo(e)}>
      <label>
        제목
        <input
          type='text'
          onChange={(e) => handleTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        내용
        <input
          type='text'
          onChange={(e) => handleContent(e.target.value)}
          value={content}
        />
      </label>

      <button>추가</button>
    </form>
  );
}
