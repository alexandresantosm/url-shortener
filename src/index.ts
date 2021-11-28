import express from "express";
import dotenv from "dotenv";
import { route } from "./routes";

dotenv.config();

const api = express();
api.use(express.json());

api.use("/", route);

api.listen(process.env.PORT_SERVER, statusServer);

function statusServer() {
  console.log(
    `Server is running in ${process.env.ENTRY_POINT}:${process.env.PORT_SERVER}`
  );
}
