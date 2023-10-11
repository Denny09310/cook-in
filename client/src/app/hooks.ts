import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { useAsync } from 'react-use';

import type { RootState, AppDispatch } from './store';
import storage from './storage';
import React, { useEffect, useState } from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStorageValue = <T>(key: string, fallbackValue?: T) => {
  const { value, loading } = useAsync(() => storage.get(key));

  return { loading, value: loading ? fallbackValue : (value as T) };
};

export const useStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState(defaultValue);

  const { loading } = useAsync(async () => {
    const value = await storage.get(key);
    if (value) setValue(value);
  });

  useEffect(() => {
    storage.set(key, value);
  }, [value]);

  return {
    loading,
    state: [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>],
  };
};
