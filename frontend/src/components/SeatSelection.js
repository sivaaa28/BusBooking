import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const seatPrices = {
    1: 550, 4: 550, 5: 550, 8: 550, 9: 550, 12: 550, 13: 550, 16: 550,
    17: 550, 20: 550, 21: 550, 24: 550, 25: 550, 28: 550, 29: 550, 32: 550,
    33: 550, 36: 550, 37: 550, 40: 550,
    2: 500, 3: 500, 6: 500, 7: 500, 10: 500, 11: 500, 14: 500, 15: 500,
    18: 500, 19: 500, 22: 500, 23: 500, 26: 500, 27: 500, 30: 500, 31: 500,
    34: 500, 35: 500, 38: 500, 39: 500
  };

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      let updatedSeats;
      let updatedAmount = totalAmount;

      if (prevSelectedSeats.includes(seatNumber)) {
        updatedSeats = prevSelectedSeats.filter(seat => seat !== seatNumber);
        updatedAmount -= seatPrices[seatNumber];
      } else {
        updatedSeats = [...prevSelectedSeats, seatNumber];
        updatedAmount += seatPrices[seatNumber];
      }

      setTotalAmount(updatedAmount);
      return updatedSeats;
    });
  };

  const seats = Array.from({ length: 40 }, (_, i) => i + 1);

  const confirmButtonText = selectedSeats.length === 0
    ? 'Proceed Payment'
    : `Proceed payment for ${selectedSeats.length} ${selectedSeats.length > 1 ? 'seats' : 'seat'} (Total: Rs.${totalAmount})`;

  return (
    <div className="seat-selection">
      <h1>Select Seats </h1>
      <div className="seats">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
            <div className="hover-dialog">
              Rs.{seatPrices[seat]}
            </div>
          </div>
        ))}
      </div>
      {selectedSeats.length > 0 && (
        <div>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
        </div>
      )}
      <button
        className="confirm-button"
        onClick={() => navigate('/payment', { state: { selectedSeats, totalAmount } })}
        disabled={selectedSeats.length === 0}
      >
        {confirmButtonText}
      </button>
    </div>
  );
};

export default SeatSelection;
