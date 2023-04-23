import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Container from './components/container/Container';
import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
