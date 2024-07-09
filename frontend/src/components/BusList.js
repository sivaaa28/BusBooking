import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BusList.css'; // Make sure to import the CSS file

const BusList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from');
  const to = params.get('to');

  // Dummy data for buses
  const buses = [
    { id: 1, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Chennai', to: 'Salem' },
    { id: 2, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Chennai', to: 'Trichy' },
    { id: 3, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Chennai', to: 'Erode' },
    { id: 4, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Chennai', to: 'Coimbatore' },
    { id: 5, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Trichy', to: 'Coimbatore' },
    { id: 6, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Trichy', to: 'Chennai' },
    { id: 7, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Trichy', to: 'Erode' },
    { id: 8, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Trichy', to: 'Salem' },
    { id: 9, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Erode', to: 'Salem' },
    { id: 10, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Erode', to: 'Trichy' },
    { id: 11, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Erode', to: 'Chennai' },
    { id: 12, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Erode', to: 'Coimbatore' },
    { id: 13, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Salem', to: 'Coimbatore' },
    { id: 14, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Salem', to: 'Chennai' },
    { id: 15, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Salem', to: 'Erode' },
    { id: 16, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Salem', to: 'Trichy' },
    { id: 17, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Coimbatore', to: 'Salem' },
    { id: 18, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Coimbatore', to: 'Chennai' },
    { id: 19, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Coimbatore', to: 'Erode' },
    { id: 20, name: 'Swamy Ayyappa Travels', seats: 40, from: 'Coimbatore', to: 'Trichy' },
  ];

  const availableBuses = buses.filter(
    (bus) => bus.from === from && bus.to === to
  );

  return (
    <div className="bus-list-container">
      <div className="bus-list">
        <h1>Available Buses from {from} to {to}</h1>
        <ul>
          {availableBuses.length > 0 ? (
            availableBuses.map(bus => (
              <li key={bus.id}>
                {bus.name} - {bus.seats} seats
                <Link to={`/seats/${bus.name}`}>
                  <button>Select Seats</button>
                </Link>
              </li>
            ))
          ) : (
            <li className="no-buses">No buses available for the selected route.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BusList;
