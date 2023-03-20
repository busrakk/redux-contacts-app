import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const  dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !number) return false;

    // const names = name.split(',');

    dispatch(addContact({ id:nanoid(), name, phone_number:number }))
    // const data = names.map((name) =>({ id:nanoid(), name }))
    // dispatch(addContacts(data))

    setName('')
    setNumber('')
  }

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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
