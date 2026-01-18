import React from "react";
import "../styles/profile.css"
import profilePic from "../public/imgs/profile.jpg";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Profile() {
  return (
    <div className="container-profile">
        <div className="profile">
            <img className="profileimg" src={profilePic}/>
        <h1 className="profile-name">Nuutti Katajala</h1>
        <div className="profile-bio">
            Full stack ohjelmoija, opiskelija.
        </div>
        <div className="spacer"></div>
        <div className="profile-slogan"> tekemällää oppii!</div>
        <div className="profile-title">Tieto- ja viestintätekniikka opiskelija</div>
        <div className="profile-title2">Ohjelmisto kehittäjä</div>
        <div className="minispacer"></div>
        <div className="profile-socials">
            <FaGithub size={20} />
            <FaLinkedin size={20} />    
            <FaPhone size={20} />
        </div>
        <div className="spacer2"></div>
        <button className="profile-btn">Ota yhteyttä</button>
        </div>
    </div>

  );
}
export default Profile;