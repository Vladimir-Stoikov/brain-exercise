interface Props {
  colors: { name: string; value: string }[];
  onSelect: (color: string) => void;
}

export default function StroopControls({ colors, onSelect }: Props) {
  return (
    <div>
      {colors.map(c => (
        <button key={c.value} onClick={() => onSelect(c.value)}>
          {c.name}
        </button>
      ))}
    </div>
  );
}
