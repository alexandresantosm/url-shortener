import { Request, Response } from "express";
import dotenv from "dotenv";
import shortId from "shortid";

dotenv.config();

export class URLController {
  async shorten(req: Request, res: Response): Promise<void> {
    // Verificar se a URL existe no DB
    const { originURL } = req.body;
    // Criar o hash para essa URL
    const hash = shortId.generate();
    const endPoint = process.env.ENTRY_POINT;
    const port = process.env.PORT_SERVER;
    const shortURL = `${endPoint}:${port}/${hash}`;
    // Salvar no DB
    // Retornar a URL salva
    res.json({ originURL, hash, shortURL });
  }
}
