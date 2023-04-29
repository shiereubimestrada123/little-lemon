import React, { useState } from 'react'
import './bookingForm.css'

const BookingForm = ({availableTimes, dispatchOnDateChange, submitData}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests,
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  return (
    <div className='booking-form'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="date"
            id="booking-date"
            name="booking-date"
            min={minimumDate}
            value={date}
            required={true}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <select
            id="booking-time"
            name="booking-time"
            value={time}
            required={true}
            onChange={handleTimeChange}
          >
            {availableTimes.map(times =>
              <option data-testid="booking-time-option" key={times}>
                {times}
              </option>
            )}
          </select>
        </div>
        <div>
          <input
            type="number"
            id="booking-number-guests"
            name="booking-number-guests"
            value={numberOfGuests}
            min={minimumNumberOfGuests}
            max={maximumNumberOfGuests}
            required={true}
            onChange={e => setNumberGuests(e.target.value)}
          />
        </div>
        <div>
          <select
            id="booking-occasion"
            name="booking-occasion"
            value={occasion}
            required={true}
            onChange={e => setOccasion(e.target.value)}
          >
            {occasions.map(occasion =>
              <option data-testid="booking-occasion-option" key={occasion}>
                {occasion}
              </option>
            )}
          </select>
        </div>
        <button
          className="button-primary"
          type="submit"
          // disabled={!areAllFieldsValid()}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default BookingForm