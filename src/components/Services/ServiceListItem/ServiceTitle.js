import React from 'react';
import { Link } from "react-router-dom";
import { saveState } from '../../../helpers/localStorage';

const ServiceTitle = ({id, title}) => {
  return (
    <h3 className="text-lg md:text-3xl">
      <Link to={`/service/${id}`} onClick={() => saveState(id)}>
        <p className="no-underline hover:opacity-70">{title}</p>
      </Link>
    </h3>
  );
};

export default ServiceTitle;