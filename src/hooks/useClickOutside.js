import { useEffect, useCallback } from "react";

export default function useClickOutside(ref, callback) {
  const handleClick = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }, [ref, callback]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);
}
