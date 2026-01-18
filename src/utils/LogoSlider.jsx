import React, { useEffect } from 'react';
import classes from '../styles/LogoSlider.module.css';

const LogoSlider = ({ clientsContent }) => {
  useEffect(() => {
    //const container = document.querySelector(`.${classes.container}`);
    //const slide = document.querySelector(`.${classes.logosSlide}`);

    //const cloneSlide = slide.cloneNode(true);
    //container.appendChild(cloneSlide);
  }, []);

  return (
      <section className={classes.container}>
      <div className={classes.logosSlide}>
        {clientsContent?.map((client, i) => (
          <img key={i} src={client.attributes.logo} alt={`Logo ${i}`} />
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;