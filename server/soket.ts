import * as dotenv from "dotenv";
dotenv.config();
import { Server, Soket } from "soket.io";
import { Server as HttpServer } from "http";

export class SoketServer {
  public static instance: SoketServer;
  public io: Server;
  soket: Soket | null;

  constructor(server: HttpServer) {
    SoketServer.instance = this;

    this.io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
  }
}
