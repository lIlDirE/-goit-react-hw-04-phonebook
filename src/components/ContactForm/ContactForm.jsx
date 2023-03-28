import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormContact,
  LabelContact,
  FormDiv,
  FormInput,
  Label,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit, onResetArr }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function resetForm() {
    setName('');
    setNumber('');
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name, number });
    const temp = onResetArr.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    if (temp.length === 0) {
      resetForm();
    }
  };

  return (
    <Label>
      <h1>Phonebook</h1>
      <FormContact onSubmit={handleSubmitForm}>
        <FormDiv>
          <LabelContact>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onInput={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelContact>

          <LabelContact>
            Phone
            <FormInput
              type="tel"
              name="number"
              value={number}
              onInput={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelContact>

          <button name="submit" type="submit">
            Add contact
          </button>
        </FormDiv>
      </FormContact>
    </Label>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onResetArr: PropTypes.array.isRequired,
};