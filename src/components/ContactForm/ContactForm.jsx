import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          className={css.input}
          onChange={handleChange}
          value={formData.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          className={css.input}
          onChange={handleChange}
          value={formData.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
