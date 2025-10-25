import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <h1>brain-exercise</h1>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default App;
