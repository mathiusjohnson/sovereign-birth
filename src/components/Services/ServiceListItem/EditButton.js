import React from 'react';

const EditButton = ({isLoggedIn, onEditClicked}) => {
    return (
        <div>
            {isLoggedIn && (
              <div onClick={() => onEditClicked()} className="btn btn-primary m-4 bg-black text-lg text-black">Edit</div>
            )}
        </div>
    );
};

export default EditButton;