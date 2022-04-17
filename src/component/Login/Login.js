import React from 'react';
import './Login.css';

const Login = () => {
    return (
      <div>
        <form action="">
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
          <input type="password" name="password" id="" placeholder="Password" />
          <br />
         
          <input type="submit" value="submit" />
        </form>
      </div>
    );
};

export default Login;