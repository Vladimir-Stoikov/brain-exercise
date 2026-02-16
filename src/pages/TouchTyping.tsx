import { useEffect, useState } from 'react';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';
  // const [input, setInput] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const [time, setTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted || isFinished) return;

    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, isFinished]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFinished) return;

    if (!isStarted) {
      setIsStarted(true);
    }

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

      <p>Time: {time}</p>

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

      {isFinished && <p>Complete</p>}
    </div>
  );
}
