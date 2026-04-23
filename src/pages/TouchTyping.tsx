import { useEffect, useMemo, useState, useContext } from 'react';
import TypingSession from '../features/touch-typing/TypimgSession';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { TypingLayout } from '../features/touch-typing/styled-components/TypingLayout.styled';
import { generateText } from '../utility/textGenerator/textGenerator';
import { DifficultyContext } from '../utility/DifficultyContext';

export default function TouchTypingPage() {
  const [resetKey, setResetKey] = useState(0);
  const { difficulty } = useContext(DifficultyContext);

  // const text = useMemo(() => generateText(2), [resetKey]);
  const [text, setText] = useState(() => generateText(difficulty));

  const [isStarted, setIsStarted] = useState(false);

  function startTyping() {
    setIsStarted(true);
  }

useEffect(() => {
  setText(generateText(difficulty));
  setResetKey(prev => prev + 1); 
  setIsStarted(false);
}, [difficulty]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      if (!isStarted) {
        setIsStarted(true);
        return;
      }

      const isFinished = document.querySelector('[data-finished="true"]');

      if (isFinished) {
        setResetKey(prev => prev + 1);
        setIsStarted(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isStarted]);

  return (
    <TypingLayout>
      <h2>Touch Typing</h2>
      {!isStarted && (
        <div>
          <p>Press Start/Enter and begin typing</p>
        </div>
      )}

      {!isStarted && <ButtonSt onClick={startTyping}>Start</ButtonSt>}

      {isStarted && <TypingSession key={resetKey} text={text}></TypingSession>}

      {isStarted && (
        <ButtonSt
          onClick={() => {
            setResetKey(prev => prev + 1);
            setText(generateText(difficulty));
            setIsStarted(false);
          }}
        >
          Restart
        </ButtonSt>
      )}
    </TypingLayout>
  );
}
