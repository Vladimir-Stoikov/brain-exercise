import { useState } from 'react';
import TypingSession from '../features/touch-typing/TypimgSession';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';

  const [resetKey, setResetKey] = useState(0);

  const [isStarted, setIsStarted] = useState(false);

  function startTyping() {
    setIsStarted(true);
  }

  return (
    <>
      <h2>Touch Typing</h2>
      {!isStarted && (
        <div>
          <p>Press Start and begin typing</p>
        </div>
      )}

      {!isStarted && <button onClick={startTyping}>Start</button>}

      {isStarted && <TypingSession key={resetKey} text={text}></TypingSession>}

      <button
        onClick={() => {
          setResetKey(prev => prev + 1);
          setIsStarted(false);
        }}
      >
        Restart
      </button>
    </>
  );
}
