import React from 'react';
import {
  List,
  Item,
  ContactName,
  DeleteButton,
  DeleteIcon,
} from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter); 
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
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

