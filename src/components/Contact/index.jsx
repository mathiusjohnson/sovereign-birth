import React from 'react';
import EmailInput from './EmailInput';
import MessageInput from './MessageInput';
import NameInput from './NameInput';

const Contact = () => {
  return (
    <div className="flex justify-center my-12">
      <form className="w-full max-w-lg">  
        <NameInput />
        <EmailInput />
        <MessageInput />
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;