import { useState } from 'react';
import styles from './NewPlanetForm.module.scss';

const NewPlanetForm = ({ getPlanets, setShowForm }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    hasKnownLife: false,
    type: '',
    noOfMoons: 0,
  });

  const { name, hasKnownLife, type, noOfMoons } = inputValues;

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setInputValues({
        ...inputValues,
        [e.target.name]: !inputValues[e.target.name],
      });
    } else if (e.target.type === 'number') {
      setInputValues({ ...inputValues, [e.target.name]: +e.target.value });
    } else {
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }
  };

  const resetForm = () => {
    setInputValues({
      name: '',
      hasKnownLife: false,
      type: '',
      noOfMoons: 0,
    });
    setShowForm(false);
  };

  const sendPostRequest = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(inputValues));
    fetch('https://chaz-planet-api.herokuapp.com/planets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resetForm();
        getPlanets();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className={styles.NewPlanetForm} onSubmit={sendPostRequest}>
      <section className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={name}
          required
        />
      </section>
      <section className={styles.checkboxContainer}>
        <label htmlFor="hasKnownLife">Has Known Life</label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="hasKnownLife"
          id="hasKnownLife"
          value={hasKnownLife}
        />
      </section>
      <section className={styles.inputContainer}>
        <label htmlFor="type">Type</label>
        <input
          onChange={handleChange}
          type="text"
          name="type"
          id="type"
          value={type}
          required
        />
      </section>
      <section className={styles.inputContainer}>
        <label htmlFor="noOfMoons">No of moons</label>
        <input
          onChange={handleChange}
          type="number"
          name="noOfMoons"
          id="noOfMoons"
          value={noOfMoons}
          required
        />
      </section>
      <section className={styles.btnContainer}>
        <button>Submit</button>
      </section>
    </form>
  );
};

export default NewPlanetForm;
