import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactsSlice";
import Form from "./Form";
import List from "./List";

const Contacts = () => {

  const total = useSelector(contactSelectors.selectTotal)

  return (
    <div>
      <h1>Contacts ({total})</h1>
      <Form />
      <List />
    </div>
  );
};

export default Contacts;
