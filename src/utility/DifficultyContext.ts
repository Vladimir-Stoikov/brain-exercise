import { createContext } from 'react';

export const DifficultyContext = createContext({
  difficulty: '',
  setDifficulty: () => {}
});