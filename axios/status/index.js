
import { baseUrl } from "..";
import axios from "axios";

export async function updateOperationStatus(adressId, status) {
    try {
        const response = await axios.put(`${baseUrl}/api/update/location/${adressId}`, {
            status: status
        });
        return response.data
    } catch (err) {
        return err
    }
}