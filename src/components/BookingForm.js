import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const ConfirmBook = useNavigate();

  const validateForm = () => {
    // Perform basic form validation
    if (userName.trim() === '' || email.trim() === '' || !isValidEmail(email)) {
      alert('Please fill in all fields with valid information.');
      return false;
    }
    return true;
  };

  const isValidEmail = (value) => {
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleBookTicket = () => {
    if (validateForm()) {
      // Handle booking ticket logic here
      // Use local storage to store user details
      const bookingDetails = {
        showId: id,
        userName,
        email,
      };
      localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

      ConfirmBook("/confirmation");
    }
  };

  const handleCancel = () => {
    // Redirect to the summary page
    ConfirmBook(`/show/${id}`);
  };

  return (
    <div className='form-container'>
      <div className='form-mid'>
      <h2>Booking Form</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id='username'
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={handleBookTicket}>
          Confirm Booking
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      </div>
    </div>
  );
};

export default BookingForm;
