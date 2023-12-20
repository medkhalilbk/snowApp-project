import { io } from "socket.io-client";
const socket = io.connect("https://snow-app.com:4000");
export default socket;
