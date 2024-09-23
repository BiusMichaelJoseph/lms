import React, { useState } from 'react';
import './Register.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = {
      username: e.target.uname.value,
      email: e.target.email.value,
      password: e.target.psw.value,
      repeatPassword: e.target.psw_repeat.value,
    };
    console.log('Registration form submitted:', formData);
  };

  return (
    <div>
      <h1>HELLO AND WELCOME TO CODE-JOY</h1>
      <h2><p>Please fill in this form to create a parent account.</p>
      <p>By creating an account, you agree to our <a href="#">Terms & Privacy</a>.</p>
      <p>If you are a student, kindly be sure to register on the <a href='#'>student page</a></p>
      </h2>
      <button className='button' onClick={handleOpenModal}>Register</button>

      {showModal && (
        <div className="modal">
          <span
            className="close"
            onClick={handleCloseModal}
            title="Close Modal"
          >
            &times;
          </span>

          <form className="modal-content animate" onSubmit={handleSubmit}>
            <div className="imgcontainer">
              <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="email"><b>Email</b></label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label htmlFor="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <label htmlFor="psw_repeat"><b>Repeat Password</b></label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw_repeat"
                required
              />

              <button className='button' type="submit">Register</button>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  name="remember"
                />{' '}
                Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button
                type="button"
                onClick={handleCloseModal}
                className="cancelbtn"
              >
                Cancel
              </button>
              <span className="psw">
                Already have an account? <a href="#">Login here</a>
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
