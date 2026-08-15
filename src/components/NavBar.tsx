import { NavLink, useLocation, useNavigate } from 'react-router';
import UlSt from './styled-components/UlSt.styled';
import ButtonSt from './styled-components/ButtonSt.styled';
import DifficultySwitch from './DifficultySwitch';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const location = useLocation();
  const index = pages.indexOf(location.pathname);
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  function prevHandler() {
    const next = index === 0 ? 0 : index - 1;
    if (next !== index) {
      navigate(pages[next]);
    }
  }

  function nextHandler() {
    const next = index >= pages.length - 1 ? index : index + 1;
    if (next !== index) {
      navigate(pages[next]);
    }
  }

  return (
    <>
      {isHomePage ? (
        <UlSt>
          <li>
            <NavLink style={{ cursor: 'pointer' }} to='/schulte'>
              Start
            </NavLink>
          </li>
        </UlSt>
      ) : (
        <UlSt>
          <li>
            <NavLink style={{ cursor: 'pointer' }} to='/'>
              Restart
            </NavLink>
          </li>
          <li>
            <ButtonSt onClick={prevHandler} style={{ cursor: 'pointer' }} disabled={index === 0}>
              Previous
            </ButtonSt>
          </li>
          <li>
            <ButtonSt onClick={nextHandler} style={{ cursor: 'pointer' }} disabled={index === pages.length - 1}>
              Next
            </ButtonSt>
          </li>
        </UlSt>
      )}
      <DifficultySwitch />
    </>
  );
}
