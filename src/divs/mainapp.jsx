import React, { useState, useEffect } from "react";
import "../styles/mainapp.css";
import Slider from "../utils/Slider.jsx";
import MediaCard from "../utils/MediaCard.jsx";
import pehutec from "/imgs/pehutec.png";
import kasaan from "/imgs/kasaan.png";




function Main() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=65.0121&longitude=25.4651&current_weather=true";

    fetch(url)
      
      .then((res) => {
        if (!res.ok) throw new Error("Palvelin vastasi virheellä: " + res.status);
        return res.json();
      })
    .then((data) => {
      setWeather(data.current_weather);
    })
    .catch((err) => console.error("API virhe:", err));
}, []);

  return (
    <div className="content text-center">
      <div className="main-content">
        <h1><span className="word-highlight">Sinun</span> tuleva tekijä?</h1>
        <p>
          Erittäin motivoitunut ja oppimis haluinen tekijä.
        </p>
      </div>
      <div className="spacer"></div>
      <div className="Slider">
        <Slider />  
      </div>
      <div className="experience-section">
        <h2>Mitä olen tehnyt ja kenelle?</h2>
        <p>
          Olen toteuttanut pääasiassa projekteja opiskeluun liittyen, mutta myös muutamia freelance töitä.
          Olen tehnyt projekteja mm. Kasaan Oy:lle ja PehuTec Oy:lle. Lisäksi suurin osa projekteistani on tehty oppimisen ja oman kehityksen vuoksi itselleni.
        </p>
      </div>
      <div className="spacer"></div>
      <div className="skills-section">
        <h2>Käyttöjärjestelmät</h2>
        <h5>Osaan</h5>
        <p>Windows, Linux</p>
        <n/>
        <h2>Frontend</h2>
        <h5>Perusosaaminen</h5>
        <p>HTML, CSS, JavaScript, React</p>
        <h5>Opiskellut</h5>
        <p>Python, Java, C#, C, Typescript, PHP</p>
        <h5>Kiinostunut oppimaan lisää</h5>
        <p>Bootstrap, C, C#,</p>
        <n/>
        <h2>Backend</h2>
        <h5>Perusosaaminen</h5>
        <p>My SQL, Java</p>
        <h5>Kiinostunut oppimaan lisää</h5>
        <p>.NET, C#, SQL, Java</p>
        <n/>
        <h2>Serverit</h2>
        <h5>Opiskellut</h5>
        <p> Windows Server, Ubuntu Server</p>
      </div>
      <div className="spacer"></div>
      <div className="cards-section">
        <h2>Projektit</h2>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <MediaCard
            image= {pehutec}
              title="Pehutec Oy - Verkkosivusto"
              link="https://www.pehutec.com/fi/"
              info="React, JavaScript, HTML, CSS"
            />

            <MediaCard
              image= {kasaan}
              title="kasaan Oy - Verkkokauppa"
              link="https://kasaan.fi/"
              info="React, JavaScript, HTML, CSS"
            />

            <div className="weather-card">
            <h3>Sää Oulussa (API)</h3>
            {weather ? (
              <div>
                <p style={{ fontSize: "2rem", margin: "10px 0" }}>{weather.temperature}°C</p>
                <p>Tuuli: {weather.windspeed} km/h</p>
              </div>
            ) : (
              <p>Ladataan säätietoja...</p>
            )}
          </div>
        </div>
        <div className="spacer3"></div>
      </div>
      <div className="about-section">
        <h2>Tietoja</h2>
        <p>
          Olen Nuutti Katajala, full stack -ohjelmoija ja tieto-ja viestintätekniikka opiskelija, joka haluaa oppia juuri sinulla työskennellessä lisää. Olen pääasiassa toteuttanut frontend -projekteja, mutta minulla on myös kokemusta backend -kehityksestä. 
          Tavoitteenani on kehittää taitojani jatkuvasti ja tuoda lisäarvoa tiimillesi.
        </p>
        <div className="spacer"></div>
        <h2>Luonne</h2>
        <p>
          Olen erittäin motivoitunut ja oppimishaluinen tekijä. Työskentelen mahdollisimman efektiivisesti, mutta joskus isompi etukäteis suunnitelu säästäisi minulta aikaa.
           Pidän tiimityöskentelystä ja uskon sen olevan paras tapa saavuttaa tavoitteet, mutta olen tottunut tekemään itsenäisesti töitä pääosin oman yrittäjä taustani vuoksi.
          Olen ihmisläheinen ja helposti lähestyttävä persoona, tai näin olen saanut kuulla. Tykkään auttaa muita ja saada palautetta työstäni, miten säästää aikaa ja parantaa laatua.
        </p>
        <div className="spacer"></div>
        <h2>Ongelma</h2>
        <p>
          Miten lähestyn ongelmaa?
        </p>
        <p>
          Ensimmäisenä yritän ymmärtää ongelman ja sen vaikutukset. Sen jälkeen tarkastan ongelman koodissa, jos en löydä ongelmaa tai en ymmärrä mistä se johtuu käytän, joko tekoälyä tai etsin refrenssin netistä ja debuggaan tällä tavoin.
          Joskus ongelma voi vain vaatia todella yksinkertaisen ratkaisua, jolloin on hyötyä, jos olen ollut jonkun muun kanssa toteuttamassa projektia tai puhelussa, jolloin uudet silmät voi huomata ratkaisun heti.
        </p>
        <div className="spacer"></div>
        <h2>Suunnittelu</h2>
        <p>
          Miten lähestyn projektin suunnittelua?
        </p>
        <p>
          Ensimmäisenä kartoitan vaatimukset ja tavoitteet, jonka jälkeen teen teksti tiedoston johon kokoan tekniikan, aikataulun, vaatimukset yms. Sen jälkeen piirrän jonkinlaisen karkean luonnoksen ja kaavion,
           jolla lähden toteuttamaan projektia. Tämän jälkeen aloitan hahmoittamaan käyttöliittymää ja sen toiminnallisuuksia sekä ulkoasua. Lopuksi aloitan koodaamaan projektia.
        </p>
      </div>
      <div className="spacer3"></div>
      <div className="referees-section">
        <h2>Suosittelijat</h2>
        <p> Katajala Antti: Kasaan Oy - Verkkokauppa </p>
        <p> +358 40 8652951</p>
        <p> Sähköposti: antti.katajala@kasaan.fi</p>
        <div className="spacer"></div>
        <p> Jani Seppälä: PehuTec Oy - Verkkosivusto</p>
        <p> +358 40 6530017</p>
        <p> Sähköposti: jani.seppala@pehutec.com</p>
      </div>
      <div className="spacer3"></div>
      <div className="contact-section">
        <h2>Ota yhteyttä</h2>
        <p>
          Olen avoin uusille mahdollisuuksille ja haasteille. Ota rohkeasti yhteyttä, niin keskustellaan lisää siitä, miten voin auttaa sinua ja tiimiäsi menestymään.
        </p>
        <p>Nuutti Katajala</p>
        <p>Sähköposti: nuutti.katajala@gmail.com</p>
        <p>Puhelin: +358 40 963 7738</p>
      </div>
    </div>
  );
}

export default Main;