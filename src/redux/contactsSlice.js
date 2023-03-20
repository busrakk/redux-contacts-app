import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

// selector
export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

const contactsSlice = createSlice({
    name: 'contacts',
    // initialState: contactAdaptor.getInitialState(),
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
    },
    extraReducers: {},
})

export const { addContact, addContacts } = contactsSlice.actions;

export default contactsSlice.reducer;