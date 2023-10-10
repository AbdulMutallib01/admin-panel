import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                  />
                )}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                )}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minus natus est.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign Up
            </button>
          </div>
          <img src="./img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
