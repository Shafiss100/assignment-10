import {
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  })
  const signinEmail = (event) => {
    
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
        setUser(user);
        setEmail("");
        setPassword("");
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

  const changepassword = () => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setError(`email send to ${email}`);
        })
        .catch((error) => {;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }



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
      <div className="width">
        <h1 className="center">please Login</h1>
      </div>
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
            <button className="reset-btn" onClick={changepassword}>
              reset password
            </button>
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
        <div className="width">
          <Link className="center" to={"/signup"}>
            create new acount
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
