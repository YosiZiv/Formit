import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./login.css";
import Input from "../layouts/Input";
import {
  loginInputChange,
  loginInputValidation,
  userLogin,
  clearLoginState,
} from "../../redux/actions/login";
import { deleteMessage, clearUi } from "../../redux/actions/ui";
import Spinner from "../layouts/Spinner";
const Login = ({
  loginForm,
  loginInputChange,
  loginInputValidation,
  userLogin,
  message,
  deleteMessage,
  loading,
  clearLoginState,
  clearUi,
  redirect,
}) => {
  useEffect(
    () => () => {
      clearUi();
      clearLoginState();
    },
    []
  );

  const handleInputChange = (event, id) => {
    const { value } = event.currentTarget;

    if (message) {
      deleteMessage();
    }
    loginInputChange({ id, value });
  };
  const handleInputFocus = (event, id, validation) => {
    const { value } = event.currentTarget;

    loginInputValidation({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    const payload = {
      email: loginForm.email.value,
      password: loginForm.password.value,
    };
    userLogin(payload);
  };
  return (
    <div className='login-container'>
      <div className='login-form-wrapper'>
        {redirect && <Redirect to={redirect} />}
        <div className='login-header'>
          <h1>Login</h1>
        </div>
        <div className='login-form'>
          <form>
            <Input
              id='email'
              name='Email'
              type='email'
              error={loginForm.email?.error}
              required
              value={loginForm.email?.value ?? ""}
              onChange={(e) => handleInputChange(e, "email")}
              onBlur={(e) =>
                handleInputFocus(e, "email", {
                  isRequired: true,
                  isEmail: true,
                })
              }
            />
            <Input
              id='password'
              name='Password'
              type='password'
              error={loginForm.password?.error}
              required
              value={loginForm.password?.value ?? ""}
              onChange={(e) => handleInputChange(e, "password")}
              onBlur={(e) =>
                handleInputFocus(e, "password", {
                  isRequired: true,
                  minLength: 6,
                  maxLength: 30,
                })
              }
            />
            <div className='mt-5 text-center'>
              <button
                disabled={loading}
                onClick={handleFormSubmit}
                type='button'
                className='btn btn-primary  w-25'
              >
                Login
              </button>
            </div>
          </form>
          {loading && <Spinner />}
          {message && (
            <div className='login-message text-center'>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  login: { loginForm },
  ui: { message, loading, redirect },
}) => {
  return { loginForm, message, loading, redirect };
};

export default connect(mapStateToProps, {
  loginInputChange,
  loginInputValidation,
  userLogin,
  deleteMessage,
  clearLoginState,
  clearUi,
})(Login);
