// // src/components/Home.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import './return-content.css';

// // Import images
// import bus1 from '../assets/bus1.jpeg';
// import bus2 from '../assets/bus2.jpg';
// import bus3 from '../assets/bus3.jpg';
// import bus4 from '../assets/bus4.jpeg';
// import bus5 from '../assets/bus5.jpeg';
// import bus6 from '../assets/bus6.jpeg';
// import bus7 from '../assets/bus7.jpeg';
// import bus8 from '../assets/bus8.jpeg';
// import bus9 from '../assets/bus9.jpeg';
// import bus10 from '../assets/bus10.jpeg';

// const Home = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const areas = ['Chennai', 'Salem', 'Trichy', 'Coimbatore', 'Erode'];
//   const busImages = [bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9, bus10];

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     const today = new Date().toISOString().split('T')[0];
//     if (selectedDate < today) {
//       setErrorMessage('Select a date from today onwards');
//     } else {
//       setErrorMessage('');
//       setDate(selectedDate);
//     }
//   };

//   const handleButtonClick = () => {
//     if (from === to) {
//       setErrorMessage('Same area is not possible');
//     } else {
//       setErrorMessage('');
//       // Redirect or perform other action here
//     }
//   };

//   return (
//     <div className="home">
//       <div className="carousel">
//         <div className="carousel-track">
//           {busImages.concat(busImages).map((src, index) => (
//             <img key={index} src={src} alt={`bus ${index + 1}`} />
//           ))}
//         </div>
//       </div>
//       <div className="highlight-box">
//         <h1>Welcome to Bus Ticket Booking</h1>
//         <div>
//           <label>
//             From:
//             <select value={from} onChange={(e) => setFrom(e.target.value)}>
//               <option value="" disabled>Select Area</option>
//               {areas.map((area) => (
//                 <option key={area} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             To:
//             <select value={to} onChange={(e) => setTo(e.target.value)}>
//               <option value="" disabled>Select Area</option>
//               {areas.map((area) => (
//                 <option key={area} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Date:
//             <input
//               type="date"
//               value={date}
//               onChange={handleDateChange}
//               min={new Date().toISOString().split('T')[0]} // Set the minimum date to today
//             />
//           </label>
//         </div>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <Link to={`/buses?from=${from}&to=${to}&date=${date}`}>
//           <button onClick={handleButtonClick} disabled={!from || !to || !date}>View Available Buses</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;// src/components/Home.js// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import './return-content.css';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();

  const areas = ['Chennai', 'Salem', 'Trichy', 'Coimbatore', 'Erode'];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];
    if (selectedDate < today) {
      setErrorMessage('Select a date from today onwards');
    } else {
      setErrorMessage('');
      setDate(selectedDate);
    }
  };

  useEffect(() => {
    if (from === to && from && to) {
      setErrorMessage('Pickup and drop locations cannot be the same');
      setIsButtonDisabled(true);
    } else if (!from || !to || !date) {
      setIsButtonDisabled(true);
      setErrorMessage('');
    } else {
      setIsButtonDisabled(false);
      setErrorMessage('');
    }
  }, [from, to, date]);

  const handleLogout = () => {
    // Simulate logging out by clearing authentication state (e.g., clear tokens)
    navigate('/');
    alert('You have successfully logged out');
  };

  return (
    <div className="home">
      <div className="logout-container">
        <button className="logout-button" onClick={() => setShowLogoutDialog(true)}>Logout</button>
      </div>
      {showLogoutDialog && (
        <div className="overlay">
          <div className="logout-dialog">
            <p>Are you sure you want to log out?</p>
            <button className="confirm-button" onClick={handleLogout}>OK</button>
            <button className="cancel-button" onClick={() => setShowLogoutDialog(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="carousel">
        <div className="carousel-track">
          {/* Add images or other carousel content here */}
        </div>
      </div>
      <div className="highlight-box">
        <h1>Welcome to Swamy Ayyappa Travels</h1>
        <div className="form-row">
          <label>
            From:
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="" disabled>Select Area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
          <label>
            To:
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="" disabled>Select Area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]} // Set the minimum date to today
            />
          </label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Link to={`/buses?from=${from}&to=${to}&date=${date}`}>
          <button disabled={isButtonDisabled}>View Available Buses</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
