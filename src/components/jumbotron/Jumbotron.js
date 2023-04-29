import React from 'react'
import restaurantFood from '../../assets/icons/restauranfood.jpg'
import "./jumbotron.css"

const Jumbotron = ({ children }) => {
  return (
    <section className='jumbotron'>
        {children}
        <img src={restaurantFood} alt='jumbotron' />
    </section>
  )
}

export default Jumbotron