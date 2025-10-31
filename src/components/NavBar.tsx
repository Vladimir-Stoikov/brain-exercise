import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import UlSt from './styled-components/UlSt';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const [currentPage, setCurrentPage] = useState<number>(0);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  function prevHandler() {
    console.log(currentPage);
    setCurrentPage(prev => {
      return prev === 0 ? prev : --prev;
    });
  }

  function nextHandler() {
    console.log(currentPage);
    setCurrentPage(prev => {
      return prev > pages.length - 2 ? prev : ++prev;
    });
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
            <NavLink onClick={prevHandler} style={{ cursor: 'pointer' }} to={pages[currentPage]}>
              Прошлое
            </NavLink>
          </li>
          <li>
            <NavLink onClick={nextHandler} style={{ cursor: 'pointer' }} to={pages[currentPage]}>
              Следующее
            </NavLink>
          </li>
        </UlSt>
      )}
    </>
  );
}
