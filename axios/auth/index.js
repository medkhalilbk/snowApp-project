// login function
import { baseUrl } from "..";
import axios from "axios";
export async function loginRequest({ email, password }) {
  try {
    const data = await axios.post(baseUrl + "/v1/auth/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}