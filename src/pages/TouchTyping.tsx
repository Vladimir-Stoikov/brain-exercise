import { useEffect, useState } from 'react';
import TypingSession from '../features/touch-typing/TypimgSession';
import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { TypingLayout } from '../features/touch-typing/styled-components/TypingLayout.styled';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';

  const [resetKey, setResetKey] = useState(0);

  const [isStarted, setIsStarted] = useState(false);

  function startTyping() {
    setIsStarted(true);
  }

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
            setIsStarted(false);
          }}
        >
          Restart
        </ButtonSt>
      )}
    </TypingLayout>
  );
}
