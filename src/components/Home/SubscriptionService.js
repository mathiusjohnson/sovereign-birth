import React, { useState } from 'react';
import emailjs from 'emailjs-com'

const SubscriptionService = () => {
  emailjs.init('user_rivxf7OIBzCWd9dlHiDrz')
  const [btnValue, setBtnValue] = useState('Join!')

  
  const sendEmail = (e) => {
    e.preventDefault();
    setBtnValue('Sending...')
    emailjs.sendForm('service_xcnmobs', 'template_w4hpumc', e.target)
    .then((result) => {
      setBtnValue('Join!')
    }, (error) => {
      setBtnValue('Join!')
      console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <div className="my-12 grid grid-cols-4">
      <div className="col-start-2 col-span-2 flex flex-col space-y-2 md:space-y-8">
        <h3 className="text-4xl text-center uppercase">Stay Connected!</h3>
        <p className="text-xl text-center">Sign up for my newsletter to stay up to date on offerings, receive inspiration for your sovereign journey, shop 
        sales, giveaways and more!</p>
        <form className="contact-form flex justify-between  " onSubmit={sendEmail}>
          {/* <label htmlFor="email"></label> */}
          <input onChange={({target}) => console.log(target.value)} type="email" name="email" className="border-1 rounded w-full" placeholder="Enter email.."></input>
          <button className="btn btn-primary uppercase float-right ml-4">{btnValue}</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionService;