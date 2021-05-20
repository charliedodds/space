import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faUserCheck,
  faUserTimes,
  faMountain,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Planet.module.scss';

const Planet = ({ planet, getPlanets }) => {
  const { _id, imgURL, name, hasKnownLife, type, noOfMoons } = planet;

  const sendDeleteRequest = () => {
    fetch(`https://chaz-planet-api.herokuapp.com/planets/${_id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('planet deleted');
        getPlanets();
      })
      .catch((err) => console.error(err));
  };
  return (
    <article className={styles.Planet}>
      {/* <p>{id}</p> */}
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      <section className={styles.info}>
        <div className={hasKnownLife ? styles.green : styles.red}>
          <FontAwesomeIcon icon={hasKnownLife ? faUserCheck : faUserTimes} />
        </div>
        <div>
          <FontAwesomeIcon icon={faMountain} />
          <p>{type}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} />
          <p>{noOfMoons}</p>
        </div>
      </section>
      <button onClick={sendDeleteRequest}>Delete</button>
    </article>
  );
};

export default Planet;
