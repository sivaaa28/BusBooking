import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qrImage from '../assets/paytmsiva.jpeg';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSeats = location.state?.selectedSeats || [];
  const totalAmount = location.state?.totalAmount || 0;
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedFile(file);
      setFileError(null);
    } else {
      setFileError('Please upload a valid image file.');
    }
  };

  const handlePaymentConfirmation = () => {
    if (uploadedFile) {
      alert('Payment confirmed!');
      navigate('/confirmation');
    } else {
      setFileError('Please upload the payment receipt image.');
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Page (Don't refresh the page)</h1>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p className="total-amount">Total Amount: Rs.{totalAmount}</p>
      <div className="qr-code-container">
        <p>Please scan the QR code below to make the payment:</p>
        <img src={qrImage} alt="QR Code" className="qr-code" />
        <p>Please upload the payment proof for booking:</p>
      </div>
      <div className="upload-container">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {fileError && <p className="error-message">{fileError}</p>}
      </div>
      <button onClick={handlePaymentConfirmation}>Upload Payment Receipt</button>
    </div>
  );
};

export default Payment;
