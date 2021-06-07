import React from 'react';

const AddButton = ({isLoggedIn, onAddClicked}) => {
    return (
        <div>
              <div onClick={() => onAddClicked()} className="btn btn-primary m-4 bg-black text-lg text-black">Add</div>
        </div>
    );
};

export default AddButton;