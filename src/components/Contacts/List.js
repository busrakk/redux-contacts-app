import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, removeAllContacts } from "../../redux/contactsSlice";
import Item from "./Item";

const List = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.selectAll);

  const handleDeleteAll = () => {
    if(window.confirm("are you sure?")){
      dispatch(removeAllContacts())
    }
  }

  return (
    <div>
      <button onClick={handleDeleteAll}>Delete All</button>
      {contacts.map((contact) => (
        <Item key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default List;
