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

      {/* <SearchFilter
			OnChangeFilter={this.changeFilter}
			valueFilter={this.state.filter}
		  /> */}
      <ContactList contacts={filterContacts()} remove={hendeleClickDelete} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if(this.state.contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())){
// 		alert(`${name} is already in contacts`)
// 	} else{
// 		this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))
// 	}};

//   hendeleClickDelete = evt => {
//     this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== evt),
//     });
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: ''
//     })
//   };

//   componentDidMount(){
// 	const contact = localStorage.getItem('contacts');
//     const parseContacs = JSON.parse(contact);
// 	if(parseContacs){
// 		this.setState({contacts: parseContacs})
// 	}
//   }

//   componentDidUpdate(_, prevState) {
// 	if(prevState !== this.state.contacts){
// 		localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
// 	}
//   }

//   filterContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   render() {
//     return (
//       <div>

//         <ContactForm onSubmit={this.addContact} onResetArr={this.state.contacts}/>

//         {/* <SearchFilter
//           OnChangeFilter={this.changeFilter}
//           valueFilter={this.state.filter}
//         /> */}
//         <ContactList
//           contacts={this.filterContacts()}
//           remove={this.hendeleClickDelete}
//         />
//       </div>
//     );
//   }
// }
