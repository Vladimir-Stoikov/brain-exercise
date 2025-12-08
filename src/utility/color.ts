export function generateLightColor() {
  const minLight = 150;

  const r = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const g = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const b = Math.floor(Math.random() * (255 - minLight + 1) + minLight);

  return `rgb(${r} ${g} ${b})`;
}