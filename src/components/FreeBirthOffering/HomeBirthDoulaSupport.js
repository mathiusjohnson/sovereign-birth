import React from 'react';
import HomeBirthList from './HomeBirthList';
import ScheduleButton from './ScheduleButton';

const HomeBirthDoulaSupport = () => {
  return (
    <div className="bg-whitesmoke flex flex-col items-center mt-12 pb-12">
      <div className="w-3/4">
        <h3 className="text-3xl my-8">Homebirth Doula Support</h3>
        <div className="text-xl text-dimgray space-y-8 mb-8">
          <p>Homebirth doula support is for those who value the wisdom of their body to birth physiologically without intervention, yet have hired a licensed midwife to attend their birth.</p>
          <p>Midwifery is evolving as an increasingly medicalized profession, yet still offered as care to low risk pregnant people who desire physiological birth. You may be surprised to know that many licensed midwives have never attended a physiological birth and/or do not have the capacity to best support this process at every stage of the journey. I understand the hesitation many people have in birthing unassisted, yet truly want an undisturbed birth. My intention is focused on offering education & birth support to offer guidance in having the most undisturbed birth possible, while consciously knowing that challenges do exist in making that vision possible when journeying through birth in the presence of a medical provider.</p>
          <p>As a homebirth doula I offer the following:</p>
          <HomeBirthList />
        </div>
        <ScheduleButton />
      </div>
    </div>
  );
};

export default HomeBirthDoulaSupport;