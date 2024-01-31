import React, { useEffect } from 'react';

const ConfirmationPage = () => {
  // Fetch booking details from local storage
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails')) || {};

  useEffect(() => {
    // Clear the booking details from local storage after displaying confirmation
    localStorage.removeItem('bookingDetails');
  }, []);

  return (
    <div className='confirmation'>
      <h2>Booking Confirmation</h2>
      <p>Show ID: {bookingDetails.showId}</p>
      <p>Your Name: {bookingDetails.userName}</p>
      <p>Email: {bookingDetails.email}</p>
      {/* Add any other confirmation details here */}
    </div>
  );
};

export default ConfirmationPage;
