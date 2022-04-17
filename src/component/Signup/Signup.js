import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
      <div>
        <div className="form-container">
          <div className="form">
            <form className="" action="">
              <label htmlFor="name">User name</label>
              <br />
              <input type="text" placeholder="User name" />
              <br />
              <label htmlFor="name">Email</label>
              <br />
              <input type="email" name="email" id="" placeholder="email" />
              <br />
              <label htmlFor="name">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <br />

              <input className="submit" type="submit" value="submit" />
            </form>
          </div>
          <div className="or">
            <div className="line1"></div>
            <div>or</div>
            <div className="line2"></div>
          </div>
          <div className="btn">
            <button>log in with google</button>
          </div>
        </div>
      </div>
    );
};

export default Signup;