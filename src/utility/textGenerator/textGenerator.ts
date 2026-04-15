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

export function generateSentence(): string {
  const subject = getRandom(subjects);
  const verb = getRandom(verbs);
  const object = getRandom(objects);

  return `${subject} ${verb} ${object}.`;
}