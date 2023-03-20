import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContacts } from '../../redux/contactsSlice'

const Item = ({contact}) => {

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    if(window.confirm("are you sure?")){
      dispatch(deleteContacts(id))
    }
  }

  return (
    <div>
      {contact.name}
      {contact.phone_number}
      <button onClick={() => handleDelete(contact.id)}>x</button>
    </div>
  )
}

export default Item
