import axios from "axios";
const backEndUrl = import.meta.env.VITE_BACK_END_URL;

export const addQuote = async (formData) => {
  try {
    let res = await axios.post(`${backEndUrl}/quote/addQuote`, formData);
    return res;
  } catch (error) {
    throw error;
  }
};
