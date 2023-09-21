import PropTypes from 'prop-types';
import {
  List,
  Item,
  ContactName,
  DeleteButton,
  DeleteIcon,
} from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
