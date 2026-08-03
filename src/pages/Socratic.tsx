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
  }

  function handleStart() {
    setTitle(answer);
    generateQuestion();
    setAnswer('');
    setCounter(1);
  }

  function handleAnswer() {
    console.log(counter);
    setHistory(prev => [...prev, { answer: answer, question: question }]);
    const nextCounter = counter + 1;

    if (nextCounter > questions.length) {
      setIsFinished(true);
    } else {
      setCounter(nextCounter);
      generateQuestion();
    }

    setAnswer('');
  }

  function restart() {
    setAnswer('');
    setQuestion(false);
    setHistory([]);
    setCounter(0);
    setIsFinished(false);
    setTitle('');
  }

  return (
    <SocraticLayout>
      <h2>
        {!title ? 'Socratic Question' : title}
        {isFinished.toString()}
      </h2>

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

      {!question ? (
        <SocraticQuestion>Write your question and press start</SocraticQuestion>
      ) : !isFinished ? (
        <SocraticQuestion>{question}</SocraticQuestion>
      ) : (
        <SocraticQuestion>And it is what it is</SocraticQuestion>
      )}

      {!isFinished && <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Your answer...' />}

      <SocraticControls>
        {!question ? <ButtonSt onClick={handleStart}>Start</ButtonSt> : !isFinished ? <ButtonSt onClick={handleAnswer}>Next</ButtonSt> : <ButtonSt onClick={restart}>Restart</ButtonSt>}
      </SocraticControls>
    </SocraticLayout>
  );
}
