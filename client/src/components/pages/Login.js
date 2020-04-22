import React, { useEffect } from "react";
import { connect } from "react-redux";
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
    console.log(id, value);
    if (message) {
      console.log("message found", message);
      deleteMessage();
    }
    loginInputChange({ id, value });
  };
  const handleInputFocus = (event, id, validation) => {
    console.log(event, id, validation);
    const { value } = event.currentTarget;

    loginInputValidation({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    console.log(loginForm);
    const payload = {
      email: loginForm.email.value,
      password: loginForm.password.value,
    };
    userLogin(payload);
  };
  console.log(message);

  return (
    <div className='login-container'>
      <div className='login-header mt-2 text-center'>
        <h1>Login</h1>
      </div>
      <div className='login-form p-2'>
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
              handleInputFocus(e, "email", { isRequired: true, isEmail: true })
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
          <div className='mt-2 text-center'>
            <button
              disabled={loading}
              onClick={handleFormSubmit}
              type='button'
              className='btn btn-success w-25'
            >
              Login
            </button>
          </div>
        </form>
        {loading && <Spinner />}
        {message && <div className='login-message text-center'>{message} </div>}
      </div>
    </div>
  );
};
const mapStateToProps = ({
  login: { loginForm },
  ui: { message, loading },
}) => {
  return { loginForm, message, loading };
};

export default connect(mapStateToProps, {
  loginInputChange,
  loginInputValidation,
  userLogin,
  deleteMessage,
  clearLoginState,
  clearUi,
})(Login);
