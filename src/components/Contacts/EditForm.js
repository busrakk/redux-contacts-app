import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContacts } from "../../redux/contactsSlice";

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !number) return false;

    dispatch(updateContacts({
        id: contact.id,
        changes: {
            name,
            number,
        },
    }))
    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="phone number"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditForm;
