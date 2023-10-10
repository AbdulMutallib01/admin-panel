import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "./Register.module.scss";

const Register = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <Controller
                name="signupUsername"
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
              <i className="fas fa-envelope"></i>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                )}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <Controller
                name="signupPassword"
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
            <input type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
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
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minus natus est.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign In
            </button>
          </div>
          <img src="./img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
