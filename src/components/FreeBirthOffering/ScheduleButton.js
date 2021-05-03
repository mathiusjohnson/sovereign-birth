import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleButton = () => {
  return (
    <div>
      <Link to="/contact" className="btn btn-primary uppercase text-base md:text-2xl">Schedule a Free Connection Call!</Link>
    </div>
  );
};

export default ScheduleButton;