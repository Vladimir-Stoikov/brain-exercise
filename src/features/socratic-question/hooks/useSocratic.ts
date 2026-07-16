import { useState } from 'react';
import { questions } from '../data/questions';

export function useSocratic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const currentQuestion = questions[currentIndex];

  function submitAnswer(answer: string) {
    setAnswers(prev => [...prev, answer]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setAnswers([]);
  }

  return {
    currentQuestion,
    currentIndex,
    answers,
    submitAnswer,
    restart,
    isFinished: currentIndex >= questions.length,
  };
}