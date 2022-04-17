import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Navbar.css';

const Navbar = () => {
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
          
           <Link className="nav-link" to={"login"}>
              Log in
            </Link>
          <Link className="nav-link" to={"signup"}>
            Sign up
        </Link>
        <button className="nav-link" onClick={signout}>
              Sign out
            </button>
        </div>
      </div>
    );
};

export default Navbar;