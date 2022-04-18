import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Signup.css';

const Signup = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

   
  
  
  
  const createEmail = (event) => {
      
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            emailVerifide();
            setError(`your varification link send to ${email}`)
            
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    };
    const emailset = (event) => {
        setEmail(event.target.value)
    }
    const passwordset = (event) => {
        setPassword(event.target.value)
    }

  
  

    const googlesignin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
           navigate("/");
        })
        .catch((error) => {
          setError(error);
        });
    };

  const emailVerifide = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setEmail('');
      setPassword('');
      setError('')
     navigate("/");
  });
}

    return (
      <div className="margin">
        <div className="form-container">
          <div className="width">
            <h1 className="center">Plese signup</h1>
          </div>
          <div className="form">
            <form className="" onSubmit={createEmail}>
              <label htmlFor="name">User name</label>
              <br />
              <input type="text" placeholder="User name" />
              <br />
              <label htmlFor="name">Email</label>
              <br />
              <input
                onBlur={emailset}
                type="email"
                name="email"
                id=""
                placeholder="email"
                required
              />
              <br />
              <label htmlFor="name">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
                onBlur={passwordset}
              />
              <br />

              <input className="submit" type="submit" value="submit" />
              <p className="errorMessage">{error}</p>
            </form>
          </div>
          <div className="or">
            <div className="line1"></div>
            <div>or</div>
            <div className="line2"></div>
          </div>
          <div className="btn">
            <button onClick={googlesignin}>Sign up with google</button>
          </div>
          <div className="width">
            <Link className="center" to={"/login"}>
              already have an acount (login)
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Signup;