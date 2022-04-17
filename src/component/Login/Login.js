import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signinEmail = (event) => {
    
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
        setUser(user);
        navigate('/');

      })
      .catch((error) => {
          const errorMessage = error.message;
        setError(errorMessage);
      });
    };
    
    const emailset = (event) => {
      setEmail(event.target.value);
      console.log(event);
    };
    const passwordset = (event) => {
      setPassword(event.target.value);
      console.log(event);
    };





  const googlesignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
         navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <h1>please Login</h1>
      <div className="form-container">
        <div className="form">
          <form className="" onSubmit={signinEmail}>
            <label htmlFor="name">Email</label>
            <br />
            <input
              onBlur={emailset}
              type="email"
              name="email"
              id=""
              placeholder="email"
            />
            <br />
            <label htmlFor="name">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
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
          <button onClick={googlesignin}>log in with google</button>
        </div>
      </div>
      <p>email: {user.email}</p>
    </div>
  );
};

export default Login;
