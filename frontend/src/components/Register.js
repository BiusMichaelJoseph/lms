// Register.js
import React, { useState } from 'react';
import { X, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file for styling
import { Router } from '@material-ui/icons';

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      repeatPassword: e.target.repeatPassword.value,
    };
    console.log('Registration form submitted:', formData);
    // Send the data to your backend here
  };

  return (
    <Router>
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Welcome to Code-Joy</h1>
        <p className="register-info">
          Please fill in this form to create a parent account. By creating an account, you agree to our <a href="#" className="terms-link">Terms & Privacy</a>.
        </p>
        <p className="register-info">
          If you are a student, please register on the <a href="#" className="student-link">student page</a>.
        </p>
        <button
          onClick={handleOpenModal}
          className="register-button"
        >
          Register
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Create Account</h2>
                <button onClick={handleCloseModal} className="close-modal">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="modal-form">
                <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <div className="input-container">
                    <User className="input-icon" size={20} />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      className="input-field"
                      placeholder="Enter Username"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-container">
                    <Mail className="input-icon" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-container">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      required
                      className="input-field"
                      placeholder="Enter Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="toggle-password"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="repeatPassword">Repeat Password</label>
                  <div className="input-container">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showRepeatPassword ? "text" : "password"}
                      id="repeatPassword"
                      name="repeatPassword"
                      required
                      className="input-field"
                      placeholder="Repeat Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                      className="toggle-password"
                    >
                      {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="checkbox"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                >
                  Register
                </button>
              </form>

              <div className="modal-footer">
                <span>
                  Already have an account?{' '}
                  <Link to="/login" className="login-link">Login here</Link>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </Router>
  );
};

export default Register;
