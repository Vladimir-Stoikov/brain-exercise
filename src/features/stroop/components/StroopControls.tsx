import { StroopButton } from './styled-components/StroopButton.styled';

interface Props {
  colors: Color[];
  onSelect: (color: string) => void;
  disabled: boolean;
}
export default function StroopControls({ colors, onSelect, disabled }: Props) {
  return (
    <div>
      {colors.map(color => (
        <StroopButton disabled={disabled} onClick={() => onSelect(color.value)}>
          {color.name}
        </StroopButton>
      ))}
    </div>
  );
}
