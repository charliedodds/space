import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

import PlanetsTable from './components/PlanetsTable';

import styles from './App.module.scss';

const App = () => {
  const [planets, setPlanets] = useState(null);
  const [showRocket, setShowRocket] = useState(true);
  const [showPlanets, setShowPlanets] = useState(false);

  const getPlanets = () => {
    fetch('https://chaz-planet-api.herokuapp.com/planets')
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
      });
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const rocketStyles = showRocket ? styles.rocket : styles.blastOff;
  const rocketStylesObj = {};

  const togglePlanets = () => {
    setShowPlanets(!showPlanets);
    setShowRocket(false);
  };

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Space: The Final Frontend</h1>
      </header>
      <button
        style={rocketStylesObj}
        className={rocketStyles}
        onClick={togglePlanets}
      >
        <FontAwesomeIcon icon={faRocket} />
      </button>
      {showPlanets && (
        <PlanetsTable planets={planets} getPlanets={getPlanets} />
      )}
    </div>
  );
};

export default App;
