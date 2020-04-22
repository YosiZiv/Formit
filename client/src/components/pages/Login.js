import React from "react";
import { connect } from "react-redux";
import Input from "../layouts/Input";
import {
  loginInputChange,
  loginInputValidation,
  userLogin,
} from "../../redux/actions/login";
const Login = ({
  loginForm,
  loginInputChange,
  loginInputValidation,
  userLogin,
}) => {
  const handleInputChange = (event, id) => {
    const { value } = event.currentTarget;
    loginInputChange({ id, value });
  };
  const handleInputFocus = (event, id, validation) => {
    console.log(event, id, validation);
    const { value } = event.currentTarget;
    loginInputValidation({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    console.log(loginForm);
    userLogin(loginForm);
  };

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
              onClick={handleFormSubmit}
              type='button'
              className='btn btn-success w-25'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ login: { loginForm } }) => {
  return { loginForm };
};

export default connect(mapStateToProps, {
  loginInputChange,
  loginInputValidation,
  userLogin,
})(Login);
