import { useState, useEffect } from "react";

const useScrollbar = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScroll(Math.round(percent))
    } 

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return { scroll };
}

export { useScrollbar };
export default useScrollbar;