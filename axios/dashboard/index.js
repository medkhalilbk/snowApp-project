 
import { baseUrl } from ".."; 
import axios from "axios"; 
 
export async function getAllOperations({userId},pages) { 
    try { 
  
        // hardcoded id
        const response = await axios.get(`${baseUrl}/api/mobile/driver/34`);  
  
        return response.data.message
    } catch (err) {
        throw err
    }
}