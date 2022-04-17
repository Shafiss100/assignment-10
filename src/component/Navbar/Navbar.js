import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
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
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navbar;