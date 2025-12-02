import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import UlSt from './styled-components/UlSt.styled';
import ButtonSt from './styled-components/ButtonSt.styled';
import { DifficultyContext } from '../utility/DifficultyContext';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const location = useLocation();
  const index = pages.indexOf(location.pathname);
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

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
