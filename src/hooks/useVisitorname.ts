import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "visitor_name";

/**
 * Tracks the visitor's self-reported name in localStorage.
 * `ready` flips to true once we've checked localStorage on the client,
 * so callers can avoid flashing the name gate before that check runs.
 */
export function useVisitorName() {
  const [name, setNameState] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setNameState(stored && stored.trim() ? stored : null);
    } catch {
      setNameState(null);
    }
    setReady(true);
  }, []);

  const setName = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {
      // localStorage unavailable (private mode, etc.) — keep it in memory only.
    }
    setNameState(trimmed);
  }, []);

  const clearName = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setNameState(null);
  }, []);

  return { name, ready, setName, clearName };
}