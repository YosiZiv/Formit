import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./register.css";
import {
  registerInputChange,
  registerInputValidation,
  userRegister,
  clearRegisterState,
} from "../../redux/actions/register";
import { clearUi, clearMessages } from "../../redux/actions/ui";
import Input from "../layouts/Input";
import Spinner from "../layouts/Spinner";
import Button from "../layouts/Button";
import Messages from "../layouts/Messages";
import { removeErrorFromObjects } from "../../utility";
const Register = ({
  history,
  messages,
  redirect,
  registerForm,
  registerFinish,
  registerInputChange,
  registerInputValidation,
  userRegister,
  clearRegisterState,
  clearUi,
  clearMessages,
}) => {
  useEffect(
    () => () => {
      clearUi();
      clearRegisterState();
    },
    [clearUi, clearRegisterState]
  );
  redirect && history.push(redirect);
  const handleInputChange = (event) => {
    const { id, value } = event.currentTarget;
    if (Object.keys(messages).length) {
      clearMessages();
    }
    registerInputChange({ id, value });
  };
  const handleInputFocus = (event, validation) => {
    const { id, value } = event.currentTarget;
    registerInputValidation({ id, value, validation });
  };
  const handleFormSubmit = async () => {
    const data = removeErrorFromObjects(registerForm);
    userRegister(data);
  };
  return (
    <div className='register-container'>
      {!registerFinish ? (
        <div className='register-form-wrapper'>
          <div className='register-header'>
            <h1>Register </h1>
          </div>
          <div className='register-form'>
            <form>
              <Input
                id='name'
                name='Name'
                type='text'
                error={registerForm.name?.error}
                required
                value={registerForm.name?.value ?? ""}
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputFocus(e, {
                    isRequired: true,
                    minLength: 2,
                    maxLength: 30,
                  })
                }
              />
              <Input
                id='email'
                name='Email'
                type='email'
                error={registerForm.email?.error}
                required
                value={registerForm.email?.value ?? ""}
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputFocus(e, {
                    isRequired: true,
                    isEmail: true,
                  })
                }
              />
              <Input
                id='password'
                name='Password'
                type='password'
                error={registerForm.password?.error}
                required
                value={registerForm.password?.value ?? ""}
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputFocus(e, {
                    isRequired: true,
                    minLength: 6,
                    maxLength: 30,
                  })
                }
              />
              <Input
                id='passwordConfirm'
                name='Password Confirm'
                type='password'
                error={registerForm.passwordConfirm?.error}
                required
                value={registerForm.passwordConfirm?.value ?? ""}
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputFocus(e, {
                    isRequired: true,
                    minLength: 6,
                    maxLength: 30,
                  })
                }
              />
              <div className='register-submit text-center'>
                <Button
                  onClick={handleFormSubmit}
                  type='button'
                  className='btn btn-primary'
                  text='Register'
                />
              </div>
            </form>

            <Spinner />
            <Messages messages={messages} color='#EC1414' />
          </div>
        </div>
      ) : (
        <div className='register-complate-container'>
          <h6>Register Complete Thanks!!</h6>
          <div className='register-complate'>
            <NavLink to='/login'>
              <Button type='button' className='btn btn-success' text='Login' />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({
  register: { registerForm, registerFinish },
  ui: { messages, redirect },
}) => {
  return { registerForm, registerFinish, messages, redirect };
};

export default connect(mapStateToProps, {
  registerInputChange,
  registerInputValidation,
  userRegister,
  clearRegisterState,
  clearUi,
  clearMessages,
})(Register);
