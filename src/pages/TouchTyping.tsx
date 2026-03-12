import { useEffect, useRef, useState } from 'react';
import { useTouchTyping } from '../features/touch-typing/useTouchTyping';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';

  const { currentIndex, isFinished, time, errors, accuracy, correctCount, wrongCount, handleKeyDown } = useTouchTyping(text);

  const [isStarted, setIsStarted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function startTyping() {
    setIsStarted(true);
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>Touch Typing</h2>

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

      {!isStarted && <button onClick={startTyping}>Start</button>}

      {isStarted && <input ref={inputRef} onKeyDown={handleKeyDown} />}

      {isFinished && <p>Complete</p>}
    </div>
  );
}
