import { useEffect, useState } from 'react';
import { COLORS, getRandomColor } from './utils/stroopData';
import StroopWord from './components/StroopWord';
import StroopControls from './components/StroopControls';
import { StroopButton } from './components/styled-components/StroopButton.styled';
import { FeedbackText } from './components/styled-components/Feedback.styled';
import { StatsRow } from './components/styled-components/Stats.styled';
import { TimerBar } from './components/styled-components/TimerBar.styled';

export default function StroopGame() {
  const [round, setRound] = useState(createRound);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const [startTime, setStartTime] = useState<number>(() => Date.now());
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  const [totalReactionTime, setTotalReactionTime] = useState(0);
  const [answersCount, setAnswersCount] = useState(0);

  const ROUND_TIME_MS = 3000;
  const [timeExpired, setTimeExpired] = useState(false);

  const avgReactionTime = answersCount > 0 ? Math.round(totalReactionTime / answersCount) : null;

  useEffect(() => {
    if (result) return;

    const timeout = setTimeout(() => {
      setTimeExpired(true);
      setResult('wrong');
      setWrongCount(prev => prev + 1);
      setStreak(0);
    }, ROUND_TIME_MS);

    return () => clearTimeout(timeout);
  }, [round]);

  function createRound() {
    return {
      word: getRandomColor(),
      textColor: getRandomColor(),
    };
  }

  function handleAnswer(color: string) {
    if (result || timeExpired) return;

    const time = Date.now() - startTime;

    setReactionTime(time);
    setTotalReactionTime(prev => prev + time);
    setAnswersCount(prev => prev + 1);

    if (color === round.textColor.value) {
      setResult('correct');
      setCorrectCount(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setResult('wrong');
      setWrongCount(prev => prev + 1);
      setStreak(0);
    }
  }

  function nextRound() {
    setRound(createRound());
    setResult(null);
    setReactionTime(null);
    setTimeExpired(false);
    setStartTime(Date.now());
  }

  return (
    <div>
      <StroopWord text={round.word.name} color={round.textColor.value} />
      <TimerBar $active={!result} />
      <StroopControls colors={COLORS} onSelect={handleAnswer} disabled={result !== null} />
      <FeedbackText $type={result === 'wrong' ? 'wrong' : 'correct'}>
        {result === 'correct' && 'Correct'}
        {result === 'wrong' && 'Wrong'}
      </FeedbackText>
      <StroopButton onClick={nextRound} disabled={result === null}>
        Next
      </StroopButton>
      <StatsRow style={{ marginBottom: '1rem' }}>
        <span>✔: {correctCount}</span>
        <span>✖: {wrongCount}</span>
        <span>streak: {streak}</span>
        <span>avg time: {avgReactionTime} ms</span>
        {reactionTime !== null && <p>Время реакции: {reactionTime} ms</p>}
      </StatsRow>
    </div>
  );
}
