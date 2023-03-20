import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom'
import { contactSelectors } from '../../redux/contactsSlice';
import EditForm from './EditForm'

const Edit = () => {

    const { id } = useParams();

    const contact = useSelector((state) => contactSelectors.selectById(state, id))

    if(!contact){
      return <Navigate replace to="/" />
    }

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  )
}

export default Edit
