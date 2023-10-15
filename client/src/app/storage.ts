import { Storage } from '@ionic/storage';
import { useState, useEffect } from 'react';
import { useAsync } from 'react-use';

const storage = new Storage();
storage.create();

export const useStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState(defaultValue);

  const { loading } = useAsync(async () => {
    const value = await storage.get(key);
    if (value) setValue(value);
  }, [key]);

  useEffect(() => {
    storage.set(key, value);
  }, [value]);

  return {
    loading,
    state: [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>],
  };
};

export const useStorageValue = <T>(key: string, fallbackValue?: T) => {
  const {
    loading,
    state: [value],
  } = useStorage(key, fallbackValue);
  return { loading, value };
};

export const useStorageSetter = <T>(key: string, defaultValue?: T) => {
  const {
    loading,
    state: [, setValue],
  } = useStorage(key, defaultValue);
  return { loading, setValue };
};

export default storage;
