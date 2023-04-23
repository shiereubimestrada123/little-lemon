// import { Routes, Route } from 'react-router-dom';
import Container from './components/container/Container';
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Specials from './components/specials/Specials';
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Jumbotron />
      <Specials />
    </Container>
  );
}

export default App;
