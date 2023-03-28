import PropTypes from 'prop-types';
import ContactListElement from '../ContactListElement/ContactListElement'

const ContactList = ({remove, contacts}) => { 
	return(
		<>
		{contacts.map(({ id, name, number }) => (
		  <ContactListElement
			id={id}
			name={name}
			number={number}
			onDeleteContact={remove}
			key={id}
		  />
		))}
		</>	
	)
}

ContactList.propTypes = {
	remove:PropTypes.func.isRequired,
   contacts: PropTypes.arrayOf(
	PropTypes.shape({
	 name: PropTypes.string.isRequired,
	 id:PropTypes.string.isRequired,
	 number:PropTypes.string.isRequired,
	})
   )
}

export default ContactList
