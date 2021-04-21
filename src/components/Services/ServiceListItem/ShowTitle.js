import React from 'react';
import { Link } from "react-router-dom";
import { saveState } from '../../../helpers/localStorage';

const ShowTitle = ({id, title}) => {
  return (
    <h1 className="text-lg">
      <Link to={`/service/${id}`} onClick={() => saveState(id)}>
        <p className="no-underline font-bold hover:opacity-70">{title}</p>
      </Link>
    </h1>
  );
};

export default ShowTitle;