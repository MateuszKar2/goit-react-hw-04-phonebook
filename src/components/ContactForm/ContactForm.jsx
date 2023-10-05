import React, { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';


const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number, id: uuid() });
    setName('');
    setNumber('');
  };

      return (
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="number">
              Number
            </label>
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
      );
    }
  

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;