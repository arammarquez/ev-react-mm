// useScrollRotate.js
import { useState, useEffect } from 'react';

function useScrollRotate() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const rotationAmount = (scrollTop / pageHeight) * 360;
      setRotation(rotationAmount);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return rotation;
}

export default useScrollRotate;
