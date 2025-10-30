import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import MainSt from './components/styled-components/MainSt';

function App() {
  return (
    <MainSt>
      <h1>brain-exercise</h1>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </MainSt>
  );
}

export default App;
