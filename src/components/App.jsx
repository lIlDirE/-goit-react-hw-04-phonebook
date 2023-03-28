import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

import { nanoid } from 'nanoid';
import SearchFilter from './SearchFilter/SearchFilter.jsx';

export function App() {
  const [contacts, setContacts] = useState(() => getStorageContacts() || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  function getStorageContacts () {
	return JSON.parse(localStorage.getItem('contacts'))	  
  }
  
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const hendeleClickDelete = evt => {
    setContacts(contacts.filter(contact => contact.id !== evt));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactForm onSubmit={addContact} onResetArr={contacts} />

      <SearchFilter
			OnChangeFilter={changeFilter}
			valueFilter={filter}
		  />
      <ContactList contacts={filterContacts()} remove={hendeleClickDelete} />
    </div>
  );
}
