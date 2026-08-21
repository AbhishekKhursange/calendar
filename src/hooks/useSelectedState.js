import { useState, useEffect } from "react";

const STORAGE_KEY = "festicals_selected_state";

export default function useSelectedState() {
  const [selectedState, setSelectedStateInternal] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (selectedState) {
      try {
        localStorage.setItem(STORAGE_KEY, selectedState);
      } catch {
        // localStorage unavailable — state just won't persist across sessions
      }
    }
  }, [selectedState]);

  const setSelectedState = (state) => setSelectedStateInternal(state);
  const clearSelectedState = () => {
    setSelectedStateInternal(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* no-op */
    }
  };

  return { selectedState, setSelectedState, clearSelectedState };
}