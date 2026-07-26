import { useState } from 'react';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { SocraticLayout } from '../features/socratic-question/styled-components/SocraticLayout.styled';
import { SocraticAnswer } from '../features/socratic-question/styled-components/SocraticAnswer.styled';
import { SocraticQuestion } from '../features/socratic-question/styled-components/SocraticQuestion.styled';
import { SocraticControls } from '../features/socratic-question/styled-components/SocraticControls.styled';
import { questions } from '../features/socratic-question/data/questions';

export default function SocraticPage() {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState<string | boolean>(false);

  function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex].text);
  }

  return (
    <SocraticLayout>
      <h2>Socratic Question</h2>

      {!question ? <SocraticQuestion>Press Start to begin your Socratic dialogue.</SocraticQuestion> : <SocraticQuestion>{question}</SocraticQuestion>}

      <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Your answer...' />

      <SocraticControls>
        <ButtonSt onClick={generateQuestion}>Start</ButtonSt>
      </SocraticControls>
    </SocraticLayout>
  );
}
