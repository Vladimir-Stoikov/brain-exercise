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
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [title, setTitle] = useState('');

  function generateQuestion() {
    setQuestion(questions[counter].text);
    setCounter(prev => prev + 1);
  }

  function handleStart() {
    setTitle(answer);
    generateQuestion();
    setAnswer('');
  }

  function handleAnswer() {
    if (counter === questions.length - 1) {
      setIsFinished(true);
      setHistory(prev => [...prev, { answer: answer, question: question }]);
    }
    setHistory(prev => [...prev, { answer: answer, question: question }]);
    generateQuestion();
    setAnswer('');
  }

  function restart() {
    console.log('asdaa');
  }

  return (
    <SocraticLayout>
      <h2>{!title ? 'Socratic Question' : title}</h2>

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

      {!question ? <SocraticQuestion>Write your question and press start</SocraticQuestion> : <SocraticQuestion>{question}</SocraticQuestion>}

      {!isFinished && <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Your answer...' />}

      <SocraticControls>
        {!question ? <ButtonSt onClick={handleStart}>Start</ButtonSt> : !isFinished ? <ButtonSt onClick={handleAnswer}>Next</ButtonSt> : <ButtonSt onClick={restart}>Restart</ButtonSt>}
      </SocraticControls>
    </SocraticLayout>
  );
}
