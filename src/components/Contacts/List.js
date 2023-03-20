import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactsSlice'
import Item from './Item';

const List = () => {

    const contacts = useSelector(contactSelectors.selectAll);

  return (
    <div>
      {
        contacts.map(contact => (<Item key={contact.id} contact={contact} />))
      }
    </div>
  )
}

export default List
