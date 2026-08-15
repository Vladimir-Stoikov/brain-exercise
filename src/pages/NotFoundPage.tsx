import { Link } from 'react-router';

import ButtonSt from '../components/styled-components/ButtonSt.styled';
import { NotFoundWrapper } from '../features/not-found-page/styled-components/NotFoundWrapper.styled';
import { NotFoundCode } from '../features/not-found-page/styled-components/NotFoundCode.styled';
import { NotFoundTitle } from '../features/not-found-page/styled-components/NotFoundTitle.styled';
import { NotFoundText } from '../features/not-found-page/styled-components/NotFoundText.styled';

export default function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundCode>404</NotFoundCode>

      <NotFoundTitle>Page not found</NotFoundTitle>

      <NotFoundText>The page you are looking for does not exist or has been moved.</NotFoundText>

      <Link to='/'>
        <ButtonSt>Back to home</ButtonSt>
      </Link>
    </NotFoundWrapper>
  );
}
