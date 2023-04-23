import React from 'react'
import greekSalad from '../../assets/icons/greek-salad.jpg'
import lemonDessert from '../../assets/icons/lemon-dessert.jpg'
import "./specials.css"

const Specials = () => {
  return (
    <section className='specials'>
        <div className='header-specials'>
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className='card'>
          <div className='single-card'>
            <img src={greekSalad} alt='Greek Salad' />
            <div className='label'>
              <div>
                <h3>Greek Salad</h3>
                <h6>$12.99</h6>
              </div>
              <p className='paragraph'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fetac cheese, garnished with crunchy garlic and rosemary croutons</p>
              <p className='order-delivery'>Order a delivery</p>
            </div>
          </div>
          <div className='single-card'>
            <img src={greekSalad} alt='Greek Salad' />
            <div className='label'>
              <div>
                <h3>Greek Salad</h3>
                <h6>$12.99</h6>
              </div>
              <p className='paragraph'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fetac cheese, garnished with crunchy garlic and rosemary croutons</p>
              <p className='order-delivery'>Order a delivery</p>
            </div>
          </div>
          <div className='single-card'>
            <img src={lemonDessert} alt='Lemon Dessert' />
            <div className='label'>
              <div>
                <h3>Greek Salad</h3>
                <h6>$12.99</h6>
              </div>
              <p className='paragraph'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fetac cheese, garnished with crunchy garlic and rosemary croutons</p>
              <p className='order-delivery'>Order a delivery</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Specials