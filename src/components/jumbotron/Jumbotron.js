import React from 'react'
import restaurantFood from '../../assets/icons/restauranfood.jpg'
import "./jumbotron.css"

const Jumbotron = () => {
  return (
    <section className='jumbotron'>
        <div className='jumbotron-text'>
            <p>Little Lemon</p>
            <p>Chicago</p>
            <p>We are a family owned Meditteranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <img src={restaurantFood} alt='jumbotron' />
    </section>
  )
}

export default Jumbotron