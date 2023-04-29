import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage  from './pages/BookingPage ';
import Container from './components/container/Container';
import ConfirmedBooking from './components/confirmedBooking/ConfirmedBooking';
import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
