import { useEffect, useState } from 'react';

export function useToast(duration: number) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + (100 / (duration / 100)), 100));
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [duration]);

  return { isVisible, progress };
}