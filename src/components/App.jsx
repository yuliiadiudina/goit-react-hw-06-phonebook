import { useState, useEffect } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid'
import css from 'components/App.module.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) {
      setContacts(contactsLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (data) => {
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} handleChange={changeFilter} />
      <ContactList filtredContacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
