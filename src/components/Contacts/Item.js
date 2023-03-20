import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
      {contact.number}
      <button onClick={() => handleDelete(contact.id)}>x</button>
      <Link to={`/edit/${contact.id}`}>Edit</Link>
    </div>
  )
}

export default Item
