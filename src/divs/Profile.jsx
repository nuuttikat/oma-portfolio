import React, { useState } from "react";
import "../styles/profile.css"
import profilePic from "/imgs/profile.jpg";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import cvPdf from "../../public/CV_Nuutti_Katajala.pdf";

function Profile() {
    const [showContact, setShowContact] = useState(false);
  return (
    <div className="container-profile">
        <div className="profile">
            <div className="profile-inner"></div>
                <img className="profileimg" src={profilePic}/>
            <h1 className="profile-name">Nuutti Katajala</h1>
            <div className="profile-bio">
                Full stack ohjelmoija, opiskelija.
            </div>
            <div className="spacer"></div>
            <div className="profile-slogan"> tekemällää oppii!</div>
            <div className="profile-title">Tieto- ja viestintätekniikka opiskelija</div>
            <div className="profile-title2">Valmistumis ajankohta kesä 2026</div>
            <div className="profile-title2">Ohjelmisto kehittäjä</div>
            <div className="minispacer"></div>
            <div className="profile-socials">
                <a href="https://github.com/NuuttiKat" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub">
                <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nuutti-katajala-6817a5335/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                </a>
    
                <a href="tel:+358407214130" 
                aria-label="Phone">
                <FaPhone size={20} />
                </a>
            </div>
            <div className="minispacer"></div>
            <div className="cv-button">
            <a href={cvPdf} download>
             📄 Lataa CV
            </a>
            </div>
            <div className="spacer2"></div>
            <button
            className="profile-btn"
            onClick={() => setShowContact(!showContact)}
            >
            Ota yhteyttä
            </button>
    
            {showContact && (
              <div className="contact-dropdown">
                <a href="mailto:email@example.com">
                  📧 Email
                </a>
                <a href="tel:+358407214130">
                  📞 Soita
                </a>
              </div>
            )}


        </div>
    </div>

  );
}
export default Profile;
