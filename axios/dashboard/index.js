 
import { baseUrl } from ".."; 
import axios from "axios"; 
 
export async function getAllOperations({userId,...args}) { 
    try { 
        let elemntPerPage = args[0] | 1 ;
        // hardcoded id
        const response = await axios.get(`${baseUrl}/api/mobile/operations/${11}?per_page=10`);  
        return response.data.message.data
    } catch (err) {
        throw err
    }
}