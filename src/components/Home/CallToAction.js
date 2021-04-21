import React from 'react';
import { Link } from 'react-router-dom';
import callToActionImage from '../../assets/images/DSC_6958.jpg'

const CallToAction = ({titles}) => {

  // console.log('props in cta: ', props.titles);
  console.log(titles);
  const renderedTitles = titles.map((title, index) => {
    return (
      <Link to="/offerings">
        <li key={index} className="text-maximum-blue-green cursor-pointer hover:text-black">{title}
        </li>  
      </Link>
    )
    });
  return (
    <div className=" grid md:grid-cols-2">
     <div className="col-start-1 flex flex-col justify-evenly items-center text-2xl space-y-2 md:space-y-4">
       <ul className="flex flex-col space-y-1 md:space-y-2 text-center font-semibold">
         {renderedTitles}
       </ul>
       <div className="space-y-2 md:space-y-4 flex flex-col justify-center items-center">
          <div className="space-x-4 flex justify-center">
            <input type="text" className="border-2 border-black rounded text-center " size="16" placeholder="Enter email.."></input>
            <button className="btn btn-primary text-base">Submit</button>
          </div>
          <h2 className="text-maximum-blue-green font-semibold text-base text-center w-5/6">Sign up to get my birth affirmation recording for free!</h2>
       </div>
      </div> 
      <div className="flex justify-center mt-2 md:mt-4">
        <div className="w-1/2 rounded">
          <img className="rounded-lg shadow-xl" src={callToActionImage} alt="pregnant belly in white dress facing sideways" />
        </div>
      </div>
     
    </div>
  );
};

export default CallToAction;