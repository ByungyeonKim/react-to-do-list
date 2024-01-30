export function TodoForm() {
  return (
    <section>
      <label>
        제목
        <input
          type='text'
          onChange={() => console.log('Changed!')}
          value={''}
        />
      </label>

      <label>
        내용
        <input
          type='text'
          onChange={() => console.log('Changed!')}
          value={''}
        />
      </label>

      <button type='button' onClick={() => console.log('Click!')}>
        추가
      </button>
    </section>
  );
}
