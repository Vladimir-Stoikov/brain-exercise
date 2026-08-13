import { useState } from 'react';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { SocraticLayout } from '../features/socratic-question/styled-components/SocraticLayout.styled';
import { SocraticAnswer } from '../features/socratic-question/styled-components/SocraticAnswer.styled';
import { SocraticQuestion } from '../features/socratic-question/styled-components/SocraticQuestion.styled';
import { SocraticControls } from '../features/socratic-question/styled-components/SocraticControls.styled';
import { questions } from '../features/socratic-question/data/questions';
import SocraticHistoryItem from '../features/socratic-question/components/SocraticHistoryItem';

interface SocraticHistoryItem {
  question: string | boolean;
  answer: string;
}

export default function SocraticPage() {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState<SocraticHistoryItem[]>([]);
  const [counter, setCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [title, setTitle] = useState('');
  const [placeHolderAnsw, setPlaceHolderAnsw] = useState('Your question ...');

  function handleStart() {
    if (answer.length <= 0) {
      setPlaceHolderAnsw("DON'T LEAVE THIS FIELD BLANK");
      return;
    }
    setTitle(answer);
    setQuestion(questions[counter].text);
    setAnswer('');
    setCounter(1);
    setPlaceHolderAnsw('Your answer ...');
  }

  function handleAnswer() {
    if (answer.length <= 0) {
      setPlaceHolderAnsw("DON'T LEAVE THIS FIELD BLANK");
      return;
    }
    setHistory(prev => [...prev, { answer: answer, question: question }]);
    const nextCounter = counter + 1;

    if (nextCounter > questions.length) {
      setIsFinished(true);
    } else {
      setCounter(nextCounter);
      setQuestion(questions[counter].text);
      setPlaceHolderAnsw('Your answer ...');
    }

    setAnswer('');
  }

  function restart() {
    setAnswer('');
    setQuestion('');
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

      {history.map((item, index) => (
        <SocraticHistoryItem key={index} question={item.question} answer={item.answer} />
      ))}

      {!question ? (
        <SocraticQuestion>Write your question and press start</SocraticQuestion>
      ) : !isFinished ? (
        <SocraticQuestion>{question}</SocraticQuestion>
      ) : (
        <SocraticQuestion>And it is what it is</SocraticQuestion>
      )}

      {!isFinished && <SocraticAnswer value={answer} onChange={e => setAnswer(e.target.value)} placeholder={placeHolderAnsw} />}

      <SocraticControls>
        {!question ? <ButtonSt onClick={handleStart}>Start</ButtonSt> : !isFinished ? <ButtonSt onClick={handleAnswer}>Next</ButtonSt> : <ButtonSt onClick={restart}>Restart</ButtonSt>}
      </SocraticControls>
    </SocraticLayout>
  );
}
