import { useEffect, useRef } from 'react';
import { useTouchTyping } from './useTouchTyping';

export default function TypingSession({ text }: { text: string }) {
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
