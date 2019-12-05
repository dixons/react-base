import { useState } from 'react';

export const useInteractiveList = (initialItems) => {
  const [list, setList] = useState(initialItems);

  return {
    removeItem: (index) => setList(list.filter((item, i) => i !== index)),
    addItem: (item) => setList([...list, item]),
    list
  }
};
