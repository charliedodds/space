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
        <h3>life</h3>
        <h3>type</h3>
        <h3>moons</h3>
        <h3>delete</h3>
      </section>
      <section className={styles.container}>
        {planets &&
          planets.map((planet) => (
            <Planet key={planet._id} planet={planet} getPlanets={getPlanets} />
          ))}
      </section>
      <section className={styles.newPlanetContainer}>
        <button className={styles.toggleFormBtn} onClick={toggleForm}>
          {showForm ? 'Hide New Planet Form' : 'Add Planet'}
        </button>
        {showForm && (
          <NewPlanetForm getPlanets={getPlanets} setShowForm={setShowForm} />
        )}
      </section>
    </section>
  );
};

export default PlanetsTable;
