import React from "react";
import heartImage from "../../assets/pattern-4008915_1280.png";
import formImage from "../../assets/clipboard-3590228_1280.png";
import "./main.css";
const Main = () => (
  <div className='main-container'>
    <div className='main-header'>
      <h2>Discover new way To create forms</h2>
      <label>Easy sign up no need any verifications</label>
      <div className='main-background-image-right'>
        <img src={heartImage} />
      </div>
      <div className='main-background-image-left'>
        <img src={formImage} />
      </div>
    </div>
    <div className='main-content'>
      <button className='btn btn-danger'>Sign up</button>
    </div>
  </div>
);
export default Main;
