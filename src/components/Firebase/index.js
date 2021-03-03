import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyATtpaPiwOOQ6-NnNFL5LUvtBRhCcZvZrk",
  authDomain: "sovereign-birth-mailer.firebaseapp.com",
  projectId: "sovereign-birth-mailer",
  storageBucket: "sovereign-birth-mailer.appspot.com",
  messagingSenderId: "1092915835585",
  appId: "1:1092915835585:web:0ce28b0b05512aabd49a40",
  measurementId: "G-7W5C09JHLD"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD

    }
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
  
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }

  return (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen;