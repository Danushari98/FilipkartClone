import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onClose, onSignupOpen, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    setError("");

    setTimeout(() => {
      onSuccess(username); // 🔥 LOGIN SUCCESS
      onClose();
    }, 500);
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <div className="modal-left">
          <h2>Login</h2>
          <p>Get access to your Orders and Coupons</p>
        </div>

        <div className="modal-right">
          <button className="close-btn" onClick={onClose}>✖</button>

          <input
            className="modal-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="modal-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <button className="modal-login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="signup-text">
            New user?
            <span className="signup-link" onClick={onSignupOpen}>
              {" "}Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
