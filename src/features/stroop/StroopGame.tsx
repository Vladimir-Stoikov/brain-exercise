import { useState } from 'react';
import { COLORS, getRandomColor } from './utils/stroopData';
import StroopWord from './components/StroopWord';
import StroopControls from './components/StroopControls';

export default function StroopGame() {
  const [round, setRound] = useState(createRound);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  function createRound() {
    return {
      word: getRandomColor(),
      textColor: getRandomColor(),
    };
  }

  function handleAnswer(color: string) {
    if (color === round.textColor.value) {
      setResult('correct');
    } else {
      setResult('wrong');
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
    </div>
  );
}
