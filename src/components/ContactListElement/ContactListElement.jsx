import { ContactName,ContactLi,ContactNumber,DeleteButtton } from './ContactListElement.styled';

const ContactListElement = ({ id, name, number, onDeleteContact }) => {
	return (
	  <ContactLi>
		<ContactName>{name}: </ContactName>
		<ContactNumber>{number}</ContactNumber>
		<DeleteButtton
		  type="button"
		  onClick={() => {
			onDeleteContact(id);
		  }}
		>
		  Delete
		</DeleteButtton>
	  </ContactLi>
	);
  };

export default ContactListElement