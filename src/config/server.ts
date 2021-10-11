import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import Routes from "./routes";
import { mongoDBConnect } from "./mongo";
import { client, client as ClientRedis } from "./redis";
import morgan from "morgan";

//CONFIGURAR dot.env
dotenv.config();
class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Métodos iniciales.
    this.logHttpWMorgan();
    this.middlewares();
    this.routes();
    this.database();
    this.redisDatabase();
  }

  logHttpWMorgan(): void {
    process.env.NODE_ENV === "development" ? this.app.use(morgan("dev")) : "";
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());

    // Carpeta Publica
    this.app.use(express.static("public"));
  }

  routes(): void {
    this.app.use("/api", Routes);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }

  async database(): Promise<void> {
    await mongoDBConnect();
  }

  redisDatabase(): void {
    client.on("connect", () => {
      console.log("Connected to redis");
    });
  }
}
export default Server;
