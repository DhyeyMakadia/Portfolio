import React, { useEffect } from "react";

const Login = () => {
  return (
    <>
      <div className="bg-login z-10">
        <div className="background-shapes"></div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center z-20">
        <div className="login-box">
        <div className="font-mono text-xl text-center mb-10">Login</div>
          <form>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Username</label>
              <p className="text-red-light text-sm pt-1 font-sans">This field is required!</p>
            </div>
            <div className="user-box">
              <input type="password" name="" required />
              <label>Password</label>
            </div>
            <div className="text-center">
              <a href="#">
                SEND
                <span></span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
