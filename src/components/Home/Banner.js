import React from 'react';

const Banner = () => {
  return (
    <div className="bg-van py-16 w-full">
      <div className="flex flex-col justify-center text-2xl space-y-4">
        <h2 className=" font-bold text-white text-center my-auto ">Subscribe to Stay Connected!</h2>
        <div className="flex justify-center space-x-12">
          <input className="border-2 border-black rounded text-center py-2" placeholder="Enter email.."></input>
          <button className="btn btn-primary">Join!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;