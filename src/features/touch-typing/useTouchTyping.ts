import { useState, useEffect } from 'react';

export function useTouchTyping(text: string) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [errors, setErrors] = useState<Set<number>>(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

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

    setCorrectCount((prev) => prev + 1);

    setCurrentIndex((prev) => {
      const next = prev + 1;

      if (next === text.length) {
        setIsFinished(true);
      }

      return next;
    });
  } else {
    setWrongCount((prev) => prev + 1);

    setErrors((prev) => {
      const copy = new Set(prev);
      copy.add(currentIndex);
      return copy;
    });
  }

  e.preventDefault();
};

const totalPressed = correctCount + wrongCount;

const accuracy =
  totalPressed === 0
    ? 100
    : Math.round((correctCount / totalPressed) * 100);

  return {
    currentIndex,
    isFinished,
    time,
    errors,
    accuracy,
    correctCount,
    wrongCount,
    handleKeyDown,
  };
}
