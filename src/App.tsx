import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import MainSt from './components/styled-components/MainSt.styled';
import { useState } from 'react';
import { DifficultyContext } from './utility/DifficultyContext';

function App() {
  const [difficulty, setDifficulty] = useState('veryHard');

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      <MainSt>
        <h1>brain-exercise</h1>
        <NavBar />
        <section>
          <Outlet />
        </section>
      </MainSt>
    </DifficultyContext.Provider>
  );
}

export default App;
