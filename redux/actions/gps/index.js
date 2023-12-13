import { UPDATE_LOCATION } from "../../types";
import socket from "../../../utils/socket";
export function updateLocation(cords) {
    console.log("from action :", cords)  
    socket.emit("GPS-LOCATION",cords);
  return {
    type: UPDATE_LOCATION,
    payload: cords,
  };
}

 