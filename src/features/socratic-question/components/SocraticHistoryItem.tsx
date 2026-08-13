import { SocraticHistoryItemSt } from '../styled-components/SocraticHistoryItem.styled';

interface Props {
  question: string | boolean;
  answer: string;
}

export default function SocraticHistoryItem({ question, answer }: Props) {
  return (
    <SocraticHistoryItemSt>
      <p>
        <strong>Q:</strong> {question}
      </p>

      <p>
        <strong>A:</strong> {answer}
      </p>
    </SocraticHistoryItemSt>
  );
}
