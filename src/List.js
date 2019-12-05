import React, { useState } from 'react';
import { useInteractiveList } from './hooks';

export default ({ items }) => {
  const { addItem, removeItem, list } = useInteractiveList(items);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        addItem(inputValue);
        setInputValue('');
      }}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li onClick={() => removeItem(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}
