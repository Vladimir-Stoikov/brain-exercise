import { useState, useEffect } from 'react';

export function useTouchTyping(text: string) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [errors, setErrors] = useState<Set<number>>(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [corrected, setCorrected] = useState<Set<number>>(new Set());
  const [correctedCount, setCorrectedCount] = useState(0);
  const [mistyped, setMistyped] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isStarted || isFinished) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, isFinished]);

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (isFinished) return;

  if (e.key === 'Backspace') {
  if (currentIndex === 0) return;

  const prevIndex = currentIndex - 1;
  const wasError = errors.has(prevIndex);

  setCurrentIndex(prevIndex);

  setErrors((prev) => {
    const copy = new Set(prev);
    copy.delete(prevIndex);
    return copy;
  });

  if (wasError) {
    setWrongCount((prev) => Math.max(0, prev - 1));
  } else {
    setCorrectCount((prev) => Math.max(0, prev - 1));
  }

  return;
  }

  if (e.key.length !== 1) return;

  if (!isStarted) {
    setIsStarted(true);
  }

  const expectedChar = text[currentIndex];
  const isCorrect = e.key === expectedChar;

  const alreadyError = errors.has(currentIndex);

  if (isCorrect) {
    const wasMistyped = mistyped.has(currentIndex);

    if (wasMistyped) {
      setCorrected((prev) => {
        const copy = new Set(prev);
        copy.add(currentIndex);
        return copy;
      });

      setCorrectedCount((prev) => prev + 1);
    }

    setCorrectCount((prev) => prev + 1);
} else {
  if (!alreadyError) {
    setWrongCount((prev) => prev + 1);
  }

  setErrors((prev) => {
    const copy = new Set(prev);
    copy.add(currentIndex);
    return copy;
  });

  setMistyped((prev) => {
    const copy = new Set(prev);
    copy.add(currentIndex);
    return copy;
  });
}

  setCurrentIndex((prev) => {
    const next = prev + 1;

    if (next === text.length) {
      setIsFinished(true);
    }

    return next;
  });

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
    corrected,
    correctedCount,
    handleKeyDown,
  };
}
