import React, { useState } from 'react';
import { NavLink } from 'react-router';

export default function NavBar() {
  const pages: string[] = ['/schulte', '/stroop', '/touch-typing', '/socratic', '/reverse-reading'];
  const [currentPage, setCurrentPage] = useState<number>(0);

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
    <ul>
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
    </ul>
  );
}
