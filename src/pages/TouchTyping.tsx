import { useEffect, useRef, useState } from 'react';
import { useTouchTyping } from '../features/touch-typing/useTouchTyping';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';

  const [resetKey, setResetKey] = useState(0);

  const [isStarted, setIsStarted] = useState(false);

  function startTyping() {
    setIsStarted(true);
  }

  function TypingSession({ text }: { text: string }) {
    const { currentIndex, isFinished, time, errors, accuracy, correctCount, wrongCount, handleKeyDown } = useTouchTyping(text);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    return (
      <div
        onClick={e => {
          const target = e.target as HTMLElement;

          if (target.tagName === 'BUTTON') return;

          inputRef.current?.focus();
        }}
      >
        <p>Time: {time}</p>

        <p>
          {text.split('').map((char, index) => {
            let className = '';

            if (errors.has(index)) {
              className = 'error';
            } else if (index < currentIndex) {
              className = 'typed';
            } else if (index === currentIndex) {
              className = 'current';
            } else {
              className = 'upcoming';
            }

            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </p>
        <div>
          <p>Accuracy: {accuracy}%</p>
          <p>Correct: {correctCount}</p>
          <p>Wrong: {wrongCount}</p>
        </div>

        <input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
          }}
        />

        {isFinished && <p>Complete</p>}
      </div>
    );
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
