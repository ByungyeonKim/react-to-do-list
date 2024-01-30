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

  const handleAddTodo = () => {
    onAddTodos(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <section>
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

      <button type='button' onClick={handleAddTodo}>
        추가
      </button>
    </section>
  );
}
