import React from "react";
import "../styles/mainapp.css";
import LogoSlider from "../utils/logoslider.jsx";




function Main() {

  const clients = [
    { attributes: { clientName: 'Client 1', logo: '/imgs/React.png' } },
    { attributes: { clientName: 'Client 2', logo: '/imgs/CSS3.png' } },
    { attributes: { clientName: 'Client 3', logo: '/imgs/GitHub.png' } },
    // Add more clients as needed
  ];

  return (
    <div className="content text-center">
      <div className="main-content">
        <h1><span className="word-highlight">Sinun</span> tuleva työntekijä?</h1>
        <p>
          Tutustu portfolioon ja ota yhteyttä!
        </p>
      </div>
      <div className="spacer"></div>
      <div className="LogoSlider">
        <LogoSlider clientsContent={[
          ...clients
        ]} />
      </div>
      <div className="contact-section">
        <h2>Mitä haluan ja kuka Olen</h2>
        <p>
          Olen ohjelmistokehityksestä kiinnostunut tekijä, jolla on kokemusta Windows Forms -sovelluksista, web-kehityksestä ja tietokantojen käytöstä.
          Teen selkeitä, toimivia ja käyttäjäystävällisiä ratkaisuja – opin nopeasti ja kehitän osaamistani jatkuvasti.
        </p>
      </div>
      <div className="about-section">
        <h2>Tietoja</h2>
        <p>
          Olen Nuutti Katajala, full stack -ohjelmoija ja opiskelija.
        </p>
      </div>
      <div className="projects-section">
        <h2>Projektit</h2>
        <p>
          Tässä osiossa voit nähdä projektini.
        </p>
      </div>
    </div>
  );
}

export default Main;