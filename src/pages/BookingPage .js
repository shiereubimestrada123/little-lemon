import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header'
import Jumbotron from '../components/jumbotron/Jumbotron'
import BookingForm from '../components/bookingForm/BookingForm'
import { fetchAPI, submitAPI } from '../api/bookingAPI'

const BookingPage  = () => {
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };

  const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/confirmed-booking');
  };

  return (
    <div>
      <Header />
      <Jumbotron>
        <div className='jumbotron-text'>
          <p>Reservations</p>
        </div>
      </Jumbotron>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </div>
  )
}

export default BookingPage