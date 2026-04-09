import { useEffect, useRef } from 'react';
import { useTouchTyping } from './useTouchTyping';
import { TypingLayout } from './styled-components/TypingLayout.styled';
import { TypingStats } from './styled-components/TypingStats.styled';
import { TypingText } from './styled-components/TypingText.styled';

export default function TypingSession({ text }: { text: string }) {
  const { currentIndex, isFinished, time, errors, accuracy, correctCount, wrongCount, corrected, correctedCount, handleKeyDown } = useTouchTyping(text);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <TypingLayout
      onClick={e => {
        const target = e.target as HTMLElement;

        if (target.tagName === 'BUTTON') return;

        inputRef.current?.focus();
      }}
    >
      <h3>
        <span>Time ⏱: {time}</span>
      </h3>

      <TypingText>
        {text.split('').map((char, index) => {
          let className = '';

          if (errors.has(index)) {
            className = 'error';
          } else if (corrected.has(index)) {
            className = 'corrected';
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
      </TypingText>
      <TypingStats>
        <span>Accuracy 🎯: {accuracy}%</span>
        <span>✔ Correct: {correctCount}</span>
        <span>✖ Wrong: {wrongCount}</span>
        <span>🔧 Corrected: {correctedCount}</span>
      </TypingStats>
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
    </TypingLayout>
  );
}
