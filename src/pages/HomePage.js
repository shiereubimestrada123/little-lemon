import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header'
import Jumbotron from '../components/jumbotron/Jumbotron'
import Specials from '../components/specials/Specials'

const Homepage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    console.log('testing')
    navigate('/booking')
  }

  return (
    <>
        <Header />
        <Jumbotron>
          <div className='jumbotron-text'>
            <p>Little Lemon</p>
            <p>Chicago</p>
            <p>We are a family owned Meditteranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleRedirect}>Reserve a Table</button>
          </div>
        </Jumbotron>
        <Specials />
    </>
  )
}

export default Homepage