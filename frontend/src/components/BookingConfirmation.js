import React, { useEffect, useMemo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import sendSMS from '../utils/sendSMS';
import { UserContext } from '../contexts/UserContext'; // Import the UserContext
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const location = useLocation();

  const selectedSeats = useMemo(() => location.state?.selectedSeats || [], [location.state]);
  const totalAmount = useMemo(() => location.state?.totalAmount || 0, [location.state]);
  const { userEmail } = useContext(UserContext); // Use the context to get the user email

  useEffect(() => {
    if (userEmail) {
      const messageContent = `Your seats ${selectedSeats.join(', ')} have been booked. Total Amount: Rs.${totalAmount}`;

      sendSMS(
        userEmail,
        messageContent
      )
        .then((response) => {
          console.log('SMS sent successfully', response.data);
        })
        .catch((error) => {
          console.error('Failed to send SMS', error);
        });
    }
  }, [userEmail, selectedSeats, totalAmount]);

  return (
    <div className="booking-confirmation">
      <div className="message-box">
        <h1>Yay!</h1>
        <p>Your Seats are booked</p>
        <p>Enjoy your upcoming journey!</p>
        <p>The ticket details have been sent to your phone</p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
