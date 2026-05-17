export type FingerData = {
  hand: 'L' | 'R';
  finger: number | 'T';
};

export const fingerMap: Record<string, FingerData> = {
  q: { hand: 'L', finger: 1 },
  a: { hand: 'L', finger: 1 },
  z: { hand: 'L', finger: 1 },

  w: { hand: 'L', finger: 2 },
  s: { hand: 'L', finger: 2 },
  x: { hand: 'L', finger: 2 },

  e: { hand: 'L', finger: 3 },
  d: { hand: 'L', finger: 3 },
  c: { hand: 'L', finger: 3 },

  r: { hand: 'L', finger: 4 },
  t: { hand: 'L', finger: 4 },
  f: { hand: 'L', finger: 4 },
  g: { hand: 'L', finger: 4 },
  v: { hand: 'L', finger: 4 },
  b: { hand: 'L', finger: 4 },

  y: { hand: 'R', finger: 4 },
  u: { hand: 'R', finger: 4 },
  h: { hand: 'R', finger: 4 },
  j: { hand: 'R', finger: 4 },
  n: { hand: 'R', finger: 4 },
  m: { hand: 'R', finger: 4 },

  i: { hand: 'R', finger: 3 },
  k: { hand: 'R', finger: 3 },
  ',': { hand: 'R', finger: 3 },

  o: { hand: 'R', finger: 2 },
  l: { hand: 'R', finger: 2 },
  '.': { hand: 'R', finger: 2 },

  p: { hand: 'R', finger: 1 },
  ';': { hand: 'R', finger: 1 },
  '/': { hand: 'R', finger: 1 },

  ' ': { hand: 'R', finger: 'T' },
};