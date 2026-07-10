
export default function countWPM(time: number, correctChars: number): number {
  return Math.floor(correctChars / 5 / (time / 60));
}