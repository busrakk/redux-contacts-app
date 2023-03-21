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
    <div className="flex items-center justify-center p-2">
      <div className="mx-auto w-full max-w-[750px]">
        <div className="container mt-4">
          <ol className="flex items-center justify-center mb-6 w-full p-3 space-x-2 font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:text-base sm:p-4 sm:space-x-4">
            <li className="flex justify-center text-md space-x-4 items-center text-[#6A64F1]">
              Edit
            </li>
          </ol>
          <EditForm contact={contact} />
        </div>
      </div>
    </div>
  )
}

export default Edit
