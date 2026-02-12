import { HomeText } from './styled-components/HomeText.styled';
import { HomeTitle } from './styled-components/HomeTitle.styled';
import { HomeWrapper } from './styled-components/HomeWrapper.styled';

export default function HomePage() {
  return (
    <HomeWrapper>
      <HomeTitle>Brain Exercise</HomeTitle>

      <HomeText>A set of short exercises to train attention, reaction, and cognitive flexibility.</HomeText>

      <HomeText>🧠 Schulte · 🎨 Stroop · ⌨ Touch Typing · 📖 Reading</HomeText>
    </HomeWrapper>
  );
}
