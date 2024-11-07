import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  // Verificăm dacă utilizatorul este logat și navigăm în funcție de starea sa
  useEffect(() => {
    if (username) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [username, navigate]);

  const handleLogout = () => {
    setUsername("");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route
          path="/home"
          element={
            username ? (
              <div className="home-container">
                <h2>Welcome, {username}</h2>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
                <FileUpload setFiles={setFiles} />
                <FileList files={files} setFiles={setFiles} />
              </div>
            ) : (
              <Login setUsername={setUsername} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
