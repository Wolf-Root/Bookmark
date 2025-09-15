import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Detect
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (scrollBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      // Detect sections
      let currentId = "";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentId = id;
            break;
          }
        }
      }
      setActiveId(currentId || ids[0]); // Default to home
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
