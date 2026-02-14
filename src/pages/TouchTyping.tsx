import { useState } from 'react';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';
  // const [input, setInput] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    const expectedChar = text[currentIndex];

    if (e.key === expectedChar) {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next === text.length) {
          setIsFinished(true);
        }

        return next;
      });
    }

    e.preventDefault();
  };

  return (
    <div>
      <h2>Touch Typing</h2>

      {/* <p>{text}</p> */}

      {/* <input value={input} onChange={e => setInput(e.target.value)} /> */}

      <p>
        {text.split('').map((char, index) => {
          if (index < currentIndex) {
            return <span key={index}>{char}</span>;
          }
          if (index === currentIndex) {
            return <span key={index}>[{char}]</span>;
          }
          return <span key={index}>{char}</span>;
        })}
      </p>

      <input onKeyDown={handleKeyDown} />

      {/* <p>Current input: {input}</p> */}

      {isFinished && <p>Complete</p>}
    </div>
  );
}
