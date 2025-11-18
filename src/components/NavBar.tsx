import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import UlSt from './styled-components/UlSt.styled';
import ButtonSt from './styled-components/ButtonSt.styled';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
    </>
  );
}
