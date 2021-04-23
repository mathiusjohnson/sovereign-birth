import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleButton from './ScheduleButton';

const ConnectionCallCTA = () => {
  const topHeader = "I believe pregnancy and birth are sacred & healthy life stages that are best preserved when aligned with the wild-instinctive intelligence of the body."

  return (
    <div className="flex flex-col items-center bg-whitesmoke py-12">
      <div className="space-y-8 w-3/4">
        <h3 className="text-3xl">{topHeader}</h3>
        <p className="text-xl">Does your birth vision include birthing at home,  in a love-filled and respectful environment, witnessed by those who believe in your capacity to have a physiological birth?</p>
        <p className="text-xl">YOUR birth vision is within reach! Whether you are newly pregnant, midway through, or on the horizon of postpartum, you hold the power to dictate your path at any stage of the journey.</p>
        <ScheduleButton />
      </div>
    </div>
  );
};

export default ConnectionCallCTA;