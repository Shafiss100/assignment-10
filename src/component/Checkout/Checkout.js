import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
      <div className="margin ">
        <h2>email : {user?.email}</h2>
        <h2>name : {user?.displayName}</h2>
        
        <div className="width">
          <img className="center" src={user?.photoURL} alt="" />
        </div>
      </div>
    );
};

export default Checkout;