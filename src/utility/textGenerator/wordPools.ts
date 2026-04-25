export type DifficultyWords = 'easy' | 'medium' | 'hard' | 'veryHard';

type WordPools = {
  subjects: string[];
  verbs: string[];
  objects: string[];
};

const easy: WordPools = {
  subjects: [
    'The cat',
    'A dog',
    'A boy',
    'A girl',
    'The sun',
    'The bird',
  ],
  verbs: [
    'likes',
    'sees',
    'finds',
    'takes',
    'has',
    'wants',
  ],
  objects: [
    'a ball',
    'a toy',
    'a book',
    'a car',
    'some food',
    'a friend',
  ],
};

const medium: WordPools = {
  subjects: [
    'The programmer',
    'A student',
    'The teacher',
    'My friend',
    'The designer',
    'An engineer',
  ],
  verbs: [
    'writes',
    'reads',
    'builds',
    'creates',
    'tests',
    'fixes',
    'improves',
    'updates',
  ],
  objects: [
    'a program',
    'the code',
    'a new app',
    'the system',
    'a solution',
    'a project',
    'a feature',
    'the interface',
  ],
};

const hard: WordPools = {
  subjects: [
    'The developer',
    'The architect',
    'The researcher',
    'The analyst',
    'The scientist',
  ],
  verbs: [
    'analyzes',
    'implements',
    'optimizes',
    'integrates',
    'refactors',
  ],
  objects: [
    'the application architecture',
    'complex algorithms',
    'the database structure',
    'performance issues',
    'scalable systems',
  ],
};

const veryHard: WordPools = {
  subjects: [
    'The senior developer',
    'The software architect',
    'The data scientist',
  ],
  verbs: [
    'carefully analyzes',
    'systematically refactors',
    'efficiently implements',
  ],
  objects: [
    'a highly scalable distributed system',
    'a complex data processing pipeline',
    'an advanced machine learning model',
  ],
};

export const WORD_POOLS: Record<Difficulty, WordPools> = {
  easy,
  medium,
  hard,
  veryHard,
};