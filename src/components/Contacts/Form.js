import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    // const names = name.split(',');

    dispatch(addContact({ id: nanoid(), name, number: number }));
    // const data = names.map((name) =>({ id:nanoid(), name }))
    // dispatch(addContacts(data))

    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            for="name"
            className="mb-3 block text-sm font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-3">
          <label
            for="email"
            className="mb-3 block text-sm font-medium text-[#07074D]"
          >
            Telephone Number
          </label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            name="number"
            placeholder="Telephone Number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-sm font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
