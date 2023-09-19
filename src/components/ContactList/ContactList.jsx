import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import  ContactListItem  from 'components/ContactListItem/ContactListItem'

const ContactList = ({ filtredContacts, deleteContact }) => {
	return (
		<ul className={css.contactList}>
			{filtredContacts.map(contact => {
				return <ContactListItem 
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}/>
			}
			)}
		</ul>
	)
}

ContactList.propTypes = {
	filtredContacts: PropTypes.array.isRequired, 
	deleteContact: PropTypes.func.isRequired,
};

export default ContactList