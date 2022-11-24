import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { ExpressPeerServer, PeerServer } from "peer";
import router from "./routes/stream";
import { room } from "./controllers/streamPageHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", router);

const PORT: string | number = process.env.PORT || 3001;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const peerServer = ExpressPeerServer(server, {
  path: "/",
});
app.use("/peerjs", peerServer);
peerServer.on("connection", (client) => console.log(client));

io.on("connection", (socket) => {
  //   console.log(socket);
  socket.on("join-room", (roomId: string, userId: number, userName: string) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message, userName);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
