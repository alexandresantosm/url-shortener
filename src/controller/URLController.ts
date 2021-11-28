import { Request, Response } from "express";
import dotenv from "dotenv";
import shortId from "shortid";
import { URLModel } from "../database/model/URL";

dotenv.config();

export class URLController {
  async shorten(req: Request, res: Response): Promise<void> {
    // Verificar se a URL existe no DB
    const { originURL } = req.body;
    const url = await URLModel.findOne({ originURL });
    if (url) {
      res.json(url);
      return;
    }
    // Criar o hash para essa URL
    const hash = shortId.generate();
    const endPoint = process.env.ENTRY_POINT;
    const port = process.env.PORT_SERVER;
    const shortURL = `${endPoint}:${port}/${hash}`;
    // Salvar no DB
    const newURL = await URLModel.create({ originURL, hash, shortURL });
    // Retornar a URL salva
    res.json(newURL);
  }

  async redirect(req: Request, res: Response): Promise<void> {
    // Pegar o hash pela URL
    const { hash } = req.params;
    // Encontrar a URL original pelo hash
    const url = {
      originURL: "https://github.com/motdotla/dotenv",
      hash,
      shortURL: "http://localhost:5000/I5pNQjbYV",
    };
    // Redirecionar para a URL original
    res.status(307).redirect(url.originURL);
  }
}
