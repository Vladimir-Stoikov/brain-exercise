import { useState } from 'react';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { SocraticLayout } from '../features/socratic-question/styled-components/SocraticLayout.styled';
import { SocraticAnswer } from '../features/socratic-question/styled-components/SocraticAnswer.styled';
import { SocraticQuestion } from '../features/socratic-question/styled-components/SocraticQuestion.styled';
import { SocraticControls } from '../features/socratic-question/styled-components/SocraticControls.styled';
import { questions } from '../features/socratic-question/data/questions';

interface SocraticHistoryItem {
  question: string | boolean;
  answer: string;
}

export default function SocraticPage() {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState<string | boolean>(false);
  const [history, setHistory] = useState<SocraticHistoryItem[]>([]);

  function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex].text);
  }

  function handleAnswer() {
    setHistory(prev => [...prev, { answer: answer, question: question }]);
    generateQuestion();
    setAnswer('');
  }

  return (
    <SocraticLayout>
      <h2>Socratic Question</h2>

      {history &&
        history.map((item, index) => (
          <div key={index}>
            <p>
              <strong>Q:</strong> {item.question}
            </p>

            <p>
              <strong>A:</strong> {item.answer}
            </p>
          </div>
        ))}

      {!question ? <SocraticQuestion>Press Start to begin your Socratic dialogue.</SocraticQuestion> : <SocraticQuestion>{question}</SocraticQuestion>}

      <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Your answer...' />

      <SocraticControls>{!question ? <ButtonSt onClick={generateQuestion}>Start</ButtonSt> : <ButtonSt onClick={handleAnswer}>Next</ButtonSt>}</SocraticControls>
    </SocraticLayout>
  );
}
