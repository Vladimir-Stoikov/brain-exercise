import { useContext } from 'react';
import { DifficultyContext } from '../utility/DifficultyContext';
import { DifficultyWrapper, DifficultyButton } from './styled-components/DifficultySwitch.styled';

const DIFFICULTIES = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'veryHard', label: 'Very Hard' },
];

export default function DifficultySwitch() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  return (
    <DifficultyWrapper>
      {DIFFICULTIES.map(d => (
        <DifficultyButton key={d.value} $active={difficulty === d.value} onClick={() => setDifficulty(d.value)}>
          {d.label}
        </DifficultyButton>
      ))}
    </DifficultyWrapper>
  );
}
