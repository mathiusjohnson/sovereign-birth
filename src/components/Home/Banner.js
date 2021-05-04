import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const ctaText = 'SOVEREIGN BIRTH is the wisdom that pregnant & birthing people are the ultimate authority over their body, their pregnancy, and their birth experience.'
  return (
    <div className="py-16 px-20 w-full bg-whitesmoke">
      <div className="container mx-auto flex flex-col justify-center text-xl md:text-2xl space-y-4">
        <p className="italic text-gray-400 text-center my-auto ">{ctaText}</p>
        <p className="italic text-gray-400 text-center my-auto ">Are you ready to claim your birth sovereignty?</p>
        <div className="flex justify-center uppercase">
          <Link to='/offerings' className="btn btn-primary">Yes!</Link>
        </div>
      </div> 
    </div>
  );
};

export default Banner;