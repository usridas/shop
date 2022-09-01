import { useState, useEffect } from 'react';

export const useScreenResolution = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
  
    useEffect(() => {
      const windowResized = () => {
        setIsSmall(
          window.matchMedia(`screen and (max-width: 631px)`)
            .matches
        );
        setIsMedium(
          window.matchMedia(
            `screen and (min-width: 632px) and (max-width: 943px)`
          ).matches
        );
        setIsLarge(
          window.matchMedia(
            `screen and (min-width: 944px)`
          ).matches
        );
      };
  
      window.addEventListener('resize', windowResized);
      windowResized();
      return () => window.removeEventListener('resize', windowResized);
    }, []);
  
    return { isSmall, isMedium, isLarge };
  };