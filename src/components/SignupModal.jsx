import React, { useState } from "react";
import "./SignupModal.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = () => {
    setErrorMsg("");
    setSuccessMsg("");

    if (!username || !password || !confirmPassword) {
      setErrorMsg("⚠️ Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("❌ Passwords do not match");
      return;
    }

    // ✔ Account Created
    setSuccessMsg("🎉 Account Created Successfully!");

    // Clear inputs
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>

      <input
        type="text"
        placeholder="Enter Username"
        className="signup-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Create Password"
        className="signup-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="signup-input"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {errorMsg && <p className="error">{errorMsg}</p>}
      {successMsg && <p className="success">{successMsg}</p>}

      <button className="signup-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Signup;
