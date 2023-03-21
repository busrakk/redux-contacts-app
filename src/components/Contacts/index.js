import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactsSlice";
import Form from "./Form";
import List from "./List";

const Contacts = () => {
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <div class="flex items-center justify-center p-2">
      <div class="mx-auto w-full max-w-[750px]">
        <div className="container mt-4">
          <ol class="flex items-center justify-center mb-6 w-full p-3 space-x-2 font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:text-base sm:p-4 sm:space-x-4">
            <li class="flex justify-center text-2xl space-x-4 items-center text-[#6A64F1]">
              Contacts
              <span class="flex items-center w-5 h-5 mr-2">
                ({total})
              </span>
            </li>
          </ol>
          <Form />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
