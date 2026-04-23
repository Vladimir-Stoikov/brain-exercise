type Difficulty = 'easy' | 'medium' | 'hard' | 'veryHard';

const subjects = [
  'The cat',
  'A dog',
  'The programmer',
  'My friend',
  'The teacher',
  'A student',
];

const verbs = [
  'writes',
  'reads',
  'builds',
  'creates',
  'tests',
  'fixes',
];

const objects = [
  'a program',
  'the code',
  'a new app',
  'the system',
  'a solution',
  'a project',
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getWordsByDifficulty(difficulty: Difficulty) {
  switch (difficulty) {
    case 'easy':
      return easyWords;
    case 'medium':
      return mediumWords;
    case 'hard':
      return hardWords;
    case 'veryHard':
      return [...hardWords, 'synchronization', 'transformation', 'architecture'];
  }
}

export function generateSentence(): string {
  const subject = getRandom(subjects);
  const verb = getRandom(verbs);
  const object = getRandom(objects);

  return `${subject} ${verb} ${object}.`;
}


export function generateText(difficulty: Difficulty) {
  let count = 2;

  if (difficulty === 'medium') count = 3;
  if (difficulty === 'hard') count = 4;
  if (difficulty === 'veryHard') count = 5;

  return Array.from({ length: count })
    .map(() => generateSentence(difficulty))
    .join(' ');
}