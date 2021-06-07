import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import FreeBirthList from './FreeBirthList';
import ScheduleButton from './ScheduleButton';

const FreeBirthSupport = () => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
       <button onClick={log}>Log editor content</button>        <h3 className='text-3xl my-8'>Freebirth Support</h3>
        <div className="text-xl text-dimgray space-y-8 mb-8">
          <p>What is freebirth? Freebirth is birthing without the presence of a licensed medical provider.  This type of birth offers the birther full autonomy to have an undisturbed-physiological birth and hold the early postpartum in a container of pure sacredness.</p>
          <p>My freebirth support is designed for YOU.  We will visit in person or virtually once a month throughout your pregnancy with the option to connect with me via e-mail & phone at any time.  I am here for YOU as a mentor & friend who believes in your freebirth vision.</p>
          <FreeBirthList />
          <p>Prenatal visits are typically 90 min - 2 hours</p>
          <p>Postpartum visits are typically at day 1, 4, 9 and then once a week thereafter until day 40. The type of postpartum support I offer depends on your desires.  Common forms of support include; holding space to listen to your birth story as well as to receive questions, concerns, and how you are navigating your sense of Self now that you have crossed the birth threshold.  I am happy to prepare light meals, gather groceries and other items that you are in need of, and care for baby so that you can have time to nourish yourself with a bath and / or nap. Postpartum care is about helping support your healing from a holistic perspective and show up in true authenticity as a fellow mother, friend, and birth worker.</p>
          <p>Postpartum visits are typically 90 min - 2 hours.</p>
          <p className="italic">I am not a medical care provider. I believe birth is not a medical event and safest when experienced outside of the medical paradigm. I Intentionally do not hold a professional license because I value birther-centred care and want to provide support that is truly in service of birthing people. If you are looking for someone to provide medical care prenatally, during your birth, and / or postpartum, please seek the advice and care of  a licensed  medical care provider.</p>
        </div>
        <ScheduleButton />
      </div>
    </div>
  );
};

export default FreeBirthSupport;