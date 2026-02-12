import { useState } from 'react';

export default function TouchTypingPage() {
  const text = 'The quick brown fox jumps over the lazy dog';
  const [input, setInput] = useState('');

  return (
    <div>
      <h2>Touch Typing</h2>

      <p>{text}</p>

      <input value={input} onChange={e => setInput(e.target.value)} />

      <p>Current input: {input}</p>
    </div>
  );
}
