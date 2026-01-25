export const COLORS = [
  { name: 'RED', value: 'red' },
  { name: 'GREEN', value: 'green' },
  { name: 'BLUE', value: 'blue' },
  { name: 'YELLOW', value: 'gold' },
  { name: 'ORANGE', value: 'orange' },
  { name: 'PURPLE', value: 'purple' },
];
export function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}