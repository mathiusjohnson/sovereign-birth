import React from 'react';

const TextBodySegment = ({segment}) => {
  if (segment.length === 0) {
    return <br></br>
  } else {
    return (
      <p>
        {segment}
      </p>
    );
  }
};

export default TextBodySegment;