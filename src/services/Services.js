import axios from "axios";
const baseUrl = "http://localhost:3001/contacts";

const addContact = (newContact) => {
  return axios.post(baseUrl, newContact);
};

const deleteContact=(id)=>{
    return axios.delete(`${baseUrl}/${id}`)
}

const updateContact=(oldContact, newContact)=>{
    return axios.patch(`${baseUrl}/${oldContact.id}`, {
        number:newContact.number
    })
}

export default { addContact, deleteContact, updateContact };
