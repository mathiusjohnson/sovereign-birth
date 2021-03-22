import React, { useState } from 'react';
import { Link } from "react-router-dom";import fire from '../../fire.js';

const AdminLogin = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut()
  };

  console.log("logged in is: ", isLoggedIn);

  return (
    <div className="flex justify-center hover:text-black">
      {!isLoggedIn
        ? (
          <Link to='/login'>
            Admin
          </Link>
        ) 
        : (
          <>
          <span onClick={signOut}>
            <button href="#">Sign out</button>
          </span>
            <Link to='/AddNumber'>
              Add Service
            </Link>
          </>
        )}
    </div>
  );
};

export default AdminLogin;