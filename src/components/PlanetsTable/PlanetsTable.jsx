import { useState } from 'react';

import Planet from '../Planet';
import NewPlanetForm from '../NewPlanetForm';

import styles from './PlanetsTable.module.scss';

const PlanetsTable = ({ planets, getPlanets }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className={styles.PlanetsTable}>
      <section className={styles.headers}>
        <h3>id</h3>
        <h3>name</h3>
        <h3>hasKnownLife</h3>
        <h3>type</h3>
        <h3>noOfMoons</h3>
        <h3>Delete</h3>
      </section>
      <section className={styles.container}>
        {planets.map((planet) => (
          <Planet key={planet.id} planet={planet} getPlanets={getPlanets} />
        ))}
      </section>
      <section className={styles.newPlanetContainer}>
        <button onClick={toggleForm}>Add Planet</button>
        {showForm && (
          <NewPlanetForm getPlanets={getPlanets} setShowForm={setShowForm} />
        )}
      </section>
    </section>
  );
};

export default PlanetsTable;
