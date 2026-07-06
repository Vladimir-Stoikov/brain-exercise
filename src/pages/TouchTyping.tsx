import { useEffect, useState, useContext, useCallback } from 'react';
import TypingSession from '../features/touch-typing/TypingSession';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { TypingLayout } from '../features/touch-typing/styled-components/TypingLayout.styled';
import { generateText } from '../utility/textGenerator/textGenerator';
import { DifficultyContext } from '../utility/DifficultyContext';

export default function TouchTyping() {
  const [resetKey, setResetKey] = useState(0);
  const { difficulty } = useContext(DifficultyContext);

  const [text, setText] = useState('');

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  function startTyping() {
    setIsFinished(false);
    setIsStarted(true);
  }

  function restart() {
    setResetKey(prev => prev + 1);
    setText(generateText(difficulty));
    setIsStarted(false);
  }

  const handleFinish = useCallback(() => setIsFinished(true), []);

  useEffect(() => {
    restart();
  }, [difficulty]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      e.preventDefault();

      if (!isStarted) {
        setIsStarted(true);
        return;
      }

      if (isFinished) {
        restart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isStarted, isFinished, difficulty]);

  return (
    <TypingLayout>
      <h2>Touch Typing</h2>
      {!isStarted && (
        <div>
          <p>Press Start/Enter and begin typing</p>
        </div>
      )}

      {!isStarted && <ButtonSt onClick={startTyping}>Start</ButtonSt>}

      {isStarted && <TypingSession key={resetKey} text={text} onFinish={handleFinish}></TypingSession>}

      {isStarted && <ButtonSt onClick={restart}>Restart</ButtonSt>}
    </TypingLayout>
  );
}
