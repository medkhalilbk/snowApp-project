import { UPDATE_LOCATION } from "../../types";
import socket from "../../../utils/socket";
import { useSelector } from "react-redux";

export function HandShakeSocket(userId) {
  socket.emit("AUTH", { userId: userId });
}

export function updateLocation(cords) {
  let gpsObject = {
    deviceName: 352009113798859,
    cordsData: cords
  }
  socket.emit("GPS-LOCATION", gpsObject);
  return {
    type: UPDATE_LOCATION,
    payload: cords,
  };
}

export function statusChnagingListner() {

  
  //Getting the location of user and sending it to store

}