import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const contactContext = createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...state, contacts: action.payload };
    case "GET_ONE_CONTACT":
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
};

const API = "http://localhost:8001/contact";

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getContacts = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_CONTACT",
      payload: data,
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  const addContact = async newContact => {
    await axios.post(API, newContact);
  };

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CONTACT",
      payload: res.data,
    });
  }

  async function updateContact(id, editedContact) {
    let res = await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
    console.log(res);
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        oneContact: state.oneContact,
        addContact,
        getOneContact,
        getContacts,
        deleteContact,
        updateContact,
      }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
