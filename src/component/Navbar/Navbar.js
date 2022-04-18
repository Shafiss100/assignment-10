import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
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
        <div className='links'>
          <CustomLink className="nav-link" to={"/"}>
            Home
          </CustomLink>
          <CustomLink className="nav-link" to={"/checkout"}>
            Checkout
          </CustomLink>
          <CustomLink className="nav-link" to={"/about"}>
            About
          </CustomLink>
          <CustomLink className="nav-link" to={"/blog"}>
            Blog
          </CustomLink>
          {!user ? (
            <CustomLink className="nav-link" to={"/login"}>
              Log in
            </CustomLink>
          ) : (
            <CustomLink onClick={signout} className="nav-link" to={"/login"}>
              Sign out
            </CustomLink>
          )}

          
        </div>
      </div>
    );
};

export default Navbar;