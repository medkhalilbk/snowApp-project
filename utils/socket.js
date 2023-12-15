import { io } from "socket.io-client";
const socket = io.connect("http://207.244.248.91:4000");
export default socket;
