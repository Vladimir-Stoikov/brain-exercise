import { StroopWordSt } from './styled-components/StroopWord.styled';

interface Props {
  text: string;
  color: string;
}

export default function StroopWord({ text, color }: Props) {
  return <StroopWordSt $color={color}>{text}</StroopWordSt>;
}
