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

    if (!name || !number) return false;

    dispatch(
      updateContacts({
        id: contact.id,
        changes: {
          name,
          number,
        },
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="name" class="mb-3 block text-sm font-medium text-[#07074D]">
          Full Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-3">
        <label
          for="email"
          class="mb-3 block text-sm font-medium text-[#07074D]"
        >
          Telephone Number
        </label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          name="number"
          placeholder="Telephone Number"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
        <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-sm font-semibold text-white outline-none">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
