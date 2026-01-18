import React from "react";
import "./Style.css";
import Profile from "./divs/Profile.jsx";
import Main from "./divs/mainapp.jsx";



function App() {
  return (
    <div className="app-container">
      <div className="profile-app">
        <Profile />
      </div>
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
}
export default App;