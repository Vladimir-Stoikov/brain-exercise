import { useEffect, useState } from 'react';
import { COLORS, getRandomColor } from './utils/stroopData';
import StroopWord from './components/StroopWord';
import StroopControls from './components/StroopControls';
import { StroopButton } from './components/styled-components/StroopButton.styled';
import { FeedbackText } from './components/styled-components/Feedback.styled';
import { StatsRow } from './components/styled-components/Stats.styled';
import { TimerBar } from './components/styled-components/TimerBar.styled';

const ROUND_TIME_MS = 3000;

function createRound() {
  return {
    word: getRandomColor(),
    textColor: getRandomColor(),
  };
}

export default function StroopGame() {
  const [round, setRound] = useState<ReturnType<typeof createRound> | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const [timeExpired, setTimeExpired] = useState(false);

  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const [totalReactionTime, setTotalReactionTime] = useState(0);
  const [answersCount, setAnswersCount] = useState(0);

  const avgReactionTime = answersCount > 0 ? Math.round(totalReactionTime / answersCount) : null;

  useEffect(() => {
    if (!isStarted || !round || result) return;

    const timeout = setTimeout(() => {
      setTimeExpired(true);
      setResult('wrong');
      setWrongCount(prev => prev + 1);
      setStreak(0);
    }, ROUND_TIME_MS);

    return () => clearTimeout(timeout);
  }, [round, isStarted, result]);

  function startGame() {
    setRound(createRound());
    setIsStarted(true);
    setResult(null);
    setTimeExpired(false);
    setReactionTime(null);
    setStartTime(Date.now());
  }

  function handleAnswer(color: string) {
    if (result || timeExpired || !round) return;

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
    setTimeExpired(false);
    setReactionTime(null);
    setStartTime(Date.now());
  }

  return (
    <div>
      {!isStarted && <StroopButton onClick={startGame}>Start</StroopButton>}

      {isStarted && round && (
        <>
          {!result && <TimerBar key={round.word.value} $duration={ROUND_TIME_MS} />}

          <StroopWord text={round.word.name} color={round.textColor.value} />

          <StroopControls colors={COLORS} onSelect={handleAnswer} disabled={result !== null} />
        </>
      )}

      {result && <FeedbackText $type={result}>{result === 'correct' ? 'Correct' : 'Wrong'}</FeedbackText>}

      <StroopButton onClick={nextRound} disabled={!result}>
        Next
      </StroopButton>

      <StatsRow>
        <span>✔: {correctCount}</span>
        <span>✖: {wrongCount}</span>
        <span>streak: {streak}</span>
        <span>avg time: {avgReactionTime ?? '-'} ms</span>
      </StatsRow>

      {reactionTime !== null && <p>{reactionTime} ms</p>}
    </div>
  );
}
