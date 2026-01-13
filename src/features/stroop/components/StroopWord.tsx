interface Props {
  text: string;
  color: string;
}

export default function StroopWord({ text, color }: Props) {
  return <h2 style={{ color, fontSize: '3rem' }}>{text}</h2>;
}
