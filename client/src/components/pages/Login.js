import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./login.css";
import Input from "../layouts/Input";
import Button from "../layouts/Button";
import Messages from "../layouts/Messages";
import {
  loginInputChange,
  loginInputValidation,
  userLogin,
  clearLoginState,
} from "../../redux/actions/login";
import { clearUi, clearMessages } from "../../redux/actions/ui";
import Spinner from "../layouts/Spinner";
import { removeErrorFromObjects } from "../../utility";
const Login = ({
  history,
  loginForm,
  messages,
  redirect,
  loginInputChange,
  loginInputValidation,
  userLogin,
  clearLoginState,
  clearMessages,
  clearUi,
}) => {
  useEffect(
    () => () => {
      clearUi();
      clearLoginState();
    },
    [clearUi, clearLoginState]
  );
  redirect && history.push(redirect);
  const handleInputChange = (event, id) => {
    const { value } = event.currentTarget;
    if (Object.keys(messages).length) {
      clearMessages();
    }
    loginInputChange({ id, value });
  };
  const handleInputFocus = (event, id, validation) => {
    const { value } = event.currentTarget;
    loginInputValidation({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    const data = removeErrorFromObjects(loginForm);
    userLogin(data);
  };
  return (
    <div className='login-container'>
      <div className='login-form-wrapper'>
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
            <div className='login-submit text-center'>
              <Button
                onClick={handleFormSubmit}
                type='button'
                className='btn btn-primary'
                text='Login'
              />
            </div>
          </form>
          <Spinner />
          <Messages messages={messages} color='#EC1414' />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({
  login: { loginForm },
  ui: { redirect, messages },
}) => {
  return { loginForm, redirect, messages };
};

export default connect(mapStateToProps, {
  loginInputChange,
  loginInputValidation,
  userLogin,
  clearMessages,
  clearLoginState,
  clearUi,
})(Login);
