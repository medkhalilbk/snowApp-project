// login function
import { baseUrl } from "..";
import axios from "axios";
import { storeData } from "../../helpers/localStoarge";
export async function loginRequest({ email, password }) {
  try {
    const res = await axios.post(baseUrl + "/v1/auth/login", {
      email: email,
      password: password,
    });
    const tokenSaved = await storeData("token", res.data.tokens.access.token)
    return res;
  } catch (error) {
    throw new Error(error)

  }
}