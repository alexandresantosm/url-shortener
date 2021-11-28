import express from "express";
import dotenv from "dotenv";
import { route } from "./routes";
import { MongoConnection } from "./database/MongoConnection";

dotenv.config();

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

api.use("/", route);

api.listen(process.env.PORT_SERVER, statusServer);

function statusServer() {
  console.log(
    `Server is running in ${process.env.ENTRY_POINT}:${process.env.PORT_SERVER}`
  );
}
