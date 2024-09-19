import React, { useState } from 'react';
import './Login.css'; 

function Login(){
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  return (
    <div>
      <button onClick={handleOpenModal}>Login</button>

      {showModal && (
        <div className="modal">
          <span
            className="close"
            onClick={handleCloseModal}
            title="Close Modal"
          >
            &times;
          </span>

          <form className="modal-content animate">
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

              <label htmlFor="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
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
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
