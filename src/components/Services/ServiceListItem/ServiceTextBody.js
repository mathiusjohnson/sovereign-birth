import React from 'react';
import TextBodySegment from './TextBodySegment';

const ServiceTextBody = ({text_body}) => {

  let textArr = text_body.split('\n');
  // eslint-disable-next-line array-callback-return
  const fullTextBody = textArr.map((element, index) => {
    // if (element !== "") {
     return <TextBodySegment key={index} segment={element} />
    // }


  });

  return (
    <div className="text-xl text-dimgray p-2 md:p-4 space-y-3">{fullTextBody}</div>
  );
};

export default ServiceTextBody;