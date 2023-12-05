// resetPassword function
import { baseUrl } from "..";
import axios from "axios"; 
export async function forgetPassword({ email }) {
  try {
    const res = await axios.post(baseUrl + "/api/forget-password", { email: email}); 
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
