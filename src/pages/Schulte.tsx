import { useContext, useState } from 'react';
import SchulteGrid from '../features/schulte/components/SchulteGrid';
import { DifficultyContext } from '../utility/DifficultyContext';

type DifficultyType = {
  [key: string]: number;
};

const difficultyValues: DifficultyType = {
  easy: 24,
  medium: 48,
  hard: 80,
  veryHard: 120,
};

export default function Schulte() {
  const [gameId, setGameId] = useState(0);
  const handleRestart = () => setGameId(prev => prev + 1);

  const { difficulty } = useContext(DifficultyContext);

  const gridArr = [...Array(difficultyValues[difficulty]).keys()].map(cell => cell + 1);

  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid key={gameId} grid={gridArr} onRestart={handleRestart} />
    </section>
  );
}
