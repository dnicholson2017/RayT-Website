import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/schedule-button.css";

const ScheduleAppointmentButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/schedule-appointment'); // Adjust the route path as per your application
  };

  return (
    <div className="button-container">
      <button className="schedule-appointment-button" onClick={handleClick}>
        Schedule An Appointment
      </button>
    </div>
  );
};

export default ScheduleAppointmentButton;
