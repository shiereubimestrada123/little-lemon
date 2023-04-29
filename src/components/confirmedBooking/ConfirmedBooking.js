import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../header/Header'
import Jumbotron from '../jumbotron/Jumbotron'
import './confirmation-booking.css'

const ConfirmedBooking = () => {
  return (
    <div>
      <Header />
      <Jumbotron>
        <div className='jumbotron-text'>
          <p>Booking Confirmation</p>
        </div>
      </Jumbotron>
      <div className='confirmation-message'>
        <FontAwesomeIcon icon={faCircleCheck} size="4x" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
      </div>
    </div>
  )
}

export default ConfirmedBooking