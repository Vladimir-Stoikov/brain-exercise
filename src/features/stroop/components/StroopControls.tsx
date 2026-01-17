interface Props {
  colors: Color[];
  onSelect: (color: string) => void;
  disabled: boolean;
}
export default function StroopControls({ colors, onSelect, disabled }: Props) {
  return (
    <div>
      {colors.map(color => (
        <button disabled={disabled} onClick={() => onSelect(color.value)}>
          {color.name}
        </button>
      ))}
    </div>
  );
}
