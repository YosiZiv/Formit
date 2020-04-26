import React from "react";
import { connect } from "react-redux";
import heartImage from "../../assets/pattern-4008915_1280.png";
import formImage from "../../assets/clipboard-3590228_1280.png";
import "./main.css";
import { NavLink } from "react-router-dom";
const Main = ({ isAuth }) => (
  <div className='main-container'>
    <div className='main-header'>
      <h2>Discover new way To create forms</h2>
      <label>Easy sign up no need any verifications</label>
    </div>
    <div className='main-content'>
      <div className='main-signup'>
        <div className='main-image'>
          <img src={formImage} />
        </div>
        {!isAuth ? (
          <div className='main-button'>
            <NavLink to='/register'>
              <button className='btn btn-primary'>Start</button>
            </NavLink>
          </div>
        ) : (
          <div className='main-button'>
            <NavLink to='/formBuild'>
              <button className='btn btn-danger text-center'>Build Form</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  </div>
);
const mapStateToProps = ({ ui: { isAuth } }) => {
  return { isAuth };
};
export default connect(mapStateToProps, null)(Main);
