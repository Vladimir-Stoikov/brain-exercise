export interface SocraticQuestion {
  id: number;
  text: string;
}

export const questions: SocraticQuestion[] = [
  {
    id: 1,
    text: 'Why do you think this is true?',
  },
  {
    id: 2,
    text: 'What evidence supports your opinion?',
  },
  {
    id: 3,
    text: 'Could there be another explanation?',
  },
  {
    id: 4,
    text: 'What assumptions are you making?',
  },
  {
    id: 5,
    text: 'How would someone disagree with you?',
  },
];