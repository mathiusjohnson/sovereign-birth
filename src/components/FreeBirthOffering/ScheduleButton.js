import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleButton = () => {
  return (
    <div>
      <Link to="/contact" className="btn btn-primary uppercase">Schedule a Free Connection Call!</Link>
    </div>
  );
};

export default ScheduleButton;