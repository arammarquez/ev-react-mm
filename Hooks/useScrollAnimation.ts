// useScrollAnimation.ts
import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationHookResult {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

function useScrollAnimation(): ScrollAnimationHookResult {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        setIsVisible(rect.top <= windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, isVisible };
}

export default useScrollAnimation;
