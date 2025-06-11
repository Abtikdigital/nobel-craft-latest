import axios from "axios";
const backEndUrl = import.meta.env.VITE_BACK_END_URL;

export const addContact = async (formData) => {
  try {
    let res = await axios.post(`${backEndUrl}/contact/addContact`,formData);
    return res;
  } catch (error) {
    throw error;
  }
};
