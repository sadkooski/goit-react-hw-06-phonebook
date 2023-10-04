import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, setFilter } from 'redux/actions';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        dispatch(addContact(storedContacts));
      }
    } catch (error) {
      console.error('Error while loading contacts from localStorageee:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error while saving contacts to localStorage:', error);
    }
  }, [contacts]);

  const handleBrowser = evt => {
    const filterValue = evt.target.value.toLowerCase();
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter)
  );
  const contactsStatus = filteredContacts.length;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handler={handleBrowser} />
      {contactsStatus > 0 &&
        filteredContacts.map(contact => (
          <ContactList
            key={contact.id}
            id={contact.id}
            number={contact.number}
            name={contact.name}
          />
        ))}
    </div>
  );
};

export default App;
