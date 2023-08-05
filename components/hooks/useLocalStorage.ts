import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  /*   const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.getItem(key)
  } */
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    /*   const jsonValue =localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    } */
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const /* [typeof value, typeof setValue] */;
}
