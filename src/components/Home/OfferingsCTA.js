import React from 'react';
import { Link } from 'react-router-dom';

const OfferingsCTA = () => {
  const ctaText = "Birth sovereignty requires conscious-continual exploration of all that is intuitive, instinctual, and aligned with your desires. My offerings are centred on supporting you in unveiling & illuminating your innate inner knowing so that your journey feels nourishing and supportive."
  return (
    <div className="text-center space-y-4">
      <h3 className="text-3xl uppercase">Offerings</h3>
      <p className="mb-12">{ctaText}</p>
      <div>
        <Link to='/offerings' rel="noreferrer" className="btn btn-primary text-base md:text-2xl leading-5 m-2  md:m-4 mt-12">
          Work With Me
        </Link>
      </div>
    </div>
  );
};

export default OfferingsCTA;