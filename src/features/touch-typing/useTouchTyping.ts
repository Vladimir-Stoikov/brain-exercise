import { useState, useEffect } from 'react';

export function useTouchTyping(text: string) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [errors, setErrors] = useState<Set<number>>(new Set());

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
  } else {
    setErrors((prev) => {
      const copy = new Set(prev);
      copy.add(currentIndex);
      return copy;
    });
  }

  e.preventDefault();
};

  return {
    currentIndex,
    isFinished,
    time,
    errors,
    handleKeyDown,
  };
}
