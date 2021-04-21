import React from 'react';
import birthBelly from '../../assets/images/DSC_6667.jpg'

const Values = () => {
  return (
    <div className="grid md:grid-cols-2 my-4 md:my-24 items-center">
    <div className="mx-4 my-auto">
      <img className="rounded-xl shadow-xl" src={birthBelly} alt="pregnant belly in light pink dress" />
    </div>
    <div className="w-5/6 mx-4 mt-4 md:mt-0 space-y-2">
      <h1 className="text-5xl text-maximum-blue-green uppercase mb-12">Hello and Welcome</h1>
      <h3 className="text-2xl font-semibold">I'm so glad you are here!</h3>
      <div className="space-y-3 leading-7 text-lg overflow-scroll md:overflow-hidden">
        <p> 
        I'm Clara Johnson; mother of 3, Radical Birth Keeper, Homebirth Doula, Prenatal Yoga Teacher, and Craniosacral Practitioner. I have been supporting people in birth for 11 years and currently provide in person care in Squamish BC and virtual support globally.</p>
        <p>If you envision welcoming your baby at home, in love, and in the presence of only those who will honour your birth sovereignty please know you absolutely deserve that journey and I'd love to chat!
        </p>
        <p>I believe with a passion that YOU were made to give birth in health and wholeness, surrounded in love, and with the support of others who believe in YOUR power to do the work.  
        </p>
      </div>
      <a href="/contact" type="button" className="btn btn-primary">Connect With Me</a>
    </div>
  </div>
  );
};

export default Values;