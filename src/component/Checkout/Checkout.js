import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>your email is "{user?.email}"</h1>
        </div>
    );
};

export default Checkout;