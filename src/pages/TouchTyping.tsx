import { useEffect, useRef } from 'react';
import { useTouchTyping } from '../features/touch-typing/useTouchTyping';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';

  const { currentIndex, isFinished, time, errors, handleKeyDown } = useTouchTyping(text);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

      <input ref={inputRef} onKeyDown={handleKeyDown} />

      {isFinished && <p>Complete</p>}
    </div>
  );
}
