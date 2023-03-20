import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const Form = () => {
  const [name, setName] = useState("");
  const  dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name) return false;

    // const names = name.split(',');

    dispatch(addContact({ id:nanoid(), name }))
    // const data = names.map((name) =>({ id:nanoid(), name }))
    // dispatch(addContacts(data))

    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </form>
    </div>
  );
};

export default Form;
