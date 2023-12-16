// login function
import axios from "axios";
import { baseUrl } from ".."; 

export async function loginRequest({ email, password }) {
  try {
    const response = await axios.post(`${baseUrl}/api/login`, {
      email,
      password,
    }); 
    
    if (response.data.user.id_cms_privileges !== 4) {
      throw new Error("Le rôle de votre compte n'est pas chauffeur !");
    }
    return response.data;
  } catch (error) { 
     throw error;
  }
}
