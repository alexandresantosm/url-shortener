import { URLController } from "./controller/URLController";
import { Router } from "express";

const route = Router();
const urlController = new URLController();

route.post("/shorten", urlController.shorten);

export { route };
