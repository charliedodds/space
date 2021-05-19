import React from 'react';
import styles from './Planet.module.scss';

const Planet = ({ planet, getPlanets }) => {
  const { _id, id, name, hasKnownLife, type, noOfMoons } = planet;

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
      <p>{id}</p>
      <h4>{name}</h4>
      <p>{hasKnownLife ? 'true' : 'false'}</p>
      <p>{type}</p>
      <p>{noOfMoons}</p>
      <button onClick={sendDeleteRequest}>Delete</button>
    </article>
  );
};

export default Planet;
