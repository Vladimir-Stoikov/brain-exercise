import { useState } from 'react';
import { COLORS, getRandomColor } from './utils/stroopData';
import StroopWord from './components/StroopWord';
import StroopControls from './components/StroopControls';

export default function StroopGame() {
  const [round, setRound] = useState(createRound);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [streak, setStreak] = useState(0);

  function createRound() {
    return {
      word: getRandomColor(),
      textColor: getRandomColor(),
    };
  }

  function handleAnswer(color: string) {
    if (result) return;

    if (color === round.textColor.value) {
      setResult('correct');
      setCorrectCount(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setResult('wrong');
      setWrongCount(prev => prev + 1);
      setStreak(0);
    }
  }

  function nextRound() {
    setRound(createRound());
    setResult(null);
  }

  return (
    <div>
      <StroopWord text={round.word.name} color={round.textColor.value} />

      <StroopControls colors={COLORS} onSelect={handleAnswer} disabled={result !== null} />

      {result && (
        <>
          {result === 'correct' && <p style={{ color: 'green' }}>Верно</p>}

          {result === 'wrong' && <p style={{ color: 'red' }}>Ошибка</p>}

          <button onClick={nextRound}>Next</button>
        </>
      )}
      <div style={{ marginBottom: '1rem' }}>
        <span>✔ {correctCount}</span> <span>✖ {wrongCount}</span> <span>🔥 серия: {streak}</span>
      </div>
    </div>
  );
}
