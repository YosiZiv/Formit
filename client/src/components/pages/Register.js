import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  registerInputChange,
  registerInputValidation,
  userRegister,
} from "../../redux/actions/register";
import { deleteMessage } from "../../redux/actions/ui";
import Input from "../layouts/Input";
import Spinner from "../layouts/Spinner";
import { removeErrorFromObjects } from "../../utility";
const Register = ({
  registerInputChange,
  registerInputValidation,
  registerForm,
  message,
  loading,
}) => {
  const handleInputChange = (event) => {
    const { id, value } = event.currentTarget;
    console.log(id, value);
    if (message) {
      console.log("message found", message);
      deleteMessage();
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
    <div className='login-container'>
      <div className='login-header mt-2 text-center'>
        <h1>Register </h1>
      </div>
      <div className='login-form p-2'>
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
            onChange={(e) => handleInputChange(e, "password")}
            onBlur={(e) =>
              handleInputFocus(e, "password", {
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
            onChange={(e) => handleInputChange(e, "passwordConfirm")}
            onBlur={(e) =>
              handleInputFocus(e, "passwordConfirm", {
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
  register: { registerForm },
  ui: { message, loading },
}) => {
  return { registerForm, message, loading };
};

export default connect(mapStateToProps, {
  registerInputChange,
  registerInputValidation,
})(Register);
