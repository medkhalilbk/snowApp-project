import { useSelector } from "react-redux";
import { baseUrl } from "..";
import axios from "axios";
export async function getOperation(id, elemntPerPage, page) {
    var response = null
    try {
        if (id && elemntPerPage && page) {
            throw new Error({
                'error': false,
                "message": "parrsing data to axios error"
            });
        } else {
            if (elemntPerPage && elemntPerPage > 0) {
                response = await axios.get(`${baseUrl}/api/mobile/operations/${id}?per_page=${elemntPerPage}`);

            } else if (page && page > 1) {
                response = await axios.get(`${baseUrl}/api/mobile/operations/${id}?page=${page}`);
            }
            else {
                response = await axios.get(`${baseUrl}/api/mobile/operations/${id}`);
            }
            return response.data; 
        }
    } catch (err) {
        throw err
    }
}