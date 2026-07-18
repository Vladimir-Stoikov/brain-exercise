import { useState } from 'react';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { SocraticLayout } from '../features/socratic-question/styled-components/SocraticLayout.styled';
import { SocraticAnswer } from '../features/socratic-question/styled-components/SocraticAnswer.styled';
import { SocraticQuestion } from '../features/socratic-question/styled-components/SocraticQuestion.styled';
import { SocraticControls } from '../features/socratic-question/styled-components/SocraticControls.styled';

export default function SocraticPage() {
  const [answer, setAnswer] = useState('');

  return (
    <SocraticLayout>
      <h2>Socratic Question</h2>

      <SocraticQuestion>Press Start to begin your Socratic dialogue.</SocraticQuestion>

      <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Your answer...' />

      <SocraticControls>
        <ButtonSt>Start</ButtonSt>
      </SocraticControls>
    </SocraticLayout>
  );
}
