import { useState, useEffect } from 'react';

export function useTouchTyping(text: string) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted || isFinished) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, isFinished]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    if (!isStarted) {
      setIsStarted(true);
    }

    const expectedChar = text[currentIndex];

    if (e.key === expectedChar) {
      setCurrentIndex((prev) => {
        const next = prev + 1;

        if (next === text.length) {
          setIsFinished(true);
        }

        return next;
      });
    }

    e.preventDefault();
  };

  return {
    currentIndex,
    isFinished,
    time,
    handleKeyDown,
  };
}
