import { useState } from 'react';
import { COLORS, getRandomColor } from './utils/stroopData';
import StroopWord from './components/StroopWord';
import StroopControls from './components/StroopControls';

export default function StroopGame() {
  const [word] = useState(getRandomColor);
  const [textColor] = useState(getRandomColor);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  function handleAnswer(color: string) {
    if (color === textColor.value) {
      setResult('correct');
    } else {
      setResult('wrong');
    }
  }

  return (
    <div>
      <StroopWord text={word.name} color={textColor.value} />

      <StroopControls colors={COLORS} onSelect={handleAnswer} />

      {result === 'correct' && <p style={{ color: 'green' }}>Correct</p>}
      {result === 'wrong' && <p style={{ color: 'red' }}>Error</p>}
    </div>
  );
}
