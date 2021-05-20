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
      {planets &&
        planets.map((planet) => (
          <Planet key={planet._id} planet={planet} getPlanets={getPlanets} />
        ))}
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
