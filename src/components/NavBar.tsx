import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import UlSt from './styled-components/UlSt.styled';
import ButtonSt from './styled-components/ButtonSt.styled';
import { DifficultyContext } from '../utility/DifficultyContext';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  function prevHandler() {
    console.log(currentPage);
    const next = currentPage === 0 ? 0 : currentPage - 1;
    if (next !== currentPage) {
      setCurrentPage(next);
      navigate(pages[next]);
    }
  }

  function nextHandler() {
    console.log(currentPage);
    const next = currentPage >= pages.length - 1 ? currentPage : currentPage + 1;
    if (next !== currentPage) {
      setCurrentPage(next);
      navigate(pages[next]);
    }
  }

  return (
    <>
      {isHomePage ? (
        <UlSt>
          <li>
            <NavLink style={{ cursor: 'pointer' }} to='/schulte'>
              Начать
            </NavLink>
          </li>
        </UlSt>
      ) : (
        <UlSt>
          <li>
            <NavLink style={{ cursor: 'pointer' }} to='/'>
              Начать заново
            </NavLink>
          </li>
          <li>
            <ButtonSt onClick={prevHandler} style={{ cursor: 'pointer' }}>
              Прошлое
            </ButtonSt>
          </li>
          <li>
            <ButtonSt onClick={nextHandler} style={{ cursor: 'pointer' }}>
              Следующее
            </ButtonSt>
          </li>
        </UlSt>
      )}
      <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
        <option value='veryHard'>Very Hard</option>
      </select>
    </>
  );
}
