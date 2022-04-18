import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Navbar.css';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signout = () => {
    signOut(auth)
      .then( ()=> {
         navigate("/login");
      })
      .catch((error) => {});
  }; 
    return (
      <div className="nav-container">
        <div>
          <h1>Photo World</h1>
        </div>
        <div>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className="nav-link" to={"/checkout"}>
            Checkout
          </Link>
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
          <Link className="nav-link" to={"/blog"}>
            Blog
          </Link>
          {!user? (
            <Link className="nav-link" to={"login"}>
              Log in
            </Link>
          ) : (
            <button className="nav-link" onClick={signout}>
               Sign out 
            </button>
          )}



          {/* <Link className="nav-link" to={"login"}>

          </Link>
          <Link className="nav-link" to={"signup"}>
          </Link>
          <button className="nav-link" onClick={signout}>Sign out
          </button> */}


        </div>
      </div>
    );
};

export default Navbar;