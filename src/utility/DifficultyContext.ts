import { createContext } from 'react';

export type DifficultyValues = 'easy' | 'medium' | 'hard' | 'veryHard';
export type Difficulty = {
  difficulty: DifficultyValues,
  setDifficulty: (d: DifficultyValues) => void;
};


export const DifficultyContext = createContext<Difficulty>({
  difficulty: 'medium',
  setDifficulty: () => {}
});