import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import Routes from "./routes";
import { mongoDBConnect } from "./mongo";
import { client as ClientRedis } from "./redis";

//CONFIGURAR dot.env
dotenv.config();
class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Métodos iniciales.
    this.middlewares();
    this.routes();
    this.database();
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
}
export default Server;
