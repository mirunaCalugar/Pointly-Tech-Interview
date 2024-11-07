import React, { useState } from "react";

const Login = ({ setUsername }) => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name) {
      setUsername(name);
      localStorage.setItem("username", name);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your username"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default Login;
