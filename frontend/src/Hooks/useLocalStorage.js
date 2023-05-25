import { useState, useEffect } from 'react';

export default function useLocalStorage({ key, defaultValue }) {
  const [storage, setStorage] = useState(window.localStorage.getItem(key) || defaultValue);

  useEffect(() => {
    if (storage) {
      window.localStorage.setItem(key, storage);
    }
  }, [storage]);

  return [storage, setStorage];
}
