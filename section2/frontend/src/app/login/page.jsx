import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h2 className="text-5xl text-center">Login page</h2>
        <button className="submit-btn" >Login Button</button>
        <button className={classes.btn}>Local</button>

    </div>
  )
}

export default Login;