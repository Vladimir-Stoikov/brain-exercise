import { WORD_POOLS, type DifficultyWords } from './wordPools';

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateSentence(difficulty: DifficultyWords) {
  const pool = WORD_POOLS[difficulty];

  return `${getRandom(pool.subjects)} ${getRandom(pool.verbs)} ${getRandom(pool.objects)}.`;
}


export function generateText(difficulty: DifficultyWords) {
  let count = 2;

  if (difficulty === 'medium') count = 3;
  if (difficulty === 'hard') count = 4;
  if (difficulty === 'veryHard') count = 5;

  return Array.from({ length: count })
    .map(() => generateSentence(difficulty))
    .join(' ');
}