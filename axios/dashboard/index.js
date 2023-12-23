 
import { baseUrl } from ".."; 
import axios from "axios"; 
 
export async function getAllOperations({userId},pages) { 
    try { 
        // let pages = args[0] | 1 ;
        console.log(" from axios "+pages)
        // hardcoded id
        const response = await axios.get(`${baseUrl}/api/mobile/operations/${11}?per_page=10`);  

        if(pages && pages>0){
         const response = await axios.get(`${baseUrl}/api/mobile/operations/${11}?per_page=10&page=${pages}`);  
            console.log(`${baseUrl}/api/mobile/operations/${11}?per_page=10&page=${pages}`)
            return response.data.message
        }
        return response.data.message
    } catch (err) {
        throw err
    }
}